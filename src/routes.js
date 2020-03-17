import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Sales from './pages/Sales';

export default function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/carrinho" exact component={Cart}/>
      <Route path="/vendas" exact component={Sales}/>
    </Switch>
  );
}