import {combineReducers} from 'redux';
import cart from '../modules/cart/reducer';
import sale from '../modules/sale/reducer';

export default combineReducers({
  cart,
  sale
});