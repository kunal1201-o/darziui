import React from 'react'

import {FcShop} from 'react-icons/fc'
import {BsArrowRight} from 'react-icons/bs'
import {RiEBikeLine, RiFileList2Line, RiStore2Line} from 'react-icons/ri'
const Banner = () => {
    return (
        <>
          <div className="boxs">

              <h4>Can't Find what you are looking for?</h4>
              <p>Make a list and we will make it done.</p>
              <div className="boxinner">
              <div className="left">
                <div className="column">
                    <div className="it">
                        <RiFileList2Line/> 
                        <p>Make a list</p> 
                       
                    </div>
                    <div className="it">
                 <BsArrowRight/>
                       
                    </div>
                    <div className="it">
                        <RiStore2Line/>
                      <p>Make a store</p>  
                    </div>
                    <div className="it">
                 <BsArrowRight/>
                       
                    </div>
                    <div className="it">
                        <RiEBikeLine/>
                       <p>Get it done</p> 
                    </div>
                </div>
                     <button>Make a list now</button>
              </div>
              <div className="right">
                 <FcShop/> 
              </div>
              </div>
              </div>  
        </>
    )
}

export default Banner
