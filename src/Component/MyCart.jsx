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
  
  useEffect(()=>{
    setProducts(cartList)
   
  },[props,cartList,cartItems])

  let removefromCart = (cId)=>{
    decrease()
    // get the clicked item
    let Clickeditem = product.filter((item)=>{
      return item.id == cId
    })
    //check the quantity of item
    if(Clickeditem[0].quantity == 1){
      let cart = product.filter((item)=>{
        return item.id != cId
      })
      cartItems = cart
    }
    else{
      cartItems = product.map(item=> item.id == cId ? {...item, quantity: item.quantity -1}: item)
    }
    itemToCart()
    
  }
  return (
    <>
      <h3 style={{margin:"5%",textAlign:"left"}}>YOUR BAG</h3>
      <div className='my-container cart-div' >
      {product.map((item)=>{
      return (
        <Card className='main-cart' key={item.id} style={{ margin:"2%",color:"black"}}>
          <div className='my-container cart-div' style={{flexDirection:"row"}}>
            <NavLink className='product-a' to={`/products/${item.id}`}>
              <Card.Img variant="top" src={`${item.img}`} />
            </NavLink>
            <Card.Body className='cart-body'>
              <Card.Text>{item.desc}</Card.Text>
              <Card.Text>{item.price}</Card.Text>
              <Card.Text>{item.quantity}</Card.Text>
              <CartX className='cart-x' onClick={()=>{removefromCart(item.id)}}></CartX>
            </Card.Body>  
          </div> 
        </Card>
      )})}
      </div>  
      <NavLink className="nav-a" to="/checkout">
        <button className='check-btn'>Check Out</button>
      </NavLink>
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