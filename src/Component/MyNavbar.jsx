import React from 'react'
import {Navbar,Nav,Container} from "react-bootstrap"
import { Cart } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

function MyNavbar(props) {
  let {cartCount} = props
  return (
    <Navbar  sticky="top" expand="lg" style={{backgroundColor:"white"}}>
    <Container>
      <NavLink className={"nav-header"} to="/home"> E-COMMERCE </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-a" to="/home">Home</NavLink>
          <NavLink className="nav-a" to="/about">About</NavLink>
          <NavLink className="nav-a" to="/products">Products</NavLink>
        </Nav>
      </Navbar.Collapse>
      
      <NavLink to="/mycart" style={{color:"black",textDecoration:"none"}}>
        <Cart></Cart>
        <span className="fa-stack">{cartCount}</span>
      </NavLink>
     
      
    </Container>
  </Navbar>
  )
}
let mapStateToProps = (state)=>{
  return{
    cartCount: state.cartCount.cart
  }
}
export default connect(mapStateToProps)(MyNavbar)