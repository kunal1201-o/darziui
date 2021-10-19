import React from 'react'
import { FaUser } from 'react-icons/fa'

import { FaArrowLeft } from 'react-icons/fa'
import {BiHelpCircle} from 'react-icons/bi'
import { useHistory} from 'react-router-dom'
import Footer from './Footer'


const About = () => {
    let history= useHistory();
    return (
        <>
          <div className="navbars">
              <div className="upper">
              <div className="left">
                 <FaArrowLeft onClick={()=>{history.push('/')}}/> About
              </div>
              <div className="right">
              <BiHelpCircle/>
              </div>
              </div>
              </div>
        <div className="pro">
            <div className="k">
            <FaUser/>
            </div>
           
            <p>About Derzi</p>
            <p>Derzi is free app to buy sell product to the user at best Price.</p>
        </div>
        <div className="v">
         
            <p>Privacy Polcies</p>
            <p>Refund Polcies</p>
            <p>Term and services</p>
        </div>
        <div className="footer">
        <Footer/>
        </div>
            
        </>
    )
}

export default About
