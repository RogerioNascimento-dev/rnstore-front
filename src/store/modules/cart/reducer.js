import produce from 'immer';
 
export default function cart(state = [], action){    
  switch(action.type){
    case 'ADD_CART':
      return produce(state,draft =>{
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        if(productIndex >= 0){
          draft[productIndex].quantity ++;
        }else{
          draft.push({...action.product, quantity:1});
        }
      })
    break;

    case 'REMOVE_CART':
      return produce(state,draft =>{
        const productIndex = draft.findIndex(p => p.id === action.id);
        if(productIndex >= 0){          
          draft.splice(productIndex,1);          
        }
      })
    break;
    case 'UPDATE_AMOUNT':
      return produce(state, draft=>{
        const productIndex = draft.findIndex(p => p.id === action.id);
        if(productIndex >= 0 && action.quantity > 0){
          draft[productIndex].quantity = Number(action.quantity);
        }
      })
    break;    

    case 'CLEAR_CART':
      return [];
    break;

    default:
      return state;
    break;
  }    
  
}