import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import {BiHelpCircle} from 'react-icons/bi'
import Footer from './Footer'
import { useHistory } from 'react-router'
const Address = () => {
    let history= useHistory();
    return (
        <div>
             <div className="navbars">
              <div className="upper">
              <div className="left">
                 <FaArrowLeft onClick={()=>{history.push('/')}}/> Send Package
              </div>
              <div className="right">
              <BiHelpCircle/>
              </div>
              </div>
              </div>

              <div className="forms">
                  <label htmlFor="">Pickup Address</label>
                  <input type="text" placeholder="Pickup Address"/>
                  <label htmlFor="">Delivery Address</label>
                  <input type="text" placeholder="Delivery Address" />
                  <label htmlFor="">Select Package contents</label>
                  <input type="text" placeholder="Select package contents" />
              </div>
              <div className="footer">
        <Footer/>
        </div>
        </div>

    )
}

export default Address
