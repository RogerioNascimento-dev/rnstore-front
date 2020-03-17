export function updateSaleAndEstimate(total_sale,maxEstimateDelivery){  
  return {type:'UPDATE_SALE_ESTIMATE', total_sale,maxEstimateDelivery }
}

export function updateCustomerId(customer_id){  
  return {type:'UPDATE_CUSTOMER_ID', customer_id }
}

export function clearSale(){
  return {type:'CLEAR_SALE'};
}