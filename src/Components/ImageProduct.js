import React from 'react'
import Header from './Header'
import { Carousel } from 'react-bootstrap'
import Footer from './Footer'
const ImageProduct = () => {
    return (
        <div>
            <Header/>
  <div className="ImagesCOnt">
   
            <Carousel  >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/pic2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/pic2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/pic2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="footer">
        <Footer/>
        </div>
        </div>
    )
}

export default ImageProduct
