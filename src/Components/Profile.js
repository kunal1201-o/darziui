import React from 'react'
import { FaEdit, FaUserCircle } from 'react-icons/fa'
import { useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';

import Footer from './Footer';
const Profile = () => {
    let history= useHistory();
    return (
        <> 
             <div className="navbars">
               <div className="upper">
        <div className="left">

        
               
             <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}} />
          
               Profile
           
            </div> 
            </div>   
             
       </div>
        <div className="pro">
            <div className="kl">
            <FaUserCircle/>
            </div>
           <div className="profile-info">
           <p>Jackson</p>
            <p>7824561871</p>
           </div>
           <div className="profil-edit" onClick={()=>{history.push('/ProfileEdit')}}>
           <FaEdit/>
           </div>
       
     
        </div>
        <div className="v">
           <div className="profile-items">
               <p>My Orders</p>
               <hr />
              <span onClick={()=>{history.push('/YourOrder')}}>VIEW YOUR ORDERS</span>
           </div>
           <div className="profile-items">
               <p>My Wishlist</p>
               <hr />
              <span onClick={()=>{history.push('/MenproductList')}}>VIEW YOUR WISHLISTS</span>
           </div>
           <div className="profile-items">
               <p>My Wallets & Cards</p>
               <hr />
              <span>VIEW DETAILS</span>
           </div>
           <div className="profile-items">
               <p>My Orders</p>
               <hr />
              <span>VIEW YOUR ORDERS</span>
           </div>
      
        </div>
        <div className="footer">
        <Footer/>
        </div>
       
        </>
    )
}

export default Profile
