import {Carousel} from "react-bootstrap"
import React from 'react'
//https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
//https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
//https://cdn.shopify.com/s/files/1/1320/6057/files/xsa_1500x.jpg?v=1648036300


export default function MySlider() {
  return (
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-img"
            src="http://corporate.defacto.com.tr/assets/img/bg.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>READY FOR THE NEW SEASON?</h3>
            <p>SHOP NOW</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    
  )
}
