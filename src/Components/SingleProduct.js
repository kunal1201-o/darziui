import React from 'react'
import { Carousel,Card,Col,Row } from 'react-bootstrap'
import { AiFillEye } from 'react-icons/ai'
import { BiCart,BiHeartCircle } from 'react-icons/bi'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FaAngleDown, FaAngleRight, FaLock, FaMapMarkerAlt, FaShareAlt, FaStar } from 'react-icons/fa'
import { GiBoxUnpacking, GiPayMoney, GiReturnArrow } from 'react-icons/gi'
import { MdLocalOffer } from 'react-icons/md'
import { RiCaravanLine } from 'react-icons/ri'
import { useHistory } from 'react-router'
import Footer from './Footer'
import Header from './Header'
const SingleProduct = (props) => {
    let history= useHistory();
    return (
        <div>
           <Header/>
           

           
            <div className="productbox">
                <div className="productimgdespric k">
                <div className="productname">
                    <div className="proleft">
                        <p style={{color:'green',fontWeight:"bold"}}>Brand Amazon Brand-symbol</p>
                   <p>Men slim shirt with best quality cotton.</p> 
                    </div>
                    <div className="proright">
                    <BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/>
                    </div>

                  

                </div>
                <div className="productimg">
                    <div className="discount">
                        <p>66 %</p>
                        <p>off</p>
                    </div>
                    <div className="share">
                        <FaShareAlt/>
                    </div>
                <Carousel>
  <Carousel.Item onClick={()=>{history.push('/ImageProduct')}}>
    <img
      className="d-block w-100"
      src="Images/pic4.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
       </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Images/pic4.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Images/pic4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                </div>
                <div className="colorproduct">
                    <p>Colour:White2</p>
                    <div className="part">

   
                
          
<Row>
  <Col className="tecol" style={{background:'red'}}>
 

  </Col>
  <Col className="tecol"  style={{background:'blue'}}>
 

  </Col>
  <Col className="tecol"  style={{background:'yellow'}}>
 

  </Col>
  <Col className="tecol"  style={{background:'green'}}>

  </Col>
</Row>
</div>
                    <p>Size:39</p>
                    <div className="part">

   
                
          
<Row>
  <Col className="tec">
 <p>34</p> 

  </Col>
  <Col className="tec">
  <p>35</p> 

  </Col>
  <Col className="tec">
  <p>36</p> 

  </Col>
  <Col className="tec">
  <p>37</p> 

  </Col>
</Row>
</div>
                    
                </div>
                <div className="productprice">
                        <h3>$500</h3>
                        <p>Free delivery Saturday, Sep 25 <span>Details</span> </p>
                        <p>Order within 7hrs and 18 mins <span>Details</span></p>

                </div>
                </div>
                <div className="offerproduct k">

             <p style={{padding:"10px"}}><MdLocalOffer/>   Offers</p>  
                <Row xs={2} md={4} >
      
  
      <Col>
      <Card>
      
        <Card.Body>
          <Card.Title>Partner offers</Card.Title>
          <Card.Text>
          Buy 1 Extra 5% off  Buy 1 Extra 5% off  Buy 1 Extra 5% off
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small style={{color:"blue"}}>2 offers <FaAngleRight/></small>
        </Card.Footer>
      </Card>
      </Col>
      <Col>
      <Card>
      
      <Card.Body>
          <Card.Title>Partner offers</Card.Title>
          <Card.Text>
          Buy 1 Extra 5% off  Buy 1 Extra 5% off  Buy 1 Extra 5% off
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small style={{color:"blue"}}>2 offers <FaAngleRight/></small>
        </Card.Footer>
      </Card>
      </Col>
      
      </Row>
                </div>
               
                <div className="productdesbuy k">

                     <p style={{color:"green",fontWeight:'bold'}}>In Stock</p>
                     <p style={{color:'blue'}}>Sold by RKLLP</p>
                     <button>qty:1<FaAngleDown/></button>
                     <div className="buttonbuy">
                         <button>Buy Now</button>
                         <button >Add to Cart</button>
                     </div>
                   <p> <FaLock/> Secure transaction</p> 
                <p>  <FaMapMarkerAlt/> Select delivery location</p>
       
                </div>
              <div className="productService">
                  <div className="p">
                       <GiPayMoney/>
                       <p>Pay on Delivery</p>
                  </div>
                  <div className="p">
                  <GiReturnArrow/>
                       <p>Return</p>
                      </div>
                      <div className="p">
                      <RiCaravanLine/>
                       <p>Delivered</p>
                      </div>
                      <div className="p">
                      <GiBoxUnpacking/>
                       <p>No contact</p>
                      </div>
              </div>
                <div className="detailproduct k">
<h3>ABOUT THIS ITEM</h3>
<ul>
    <li>Care instruction: Machine Wash</li>
    <li>Fit Type: Regular</li>
    <li>53% Polyster 47% Cotton</li>
    <li>Semi cut-away collar</li>
    <li>Regular fit shirt with classic cut away collar and chiselled cuff</li>
 
</ul>
<p style={{color:'blue'}}><FaAngleDown/> See more</p>
                </div>
  <div className="productImg k">
      <h4>FROM THE MANUFACTURER</h4>
      <div className="pict">
        <img src="Images/pic2.jpg" alt="" />
      </div>
      <div className="pict">
      <img src="Images/pic2.jpg" alt="" />
      </div>
      <div className="pict">
      <img src="Images/pic2.jpg" alt="" />
      </div>
      <div className="pict">
      <img src="Images/pic2.jpg" alt="" />
      </div>
      <div className="pict">
      <img src="Images/pic2.jpg" alt="" />
      </div>
  </div>

  
                <div className="yourlike k">
                    You also like
                <Carousel>
  <Carousel.Item>
  <Row xs={2} md={4} >
      
  
  <Col>
  <Card>
    <Card.Img variant="top" src="Images/pic17.jpg" />
    <Card.Body>
     
      <Card.Text>
      <p>Lee Brand shirt</p>
      <p>lee Symbole</p>
      <FaStar/>
      <p>$349.00</p>
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
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      <p>Lee Brand shirt</p>
      <p>lee Symbole</p>
      <FaStar/>
      <p>$349.00</p>
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
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      <p>Lee Brand shirt</p>
      <p>lee Symbole</p>
      <FaStar/>
      <p>$349.00</p>
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
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      <p>Lee Brand shirt</p>
      <p>lee Symbole</p>
      <FaStar/>
      <p>$349.00</p>
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
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      <p>Lee Brand shirt</p>
      <p>lee Symbole</p>
      <FaStar/>
      <p>$349.00</p>
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
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      <p>Lee Brand shirt</p>
      <p>lee Symbole</p>
      <FaStar/>
      <p>$349.00</p>
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
    
        <div className="footer">
        <Footer/>
        </div>
        </div>
    )
}

export default SingleProduct
