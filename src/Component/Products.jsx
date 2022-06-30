import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import productActions from '../Redux/actions/productActions'

let cartItems
function Products(props) {
  let {Sproduct,cartList,getAllProducts,increase, itemToCart} = props
  cartItems =cartList;
  let [product,setProducts] = useState([])
  let [filterData,setData] = useState([])
  let searchVal;
  let selectVal;
  

  let searchProducts=(e)=>{
    searchVal = e.target.value.toLowerCase();
    if(searchVal === ""){
      setProducts(filterData)
    }
    else{
      let filterArr = filterData.filter((item)=>{
        return item.desc.toLowerCase().includes(`${searchVal}`) 
      })
      setProducts(filterArr)
    }
  }

  let selectCategroy=(e)=>{
    selectVal = e.target.value
    if(selectVal === ""){
      setProducts(filterData)
    }
    else{
      let filterArr = filterData.filter((item)=>{
        return item.cat === selectVal
      })
      setProducts(filterArr)
    }

  }
  let addToCart = (cId)=>{
    increase()
    let cart = product.filter((item)=>{
      return item.id == cId
    })
    cartItems.push(cart)
    itemToCart()
    console.log(cartItems)
  }

  useEffect(()=>{
    getAllProducts()
    setProducts(Sproduct)
    setData(Sproduct)
  },[props])

  return (
    <>
    <div className='my-container2'>
      <div className='m-4'>
       <input type={"search"} placeholder={"Find Your Item"} className="form-control" onChange={(e)=>{searchProducts(e)}}/>
      </div>
      <div className='m-4'>
        <label className='mx-3' id="filter">Filter By Category: </label>
        <select id="select-cat" onClick={(e)=>selectCategroy(e)}>
            <option value="">All</option>
            <option value="WATCHES">WATCHES</option>
            <option value="BAG">BAG</option>
            <option value="WALLET">WALLET</option>
            <option value="BACKPACK">BACKPACK</option>
        </select>
      </div>
      </div>

      <div className='my-container'>
      {product.map((item)=>{
      return (
        
        <Card key={item.id} style={{ width: '18rem', margin:"2%",color:"black"}}>
          <NavLink className='product-a' to={`/products/${item.id}`}>
          <Card.Img variant="top" src={`${item.img}`} />
          </NavLink>
          <Card.Body>
          <Card.Text>{item.desc}</Card.Text>
          <Card.Text>{item.price}</Card.Text>
          <button className={"btn btn-dark"} onClick={()=>{addToCart(item.id)}}>Add To Cart</button>
          </Card.Body>
           
        </Card>
        
      )})}
      </div>    
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
export default connect(mapStateToProps,mapDispatchToProps)(Products)
