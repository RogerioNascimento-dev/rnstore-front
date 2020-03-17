import produce from 'immer';

export default function sale(state = {
  customer_id: 0,
  total_sale: 0,
  estimate_delivery: 0,
}, action){
  
  switch(action.type){
    case 'UPDATE_SALE_ESTIMATE':
      return produce(state,draft =>{
        draft.total_sale = action.total_sale;      
        draft.estimate_delivery = action.maxEstimateDelivery  
      })
    break;
    case 'UPDATE_CUSTOMER_ID':
      return produce(state,draft =>{
        draft.customer_id = action.customer_id;              
      })
    break;
    case 'CLEAR_SALE':
      return {
        customer_id: 0,
        total_sale: 0,
        estimate_delivery: 0,
      };
    break;
    default:
      return state;
    break;
  }

}