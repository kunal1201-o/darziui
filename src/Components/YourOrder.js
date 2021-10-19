import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { FaAngleRight, FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router';

const YourOrder = () => {
    let history= useHistory();
    return (
        <div>
            <div className="navbars">
                <div className="upper">
                    <div className="left">
                        <BsArrowLeft onClick={() => { history.push("/Readymade"); }} />
                      <span> MY ORDER</span> 
                    </div>
                </div>

            </div>
            <div className="order-box">

            
            <div className="inp-num">
                <FaSearch /> <input type="text" placeholder="Search for drop location" />
            </div>
            <div className="productList k">
                <div className="imgpro">
                    <img src="Images/pic4.jpg" alt="" />
                </div>
                <div className="despro">
                    <h3>Delivery on Aug 22</h3>
                    <p>Men Shirts</p>
                   

                </div>
                <div className="cardIcon">
                    <div className="cario">
                        <FaAngleRight />
                    </div>
                  
                </div>
                
                </div>
                <div className="productList k">
                <div className="imgpro">
                    <img src="Images/pic4.jpg" alt="" />
                </div>
                <div className="despro">
                    <h3>Delivery on Aug 22</h3>
                    <p>Men Shirts</p>
                   

                </div>
                <div className="cardIcon">
                    <div className="cario">
                        <FaAngleRight />
                    </div>
                  
                </div>
                
                </div>
                </div>
            </div>
            )
}

            export default YourOrder
