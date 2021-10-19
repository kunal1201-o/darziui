import React from 'react'
import {Row,Card,Col} from 'react-bootstrap'

import { useHistory } from 'react-router'
const Tranding = () => {
let history= useHistory();
    return ( 
        <>
          <div className="carder">
            <h3>Recents and upcoming launches</h3>  
       <Row xs={2} md={4} className="g-4">
 
    <Col>
    <Card>
      
      <Card.Body className="cardBox j" >
        
        <Card.Title> <img src="Images/pic5.jpg" alt="" /> </Card.Title>
        <Card.Text className="text">
          <h3>Mens Shirts</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="cardBox j" onClick={()=>{history.push('/Readymade')}}>
        
        <Card.Title><img src="Images/pic6.jpg" alt="" /></Card.Title>
        <Card.Text className="text">
          <h3>Shoes</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="cardBox j" onClick={()=>{history.push('/DryClean')}}>
        
        <Card.Title><img src="Images/pic11.jpg" alt="" /></Card.Title>
        <Card.Text className="text">
          <h3  >Bedsheets</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="cardBox j" onClick={()=>{history.push('/Address')}}>
        
        <Card.Title><img src="Images/pic13.jpg" alt="" /></Card.Title>
        <Card.Text className="text">
          <h3>Jeans</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
</Row>
</div>
        </>
    )
}

export default Tranding
