import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import {FiLogIn} from 'react-icons/fi'
import { useHistory } from 'react-router'
import './Style.css'
const Otp = () => {
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
            
            <div className="Login-banner">
                <div className="log-left">
                    <FiLogIn/>
                </div>
                <div className="log-right">
          <h3>Sign in or sign up</h3>
          <p>Get started with Darzi</p>
                </div>
            </div>
            <hr />
            <div className="login-num">
                <label htmlFor="">Enter your phone number</label>
                <div className="inp-num">
                 <FaPhoneAlt/>   <input type="text" placeholder="Mobile Number"/>
                </div>
                <label htmlFor="">Enter your phone number</label>
                <div className="otp-box">
                    <div className="ot">

                    </div>
                    <div className="ot">
                        <input type="text" />
                        </div>
                        <div className="ot">
                        <input type="text" />
                        </div>
                        <div className="ot">
                        <input type="text" />
                        </div>
                        <div className="ot">
                        <input type="text" />
                        </div>
                        <div className="ot">
                        <input type="text" />
                        </div>
                </div>
            </div>
            <div className="log-footer">
              
                <button onClick={()=>{history.push('/')}}>Verify and Continue</button>
            </div>
        </div>
    )
}

export default Otp
