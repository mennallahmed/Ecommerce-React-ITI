export default function CartItemsReducer(state=[],action) {
  if(action.type === "CART-LIST") return action.payload;
  return state;
}
