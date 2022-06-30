import React from 'react'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import {CartX } from "react-bootstrap-icons";
import Card from 'react-bootstrap/Card';

let cartItems = [];
function MyCart(props) {
  let {cartList,decrease,itemToCart} = props
  let [product,setProducts] = useState([])
  console.log(cartList)
  
  useEffect(()=>{
   
    setProducts(cartList)
  },[props])

  let removefromCart = (cId)=>{
    decrease()
     let cart = product.filter((item)=>{
      return item[0].id != cId
    })
    cartItems=cart
    itemToCart()
    
  
  }
  return (
    <>
      <h4 style={{margin:"5%"}}>YOUR BAG</h4>
      <div className='my-container'>
      {product.map((item)=>{
      return (
        <Card key={item[0].id} style={{ width: '18rem', margin:"2%",color:"black"}}>
          <NavLink className='product-a' to={`/products/${item[0].id}`}>
          <Card.Img variant="top" src={`${item[0].img}`} />
          </NavLink>
          <Card.Body>
          <Card.Text>{item[0].desc}</Card.Text>
          <Card.Text>{item[0].price}</Card.Text>
          <CartX className='cart-x' onClick={()=>{removefromCart(item[0].id)}}></CartX>
          
          </Card.Body>   
        </Card>
      )})}
      </div>  
      <button className='check-btn'>Check Out</button>
    </>
  )
}
let mapStateToProps=(state)=>{
  return{
    cartList: state.cartList,
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    decrease: ()=> dispatch({type:"DECREASE-CART"}),
    itemToCart: ()=>dispatch({type:"CART-LIST",payload: cartItems})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyCart)