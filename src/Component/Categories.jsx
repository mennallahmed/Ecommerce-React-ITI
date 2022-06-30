import React from 'react'
import Card from 'react-bootstrap/Card';
import {categories} from "../data"


export default function Categories() {
  return (
    <div className='my-container'>
      {categories.map((item)=>{
       return(
        <Card key={item.id} style={{ width: '30rem' ,margin:"1%", marginTop:"5%"}}>
        <Card.Img variant="top" src={`${item.img}`} />
        <Card.Body>
          <Card.Title >{item.title}</Card.Title>
        </Card.Body>
      </Card>
       )
      })}
    </div>
  )
}

