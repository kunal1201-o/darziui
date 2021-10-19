import React from 'react';

import { FaMailBulk, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa';
import { useHistory} from 'react-router-dom'
import './Footer'
import * as FaIcons from 'react-icons/bs';
import Footer from './Footer';


const Contact =()=> {
 let history= useHistory();
  
    return (
    
   
      <>
       
       <div className="navbars">
               <div className="upper">
        <div className="left">

        
               
             <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}} />
          
            Contact Us
           
            </div> 
            </div>   
             
       </div>
 
    <iframe title="goglemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.569312521882!2d85.11765731485441!3d25.61922398370176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM3JzA5LjIiTiA4NcKwMDcnMTEuNSJF!5e0!3m2!1sen!2sin!4v1630411379901!5m2!1sen!2sin" width="100%" height="350"  allowfullscreen="" loading="lazy"></iframe>

      
      <div className="form">
          <div className="v">
        <FaMapMarkedAlt/> Patna Bihar <br />
        <FaMailBulk/> darzi0133@gmail.com <br />
        <FaPhoneAlt/> 9508291198 <br />
        </div>
        <div className="input">

        
        <input type="text" placeholder="Name" /> <br />
        <input type="email" name="" id="" placeholder="Email" /> <br />
        <input type="text" name="" id="" placeholder="Your Message"/> <br />
        </div>
       
            <button className="btno">Send</button>
       
      </div>
      <div className="footer">
        <Footer/>
        </div>
      </>
    );
  }

  export default Contact;