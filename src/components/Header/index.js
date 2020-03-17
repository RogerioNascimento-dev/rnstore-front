import React from 'react';
import { Container,Cart,Menu } from './styles';
import {MdShoppingCart} from 'react-icons/md';
import { useSelector } from 'react-redux';
export default function Header() {
  const {cart} = useSelector(store => store);
  
  return (
    
    <Container>      
      <div className="containerHeader">
        <div>
        <Menu to="/"><div>Produtos</div></Menu>      
        <Menu to="/vendas"><div>Vendas</div></Menu>
        </div>
        <Cart to="/carrinho">
        <div>
          <strong>Meu carrinho</strong>
          <span>{`${cart.length} produto`}{(cart.length > 1)?'s':''}</span>
        </div>
        <MdShoppingCart size={36} color="#FFF"/>
      </Cart>
      </div>
    </Container>    
  );
}
