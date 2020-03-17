import React from 'react';
import { Container,Cart,Menu } from './styles';
import {MdShoppingCart} from 'react-icons/md';
import { useSelector } from 'react-redux';
export default function Header() {
  const {cart} = useSelector(store => store);
  
  return (
    <Container>      
        <div>
        <Menu to="/"><div>RN Store</div></Menu>      
        <Menu to="/vendas"><div>Vendas</div></Menu>
        </div>
      <Cart to="/carrinho">
        <div>
          <strong>Meu carrinho</strong>
  <span>{`${cart.length} produto`}{(cart.length > 1)?'s':''}</span>
        </div>
        <MdShoppingCart size={36} color="#FFF"/>
      </Cart>
    </Container>
  );
}
