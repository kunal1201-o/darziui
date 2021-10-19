import React from 'react'
import { Carousel } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from 'react-router';
import Footer from './Footer';
const DryCleanHome = () => {
    let history =useHistory();
    return (
        <div>
                     <div className="navbars">
               <div className="upper">
        <div className="left">

        
               
             <BsArrowLeft onClick={()=> {history.push("/");}} />
          
        DryClean
           
            </div> 
            </div>   
             
       </div>
       <div className="Dry-box">

      
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
            
      

          <div className="Services">
 <p>Select Services</p>
 </div>
        <div className="offerSlider">
   
   <div className="silderItem">
     
  
          <img src="Images/gift.png" alt="" />
          <p> Shop Smarter Earn Rewards Daily and gifts cards</p>
      
   </div>
   <div className="silderItem" >
      

           <img src="Images/shopping-bag.png" alt="" />
           <p> Deals on Darzi Brands and more collection of product</p>
   </div>
   <div className="silderItem" >


        <img src="Images/shopping-cart.png" alt="" />
        <p> More items to considered and get more offers</p>
  
   </div>
   <div className="silderItem" >
    

       <img src="Images/shopping-bag.png" alt="" />   
       <p>Pickup the product where left off in cart</p>  
   
   </div>
   <div className="silderItem">


   <img src="Images/shopping-bag.png" alt="" />
   <p>Upcoming lauches from top brands</p>
   </div>
</div>
<div className="dry-button">
<button onClick={()=>{history.push('/DryClean')}}>SCHEDULE A PICKUP</button> <br />

</div>
<button className='btn btn-outline-primary' onClick={()=>{history.push('/PriceListDry')}}>Price List</button>

        </div>
        <div className="footer">
        <Footer/>
        </div>
        </div>
    )
}

export default DryCleanHome
