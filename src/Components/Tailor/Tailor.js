import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';

import { useHistory } from 'react-router';
import Footer from '../Footer';

const Tailor = () => {
    let history =useHistory();
    return (
        <div>
            <div className="navbars">
                    <div className="upper">
                        <div className="left">
                            <BsArrowLeft onClick={() => { history.push("/TailorHome"); }} />
                        Tailor
                        </div>
                    </div>

                </div> 

                <div className="tailor-info">
                    <div className="tailor-img">
                    <img src="Images/pic17.jpg" alt="" />
                    <div className="TailerImg-butn">
               
                </div>
                    </div>
                   
                    <div className="tailor-info-box">
                        <p>Jack</p>
                        <p>jack@gmail.com</p>
                        <p>7923481193</p>
                       
                    </div>
                </div>
                <hr />
                <div className="container">

            
                <div className="TailorReq">
                    <h4>Febric Details</h4>
                    <p><input type="radio" name="" id="" /> I Have Fabric</p>
                    <p><input type="radio" name="" id="" /> I don't have Fabric</p>
                </div>
                <div className="TailorReq">
                    <h4>Febric Details</h4>
                    <p><input type="radio" name="" id="" />Use my existing fit garment</p>
                     <ul>
                         <li>Our logistics services provider will collect the same</li>
                     </ul>
                    <p><input type="radio" name="" id="" /> Send the technician to my home for taking measurement</p>
                    <ul>
                         <li>Only in Patna</li>
                     </ul>
                </div>   
                
                <div className="tailor-pickup">
                    
                    <input type="text" placeholder='Pickup Date' />
                    <input type="text" placeholder='Pickup Time' />
                    <button>Add Item</button>
                    <button onClick={()=>{history.push('/AddAddress')}}>Add to Cart</button>
                </div>
               
                 </div>
               
                <div className="footer">
        <Footer/>
        </div> 
        </div>
    )
}

export default Tailor
