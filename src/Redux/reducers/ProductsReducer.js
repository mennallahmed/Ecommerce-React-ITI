export default function ProductsReducer(state=[],action) {
  if(action.type === "PRODUCT-LIST") return action.payload;
  return state;
}
