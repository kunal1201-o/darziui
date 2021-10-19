import React from 'react'

import {BiCart, BiHeartCircle} from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'
import { useHistory } from 'react-router'
const Womenproduct = () => {
  let history= useHistory();
    return (
    <>
    <div className="navbars">
               <div className="upper">
        <div className="left">
         <BsArrowLeft onClick={()=> {history.push("/Readymade");}} /> 
             Women Collection
            </div> 
            </div>   
             
       </div>
       <div className="productsview">
    <div className="container">
      <div className="productList">
        <div className="imgpro">
          <img src="Images/pic4.jpg" alt="" />
        </div>
        <div className="despro">
           <h3>Lee</h3>
           <p>Womens Shirt</p>
           <p style={{fontWeight:"bold"}}>$500</p>
           <p>Gubergren amet dolor ea diam takimata consetetur fa</p>

        </div>
        <div className="cardIcon">
        <div className="cario">
            <BiHeartCircle/>
            </div>
            <div className="cario">
            <AiFillEye/>
</div>
<div className="cario">
<BiCart/>
</div>
        </div>
      </div>

      <div className="productList">
        <div className="imgpro">
          <img src="Images/pic4.jpg" alt="" />
        </div>
        <div className="despro">
           <h3>Lee</h3>
           <p>Womens Shirt</p>
           <p style={{fontWeight:"bold"}}>$500</p>
           <p>Gubergren amet dolor ea diam takimata consetetur fa</p>

        </div>
        <div className="cardIcon">
        <div className="cario">
            <BiHeartCircle/>
            </div>
            <div className="cario">
            <AiFillEye/>
</div>
<div className="cario">
<BiCart/>
</div>
        </div>
      </div>
    </div>
    </div>
    </>
                  
                  
                

    )
}

export default Womenproduct
