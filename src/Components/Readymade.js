
import React from 'react'
import { Row ,Col,Carousel,Card} from 'react-bootstrap'

import { useHistory } from 'react-router'
import { BsArrowLeft } from 'react-icons/bs'

import { AiFillEye } from 'react-icons/ai'
import AdsBanner from './AdsBanner'


import Footer from './Footer'
import { BiCart, BiHeartCircle } from 'react-icons/bi'
import OfferSlider from './OfferSlider'

import CollectionCat from './CollectionCat'
import TopBrand from './TopBrand'
import FashionCoupon from './FashionCoupon'
const Readymade = () => {
    let history=useHistory();

    return (
        <div>
               <div className="navbars">
               <div className="upper">
        <div className="left">
         <BsArrowLeft onClick={()=> {history.push("/");}} /> 
               Ready Made
            </div> 
            </div>   
             
       </div>
       <div className="Section">

   
                
          
                <div className="categy" onClick={()=>{history.push('/MenCollection')}} >
                <img src="Images/pic4.jpg" alt="" />
               <p>Mens</p>
                 
                </div>
                <div className="categy " onClick={()=>{history.push('/WomenCollection')}}>
                <img src="Images/pic4.jpg" alt="" />
                <p>Womens</p>
                 
                </div>
                <div className="categy" onClick={()=>{history.push('/BoyCollection')}}>
                <img src="Images/pic4.jpg" alt="" />
                <p>Boys</p>
                </div>
                <div className="categy" onClick={()=>{history.push('/GirlCollection')}}>
                <img src="Images/pic4.jpg" alt="" />       
                <p>Girls</p>
                </div>
               

            
           
                
                <div className="categy" onClick={()=>{history.push('/BabyCollection')}}>
                <img src="Images/pic4.jpg" alt="" />
                <p>Baby</p>
                </div>
      

       
            </div>
            <OfferSlider/>
            <div className="container">

        
           <AdsBanner/>
           <div>
          <div className="sliderbaner">
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Images/pic9.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Images/pic14.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Images/pic15.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
         
          
           </div>
           </div>

           <div className="k">
           <h3>Mens Collection</h3>
           <CollectionCat/>
           </div>
           <div className="k">
           <h3>Womens Collection</h3>
           <CollectionCat/>
           </div>
           <div className="k">
           <h3>Kids Collection</h3>
           <CollectionCat/>
           </div>
           <div className="k">
           <h3>Explore more collection</h3>
           <CollectionCat/>
           </div>
           
         
           <OfferSlider />
           <div className="newProduct">
               <h4>New Product</h4>
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
    <Carousel.Caption>
   
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
          
             <div className="k">

             
             Top Offers on Top Brand
         
          <TopBrand/>
          </div>
          <div className="k">
            <h5>Collect Coupon and get upto 200 back</h5>
            <FashionCoupon/>
          </div>
          <div className="container">
<div className="prod">
        <h3>Products</h3>
       
        <a href="/#" onClick={()=>{history.push('/MenproductList')}}>show more</a>
        </div>
        <div className="productList">
        <div className="imgpro">
          <img src="Images/pic4.jpg" alt="" />
        </div>
        <div className="despro">
           <h3>Lee</h3>
           <p>Womens Shirt</p>
           <p style={{fontWeight:"bold"}}>$500</p>
           <p>Gubergren amet dolor ea diam takimata consetetur fa</p>

        </div>
        <div className="cardIcon">
        <div className="cario">
            <BiHeartCircle/>
            </div>
            <div className="cario">
            <AiFillEye/>
</div>
<div className="cario">
<BiCart/>
</div>
        </div>
      </div>
          
           
      <div className="productList">
        <div className="imgpro">
          <img src="Images/pic4.jpg" alt="" />
        </div>
        <div className="despro">
           <h3>Lee</h3>
           <p>Womens Shirt</p>
           <p style={{fontWeight:"bold"}}>$500</p>
           <p>Gubergren amet dolor ea diam takimata consetetur fa</p>

        </div>
        <div className="cardIcon">
        <div className="cario">
            <BiHeartCircle/>
            </div>
            <div className="cario">
            <AiFillEye/>
</div>
<div className="cario">
<BiCart/>
</div>
        </div>
      </div>
      <div className="productList">
        <div className="imgpro">
          <img src="Images/pic4.jpg" alt="" />
        </div>
        <div className="despro">
           <h3>Lee</h3>
           <p>Womens Shirt</p>
           <p style={{fontWeight:"bold"}}>$500</p>
           <p>Gubergren amet dolor ea diam takimata consetetur fa</p>

        </div>
        <div className="cardIcon">
        <div className="cario">
            <BiHeartCircle/>
            </div>
            <div className="cario">
            <AiFillEye/>
</div>
<div className="cario">
<BiCart/>
</div>
        </div>
      </div>
      <div className="productList">
        <div className="imgpro">
          <img src="Images/pic4.jpg" alt="" />
        </div>
        <div className="despro">
           <h3>Lee</h3>
           <p>Womens Shirt</p>
           <p style={{fontWeight:"bold"}}>$500</p>
           <p>Gubergren amet dolor ea diam takimata consetetur fa</p>

        </div>
        <div className="cardIcon">
        <div className="cario">
            <BiHeartCircle/>
            </div>
            <div className="cario">
            <AiFillEye/>
</div>
<div className="cario">
<BiCart/>
</div>
        </div>
      </div>
      </div>
           <div className="footer">
        <Footer/>
        </div>

        </div>
    )
}

export default Readymade
