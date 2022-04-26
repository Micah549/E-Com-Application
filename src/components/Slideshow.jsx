import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Slideshow() {
  return (
    <Carousel fade style={{height:"50%",width:"100%"}}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="First slide"
      />
      <Carousel.Caption style={{fontSize:"30px",color:"white",backgroundColor:"black"}}>
        <h3>Wide Variety of Food</h3>
        <p style={{color:"white", fontWeight:"900", backgroundColor:"black"}}>You'll never want to look anywhere else</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1596776572010-93e181f9fc07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Second slide"
      />
  
      <Carousel.Caption style={{fontSize:"30px",color:"white",backgroundColor:"black"}}>
        <h3>Fresh and Earthly greens</h3>
        <p>From our farmers, we only receive the best because we want the best because you are the best.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Third slide"
      />
  
      <Carousel.Caption style={{fontSize:"30px",color:"white",backgroundColor:"black"}}>
        <h3>Regular sales</h3>
        <p>Find offers and promotional combos regularly</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
