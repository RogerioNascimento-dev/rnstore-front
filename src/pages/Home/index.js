import React from 'react';

import { ProductList } from './styles';
import {MdAddShoppingCart} from 'react-icons/md';

export default function Home() {
  return (
    <ProductList>
      <li>
        <strong>Dr. Gabriela Amanda das Neves Jr. <span>Descrição do produto</span></strong>
        <span>R$150,55</span>
        <button type="button">
          <div>
            <MdAddShoppingCart color="#FFF" size={18}/>
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <strong>Nome do produto <span>Descrição do produto</span></strong>
        <span>R$150,55</span>
        <button type="button">
          <div>
            <MdAddShoppingCart color="#FFF" size={18}/>
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <strong>Nome do produto <span>Descrição do produto</span></strong>
        <span>R$150,55</span>
        <button type="button">
          <div>
            <MdAddShoppingCart color="#FFF" size={18}/>
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <strong>Nome do produto <span>Descrição do produto</span></strong>
        <span>R$150,55</span>
        <button type="button">
          <div>
            <MdAddShoppingCart color="#FFF" size={18}/>
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <strong>Nome do produto <span>Descrição do produto</span></strong>
        <span>R$150,55</span>
        <button type="button">
          <div>
            <MdAddShoppingCart color="#FFF" size={18}/>
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <strong>Nome do produto <span>Descrição do produto</span></strong>
        <span>R$150,55</span>
        <button type="button">
          <div>
            <MdAddShoppingCart color="#FFF" size={18}/>
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
