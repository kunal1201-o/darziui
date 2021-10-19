import React from 'react'
import {Row,Card,Col} from 'react-bootstrap'
import {FcRating, FcReuse, FcRuler, FcShop} from 'react-icons/fc'
import { useHistory } from 'react-router'
const Carder = () => {
let history= useHistory();
    return ( 
        <>
          <div className="carder">
       <Row xs={2} md={4} className="g-4">
 
    <Col>
    <Card>
      
      <Card.Body className="cardBox" onClick={()=>{history.push('/TailorHome')}}>
        
        <Card.Title><FcRuler  className="icon"/></Card.Title>
        <Card.Text className="text">
          <h3>Tailor</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="cardBox" onClick={()=>{history.push('/Readymade')}}>
        
        <Card.Title><FcShop  className="icon"/></Card.Title>
        <Card.Text className="text">
          <h3>Readymade</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      

      <Card.Body className="cardBox" onClick={()=>{history.push('/DryCleanHome')}}>
        
        <Card.Title><FcReuse  className="icon"/></Card.Title>
        <Card.Text className="text">
          <h3  >Dry Clean</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card>
      
      <Card.Body className="cardBox" onClick={()=>{history.push('/Address')}}>
        
        <Card.Title><FcRating className="icon"/></Card.Title>
        <Card.Text className="text">
          <h3>Top Deals</h3>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
</Row>
</div>
        </>
    )
}

export default Carder
