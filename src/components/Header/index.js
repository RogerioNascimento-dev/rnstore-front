import React from 'react';
import { Container,Cart,Logo } from './styles';
import {MdShoppingCart} from 'react-icons/md';
import { useSelector } from 'react-redux';
export default function Header() {
  const {cart} = useSelector(store => store);
  
  return (
    <Container>      
        <Logo to="/"><div>RN Store</div></Logo>      
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
