import React from 'react';
import {Link} from 'react-router-dom';
import { Container,Cart,Logo } from './styles';
import {MdShoppingCart} from 'react-icons/md';

export default function Header() {
  return (
    <Container>      
        <Logo to="/"><div>RN Store</div></Logo>      
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingCart size={36} color="#FFF"/>
      </Cart>
    </Container>
  );
}
