import {products} from "../../data"

export default function productActions() {
  let result = products
  return{
    type:"PRODUCT-LIST",
    payload: result,
  }
  
}