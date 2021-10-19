import React from 'react'
import { Carousel,Col,Row,Card } from 'react-bootstrap'
const CardSlider = () => {
    return (
        <div>
            <div className="product">
               <Carousel>
  <Carousel.Item>
  <Row xs={2} md={4} >
      
  
  <Col>
  <Card>
    <Card.Img variant="top" src="Images/pic17.jpg" />
    <Card.Body>
      <Card.Title className="brand"><h4>HIGHLANDER</h4></Card.Title>
      <Card.Text>
      <p>Regular Men Grey Jeans</p>
      <p>$928 <span style={{color:'green'}}>50% off</span></p> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img variant="top" src="Images/pic17.jpg" />
    <Card.Body>
      <Card.Title className="brand"><h4>HIGHLANDER</h4></Card.Title>
      <Card.Text>
      <p>Regular Men Grey Jeans</p>
      <p>$928 <span style={{color:'green'}}>50% off</span></p> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
  
  </Row>
    
  </Carousel.Item>
  <Carousel.Item>
  <Row xs={2} md={4} >
      
  
  <Col>
  <Card>
    <Card.Img variant="top" src="Images/pic17.jpg" />
    <Card.Body>
      <Card.Title className="brand"><h4>HIGHLANDER</h4></Card.Title>
      <Card.Text>
      <p>Regular Men Grey Jeans</p>
      <p>$928 <span style={{color:'green'}}>50% off</span></p> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img variant="top" src="Images/pic17.jpg" />
    <Card.Body>
      <Card.Title className="brand"><h4>HIGHLANDER</h4></Card.Title>
      <Card.Text>
      <p>Regular Men Grey Jeans</p>
      <p>$928 <span style={{color:'green'}}>50% off</span></p> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
  
  </Row>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Row xs={2} md={4} >
      
  
  <Col>
  <Card>
    <Card.Img variant="top" src="Images/pic17.jpg" />
    <Card.Body>
      <Card.Title className="brand"><h4>HIGHLANDER</h4></Card.Title>
      <Card.Text>
      <p>Regular Men Grey Jeans</p>
      <p>$928 <span style={{color:'green'}}>50% off</span></p> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img variant="top" src="Images/pic17.jpg" />
    <Card.Body>
      <Card.Title className="brand"><h4>HIGHLANDER</h4></Card.Title>
      <Card.Text>
      <p>Regular Men Grey Jeans</p>
      <p>$928 <span style={{color:'green'}}>50% off</span></p> 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
  
  </Row>

   
  </Carousel.Item>
</Carousel>
               </div>
        </div>
    )
}

export default CardSlider
