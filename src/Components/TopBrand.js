import React from 'react'
import {Row,Card,Col} from 'react-bootstrap'

import { useHistory } from 'react-router'
const TopBrand = () => {
let history= useHistory();
    return ( 
        <>
          <div className="carder">
          
       <Row xs={3} md={4} className="g-4">
 
    <Col>
    <Card>
      
      <Card.Body className="brand-box j" >
        
        <Card.Title className="brand-logo"> <img src="Images/Vero-Moda-logo.png" alt="" /> </Card.Title>
        <Card.Text className="text">
          <h3>UP TO 50% OFF</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="brand-box j" onClick={()=>{history.push('/Readymade')}}>
        
        <Card.Title className="brand-logo"><img src="Images/pic42.png" alt="" /></Card.Title>
        <Card.Text className="text">
          <h3>MIN 70% OFF</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="brand-box j" onClick={()=>{history.push('/Readymade')}}>
        
        <Card.Title className="brand-logo"><img src="Images/pic43.png" alt="" /></Card.Title>
        <Card.Text className="text">
          <h3>MIN 80% OFF</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="brand-box j" onClick={()=>{history.push('/Readymade')}}>
        
        <Card.Title className="brand-logo"><img src="Images/pic44.png" alt="" /></Card.Title>
        <Card.Text className="text">
          <h3>MIN 70% OFF</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="brand-box j" onClick={()=>{history.push('/Readymade')}}>
        
        <Card.Title className="brand-logo"><img src="Images/pic45.png" alt="" /></Card.Title>
        <Card.Text className="text">
          <h3>UP TO 70% OFF</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="brand-box j" onClick={()=>{history.push('/Readymade')}}>
        
        <Card.Title className="brand-logo"><img src="Images/pic46.png" alt="" /></Card.Title>
        <Card.Text className="text">
          <h3>MIN 50% OFF</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="brand-box j" onClick={()=>{history.push('/Readymade')}}>
        
        <Card.Title className="brand-logo"><img src="Images/pic47.png" alt="" /></Card.Title>
        <Card.Text className="text">
          <h3>UP TO 70% OFF</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="brand-box j" onClick={()=>{history.push('/DryClean')}}>
        
        <Card.Title  className="brand-logo"><img src="Images/pic43.png" alt="" /></Card.Title>
        <Card.Text className="text">
          <h3  >MIN 80% OFF</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="brand-box j" onClick={()=>{history.push('/Address')}}>
        
        <Card.Title className="brand-logo"><img src="Images/pic41.svg" alt="" /></Card.Title>
        <Card.Text className="text">
          <h3>MIN 70% OFF</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
</Row>
</div>
        </>
    )
}

export default TopBrand
