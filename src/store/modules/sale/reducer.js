import produce from 'immer';

export default function sale(state = {
  customer_id: 0,
  total_sale: 0,
}, action){

  console.tron.log(action);
  switch(action.type){
    case 'UPDATE_TOTAL':
      return produce(state,draft =>{
        draft.total_sale = action.total_sale;        
      })
    break;
    default:
      return state;
    break;
  }

}