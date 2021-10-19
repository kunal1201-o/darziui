import React from 'react'
import * as FaIcons from 'react-icons/bs';

import { useHistory } from 'react-router-dom';
import Footer from './Footer';
const Coupon = () => {
    let history=useHistory();
    const logo= ()=>{
        document.querySelector('.bg-model').style.display='flex';
    }
    return (
        <div>
               <div className="navbars">
               <div className="upper">
        <div className="left">

        
               
             <FaIcons.BsArrowLeft onClick={()=> {history.push("/DryClean");}} />
          
            Coupon
           
            </div> 
            </div>   
             
       </div>
       <div className="bg-model">
               <div className="model-content">
                   <div className="conSub">
                   <h4>Confirm Pickup</h4> 
                   <p>Please click Yes to confirm pickup</p>
                   <div className="conbut">
                   <button onClick={()=>{history.push('/DryClean')}}>Cancel</button>
                   <button onClick={()=>{history.push('/')}}>Yes</button>
                   </div>
                   </div>
                  
                   </div>
                   </div>
       <div className="coupon">
           <label htmlFor="">Coupon code</label>
           <input type="text" />
           <button>Apply</button>
           <label htmlFor="">Message</label>
           <input type="text" name="" id="" />
       </div>
       <div className="Couponsubmit">
           <p onClick={logo}>SCHEDULE PICKUP</p>
       </div>
       <div className="footer">
        <Footer/>
        </div>
        </div>
    )
}

export default Coupon
