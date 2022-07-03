import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import productActions from '../Redux/actions/productActions'
import Counter from "./Counter"

let cartItems
function ProductInfo(props) {
  let {Sproduct,cartList, getAllProducts,increase, itemToCart} = props
  cartItems =cartList
  let {id} = useParams()
  let[product,setProduct]=useState();
  let filterProduct = [];

  useEffect(()=>{
    getAllProducts()
    
    filterProduct = Sproduct.filter((item)=>{
      return item.id == id
    })
    setProduct(filterProduct)
  },[props])

  let addToCart = (cId)=>{
    increase()
    //Get the clicked item
    let cart = product.find((item)=>{
      return item.id == cId
    })

    //check if item in cart
    let inCart = cartItems.find((item)=>{
      return (item.id == cId? true : false)
    })

    if(inCart){
      cartItems = cartItems.map(item=> item.id ==cId ? {...item, quantity: item.quantity +1}: item)
    }
    else{
      //Add the clicked item to the cart array
      cartItems.push({...cart,quantity: 1})
    }
    //Update the redux cart with cart items
    itemToCart()
    console.log(cartItems)
  }

  return (
    <>
      {product && product.map((item)=>{
        return(
          <section key={`${item.id}`} className='my-container'>
            <div className='col-4 m-5' >
              <img style={{width:"33vw"}} src={`${item.img}`}/>
            </div>
            <div className='col-4 m-5 p-details'>
              <h3>{item.desc}</h3>
              <p>{item.cat} </p>
              <p style={{padding:"8% 0"}}>{item.price} </p>
              <button className='cart-btn' onClick={()=>{addToCart(item.id)}}>Add To Cart</button>
            </div>
          </section>
        )
      })}
   </> 
  )
}
let mapStateToProps=(state)=>{
  return{
    Sproduct: state.productList,
    cartList: state.cartList,
  }
}
let mapDispatchToProps=(dispatch)=>{
  return{
    getAllProducts: ()=>dispatch(productActions()),
    increase: ()=> dispatch({type:"INCREASE-CART"}),
    itemToCart: ()=>dispatch({type:"CART-LIST",payload: cartItems})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductInfo)
