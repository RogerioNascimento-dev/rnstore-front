import React,{useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { toast } from "react-toastify";
import {formatPrice} from '../../util/format';
import { Container,ProductTable,Total } from './styles';
import {MdRemoveCircle,MdAddCircle,MdDelete} from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';
import * as SaleActions from '../../store/modules/sale/actions';
export default function Cart() {
  const dispatch = useDispatch();
  const {cart,sale} = useSelector(state => state);
  
  const [productsCart,setProductsCart] = useState([]);
  const [totalSale,setTotalSale] = useState(0);
  useEffect(()=>{
    const products = cart.map(product =>({
      ...product,
      subtotal: formatPrice(product.price * product.amount)
    }))
    setProductsCart(products);
    
    },[cart]);

    useEffect(()=>{
      let totalSaleIncrement = 0;
      productsCart.map(p =>{      
        totalSaleIncrement += (p.price * p.amount);      
      })
      setTotalSale(totalSaleIncrement);   
      dispatch(SaleActions.updateTotal(totalSale));    
    },[dispatch, productsCart, totalSale]);
  
    
  function handleRemoveCart(id){
    dispatch(CartActions.removeCart(id));
    toast.success("Produto removido com sucesso!",{
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }
  function handleIncrement(product){    
    dispatch(CartActions.updateAmount(product.id,product.amount +1));
  }
  function handleDecrement(product){    
    dispatch(CartActions.updateAmount(product.id,product.amount-1));
  }
  function getMaxEstimatedDelivery(){
    let max = 0;
    productsCart.map(item =>{
      if(item.estimate_delivery > max){
        max = item.estimate_delivery;
      }
    })
    return max;
  }
  return (
    <Container>      
        <div>
        {productsCart.length > 0 && (
          <p>O prazo estimado de entrega desta compra é de <strong>{getMaxEstimatedDelivery()}</strong> dias</p>
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
              <input type="number" readOnly value={product.amount} />
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
          <button type="button">Finalizar pedido</button>
          <Total>
            <span>Total</span>
          <strong>{formatPrice(sale.total_sale)}</strong>
          </Total>
        </footer>
    </Container>
  );
}
