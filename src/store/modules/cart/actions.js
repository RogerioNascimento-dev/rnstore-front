export function removeCart(id){
  return {type:'REMOVE_CART',id}
}

export function addCart(product){
  return { type: 'ADD_CART', product }
}

export function updateAmount(id,amount){
  return {type: 'UPDATE_AMOUNT', id,amount}
}