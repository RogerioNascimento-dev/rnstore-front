import React,{useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { toast } from "react-toastify";
import {formatPrice} from '../../util/format';
import { Container,ProductTable,Total } from './styles';
import {MdRemoveCircle,MdAddCircle,MdDelete} from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';
import * as SaleActions from '../../store/modules/sale/actions';
import api from '../../services/api';


export default function Cart() {
  const dispatch = useDispatch();
  const {cart,sale} = useSelector(state => state);  
  const [productsCart,setProductsCart] = useState([]);
  const [totalSale,setTotalSale] = useState(0);
  const [maxEstimateDelivery,setMaxEstimateDelivery] = useState(0);
  const [customers,setCustomers] = useState([]);
  const [customerId,setCustomerId] = useState(sale.custumer_id);

  
  useEffect(()=>{
    async function getAllCustomers(){
      const customers = await api.get('/customers');
      setCustomers(customers.data);
    }
    getAllCustomers();
  },[]);
  
  useEffect(()=>{
    const products = cart.map(product =>({
      ...product,
      subtotal: formatPrice(product.price * product.quantity)
    }))
    setProductsCart(products);
    
    },[cart]);

    useEffect(()=>{
      let totalSaleIncrement = 0;
      let maxEstimateDelivery = 0;
      productsCart.map(p =>{      
        totalSaleIncrement += (p.price * p.quantity);      
        if(p.estimate_delivery > maxEstimateDelivery){
          maxEstimateDelivery = p.estimate_delivery;
        }
      })
      setTotalSale(totalSaleIncrement);   
      setMaxEstimateDelivery(maxEstimateDelivery);
      dispatch(SaleActions.updateSaleAndEstimate(totalSale,maxEstimateDelivery));    
    },[dispatch, productsCart, totalSale]);
  
    
  function handleRemoveCart(id){
    dispatch(CartActions.removeCart(id));
    toast.success("Produto removido com sucesso!");
  }
  function handleIncrement(product){    
    dispatch(CartActions.updateAmount(product.id,product.quantity +1));
  }
  function handleDecrement(product){    
    dispatch(CartActions.updateAmount(product.id,product.quantity-1));
  }  
  function handleChangeCustomer(customer_id){
    setCustomerId(customer_id);
    dispatch(SaleActions.updateCustomerId(customer_id));
  }
  async function handleCheckOut(){
    if(!sale.customer_id){
      toast.error("O cliente precisa ser selecionado.");
      return false;
    }
      if(productsCart.length === 0){
        toast.error("Adicione ao menos 1 produto no carrinho.");
        return false;
      }    
      
      try{
        const response = await api.post('/sales',{
          sale,cart
        });        
        if(response.status === 201){
          dispatch(CartActions.clearCart());
          dispatch(SaleActions.clearSale());
          toast.success("Compra finalizada com sucesso!");
        }
      }catch(error){        
        toast.error("Algo inesperado aconteceu!");
      }
  }

  return (
    <div className="rootContainer">
    <Container>  
      <select onChange={(e) => handleChangeCustomer(e.target.value)} >
        <option value="0">--Selecione um cliente--</option>
        {customers.map(customer =>(
          <option key={customer.id} selected={sale.customer_id == customer.id ? true : false} value={customer.id}>{customer.name}</option>       
        ))}        
      </select>
     
        <div>
        {productsCart.length > 0 && (
          <p>O prazo estimado de entrega desta compra é de <strong>{maxEstimateDelivery}</strong> dias</p>
        )}
        {productsCart.length === 0 && (
          <p>Nenhum produto adicionado ao carrinho.</p>
        )}
      </div>
      <ProductTable>     
        <thead>
          <tr>            
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>   
        <tbody>
          {productsCart.map(product => (
            <tr key={product.id}>
            <td>
              <strong>{product.name}</strong>
          <span>{product.priceFormatted}</span>
            </td>
            <td>
              <div>
              <button onClick={() => handleDecrement(product)} type="button"><MdRemoveCircle size={20} color="#0057a0"/></button>
              <input type="number" readOnly value={product.quantity} />
              <button onClick={() => handleIncrement(product)} type="button"><MdAddCircle size={20} color="#0057a0"/></button>
              </div>
            </td>
            <td>
          <strong>{product.subtotal}</strong>
             </td>
             <td>
            <button onClick={() => handleRemoveCart(product.id)} type="button"><MdDelete size={20} color="#0057a0"/></button>
            </td>
          </tr>
          ))}          
        </tbody>
      </ProductTable>
      <footer> 
          <button onClick={()=> handleCheckOut()} type="button">Finalizar compra</button>
          <Total>
            <span>Total</span>
          <strong>{formatPrice(sale.total_sale)}</strong>
          </Total>
        </footer>
    </Container>
    </div>
  );
}
