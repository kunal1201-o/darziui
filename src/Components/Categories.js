import React from 'react'
import { useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';

import Footer from './Footer';
const Categories = () => {
    let history= useHistory();
    return (
        <div>
              <div className="navbars">
               <div className="upper">
        <div className="left">

        
               
             <FaIcons.BsArrowLeft onClick={()=> {history.push("/");}} />
          
            Categories
           
            </div> 
            </div>   
             
       </div>
            
            <div className="bigblock">

          
      <div className="block">
          <div className="box" onClick={()=> {history.push("/Men");}}>MEN </div>
          <div className="box"onClick={()=> {history.push("/Women");}}>WOMEN</div>
      </div>
      <div className="block">
          <div className="box" onClick={()=> {history.push("/Boy");}}>BOY</div>
          <div className="box"onClick={()=> {history.push("/Girl");}}>GIRL</div>
      </div> 
      <div className="block" >
          <div className="box"onClick={()=> {history.push("/Baby");}}>BABY</div>
          <div className="box"onClick={()=> {history.push("/Home");}}>HOME</div>
      </div> 
      </div>
      <Footer/>
        </div>
    )
}

export default Categories
