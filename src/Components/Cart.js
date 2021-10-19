import React from 'react'
import { useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';
import * as FaIcon from  'react-icons/md';
import Footer from './Footer';


const Cart = () => {
    let history= useHistory();
    return (
        <div>
                    <div className="navbars">
               <div className="upper">
        <div className="left">

        
               
             <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}} />
          
        Cart
           
            </div> 
            </div>   
             
       </div>
       <div className="cartL">
           <div className="imgCa">
           <FaIcon.MdShoppingCart/>
           </div>
           
           <h4>Your Cart is empty</h4>
           <button onClick={()=> {history.push("/Readymade");}}>Expore</button>
       </div>
       <div className="footer">
        <Footer/>
        </div>
        </div>
    )
}

export default Cart
