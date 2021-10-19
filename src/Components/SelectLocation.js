import React from 'react'
import { useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/bs';

const SelectLocation = () => {
    let history= useHistory();
    return (
        <div>
             <div className="navbars">
               <div className="upper">
        <div className="left">

        
               
             <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}} />
          
               Location
           
            </div> 
            </div>   
             
       </div>
            <h4>Capture Location</h4>
         <div className="location">

          
        <label htmlFor="">FLAT NO / LANDMARK</label>
        <input type="text" />
        <label htmlFor="">ADDRESS</label>
        <input type="text" />
        <label htmlFor="">AREA</label>
        <input type="text" />
        <label htmlFor="">CITY</label>
        <input type="text" />
        <label htmlFor="">STATE</label>
        <input type="text" />
        <label htmlFor="">ZIP CODE</label>
        <input type="text" />
        <button onClick={()=>{history.push('/DryClean')}}>ADD</button>
        </div>
        </div>
    )
}

export default SelectLocation
