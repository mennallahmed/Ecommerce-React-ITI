export default function CartReducer(state={cart:0},action) {
  if(action.type === "INCREASE-CART") return{cart: state.cart +1}
  if(action.type === "DECREASE-CART") return{cart: state.cart -1}
  return state;
}
