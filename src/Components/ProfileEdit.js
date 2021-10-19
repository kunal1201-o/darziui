import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import {  FaUserCircle } from 'react-icons/fa';
import { useHistory } from 'react-router';
import Footer from './Footer';

const ProfileEdit = () => {
    let history =useHistory();
    return (
        <div>
                  <div className="navbars">
               <div className="upper">
        <div className="left">
         <BsArrowLeft onClick={()=> {history.push("/Profile");}} /> 
          <span>Profile Update</span>
            </div> 
            </div>   
             
       </div>
      
            <div className="profile-Detail">
            <div className="profile-img-edit">
         
           <div className="user">

         
           <input type="file" name="image-upload" id="input" />
           <label htmlFor="input"> 
           <FaUserCircle/>
           </label>
           </div>
           <p>John Jackson</p>
           <p>9383278374</p>
         
          
       </div>
                <h4>Profile Detail</h4>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email"/>
                <label htmlFor="">Phone</label>
                <input type="number" placeholder="Moblile" />
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Full Name" />
                <label htmlFor="">Gender</label>
                <input type="text" placeholder="Gender"/>
                <label htmlFor="">PAN</label>
                <input type="text" placeholder="xxxx-xxxx-xxxx"/>
                <label htmlFor="">Aadhar</label>
                <input type="text" placeholder="xxxx-xxxx-xxxx"/>
                <label htmlFor="">State</label>
                <input type="text" placeholder="State" />
                <label htmlFor="">City</label>
                <input type="text" placeholder="City"/>
                <label htmlFor="">Pincode</label>
                <input type="number" placeholder="Pincode" />
                <label htmlFor="">Address</label>
                <input type="address" placeholder="Address" />
             <button onClick={()=>{history.push('/Profile')}}>Update Profile Detail</button>
            </div>
            <div className="footer">
        <Footer/>
        </div>
       
        </div>
    )
}

export default ProfileEdit
