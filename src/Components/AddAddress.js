import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from 'react-router';
import Footer from './Footer';

const AddAddress = () => {
    let history =useHistory();
    return (
        <div>
             <div className="navbars">
                    <div className="upper">
                        <div className="left">
                            <BsArrowLeft onClick={() => { history.push("/Readymade"); }} />
                          Add Addresss
                        </div>
                    </div>

                </div>
          
           <div className="profile-Detail">
           <h3>Add Address</h3>
            <label htmlFor=""> Full Name</label>
            <input type="text" />
            <label htmlFor=""> Pin Code</label>
            <input type="number" />
            <label htmlFor="">Address Landmark</label>
            <input type="text" />
            <label htmlFor="">State</label>
            <input type="text" />
            <label htmlFor="">City</label>
            <input type="text" />
            <label htmlFor="">mobile</label>
            <input type="number" />
            <label htmlFor="">upload Digital Signature</label>
            <input type="text" />
            <label htmlFor="">Email Address</label>
            <input type="email" />
            <button onClick={()=>{history.push('/TailorHome')}}>Continue</button>
               </div> 
               <div className="footer">
        <Footer/>
        </div>
        </div>
    )
}

export default AddAddress
