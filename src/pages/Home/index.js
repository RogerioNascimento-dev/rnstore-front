import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { ProductList } from './styles';
import {MdAddShoppingCart} from 'react-icons/md';
import api from '../../services/api';
import {formatPrice} from '../../util/format';
import { toast } from "react-toastify";
import * as CartActions from '../../store/modules/cart/actions';
export default function Home() {
  const dispatch = useDispatch();

  function handleAddProductCart(product){    
    dispatch(CartActions.addCart(product));    
    toast.success("Produto adicionado com sucesso!");
  }
  
  const [products,setProducts] = useState([]);
  useEffect(() => {    
   async function getAllProducts(){
      const response = await api.get('/products');
      const data = response.data.map(product =>({
        ...product,
        priceFormatted: formatPrice(product.price)
      }));
      setProducts(data);
    }
    getAllProducts();    
  },[]); 

  return (
    <div className="rootContainer">
    <ProductList className="products-list">
      {products.map(product =>(
        <li key={product.id}>
          <strong>{product.name}<span>{product.description}</span></strong>
          <div>
          <span>{product.priceFormatted}</span>
          <strong>Entrega em <b>{product.estimate_delivery}</b> dias</strong>
          </div>
          <button type="button" onClick={() => handleAddProductCart(product)}>
            <div>
              <MdAddShoppingCart color="#FFF" size={18}/>
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
      </li>
      ))}
    </ProductList>
    </div>
  );
}
