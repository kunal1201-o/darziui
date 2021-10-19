import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from 'react-router';
import Footer from './Footer';

const SetLocation = () => {
    let history =useHistory();
    return (
        <div>
              <div className="navbars">
               <div className="upper">
        <div className="left">
         <BsArrowLeft onClick={()=> {history.push("/");}} /> 
          <span>Darzi</span>
            </div> 
            </div>   
             
       </div>
       <div className="loc-box">
       <div className="inp-num">
           <FaSearch/> <input type="text" placeholder="Search for drop location" />
       </div>
       <BiCurrentLocation/> use Current Location
        </div>
        <div className="footer">
        <Footer/>
        </div>
       </div>
       
    )
}

export default SetLocation
