import React from 'react'
import {Row,Card,Col} from 'react-bootstrap'

import { useHistory } from 'react-router'
const FashionCoupon = () => {
let history= useHistory();
    return ( 
        <>
          <div className="carder">
          
       <Row xs={2} md={4} className="g-4">
 
    <Col>
    <Card>
      
      <Card.Body className=" fashion-body" >
        
        <Card.Title className="fashion-coupn"> <img src="Images/pic14.jpg" alt="" /> </Card.Title>
        <Card.Text className="text">
          <h4>Footwear & handbags</h4>
          <h3>GET 20% BACK</h3>
          <p>Up to $200</p>
          <p>Valid till 20 sep <span>Details</span></p> 
          <button btn btn-warning>Collect Now</button>
        </Card.Text>
        </Card.Body>
    </Card>
    
    </Col>
    <Col>
    <Card>
      
      <Card.Body className=" fashion-body" onClick={()=>{history.push('/Readymade')}}>
        
        <Card.Title className="fashion-coupn"><img src="Images/pic17.jpg" alt="" /></Card.Title>
        <Card.Text className="text">
        <h4>Footwear & handbags</h4>
          <h3>GET 20% BACK</h3>
          <p>Up to $200</p>
          <p>Valid till 20 sep <span>Details</span></p> 
          <button btn btn-warning>Collect Now</button>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="fashion-body" onClick={()=>{history.push('/Readymade')}}>
        
        <Card.Title className="fashion-coupn"><img src="Images/pic19.jpg" alt="" /></Card.Title>
        <Card.Text className="text">
        <h4>Footwear & handbags</h4>
          <h3>GET 20% BACK</h3>
          <p>Up to $200</p>
          <p>Valid till 20 sep <span>Details</span></p> 
          <button btn btn-warning>Collect Now</button>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="fashion-body" onClick={()=>{history.push('/Readymade')}}>
        
        <Card.Title className="fashion-coupn"><img src="Images/pic5.jpg" alt="" /></Card.Title>
        <Card.Text className="text">
        <h4>Footwear & handbags</h4>
          <h3>GET 20% BACK</h3>
          <p>Up to $200</p>
          <p>Valid till 20 sep <span>Details</span></p> 
          <button btn btn-warning>Collect Now</button>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   
  
</Row>
</div>
        </>
    )
}

export default FashionCoupon
