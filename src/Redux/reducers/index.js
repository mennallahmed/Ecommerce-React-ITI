import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import ProductsReducer from "./ProductsReducer"
import CartReducer from "./CartReducer";
import CartItemsReducer from "./CartItemsReducer";

export default combineReducers({
  counter: CounterReducer,
  productList: ProductsReducer,
  cartCount: CartReducer,
  cartList: CartItemsReducer
})