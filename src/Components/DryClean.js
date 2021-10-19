import React from 'react'
import { useHistory} from 'react-router-dom'
import * as FaIcons from 'react-icons/bs';

import { Col,Row,Container } from 'react-bootstrap';

import {  FaAngleRight, FaLocationArrow } from 'react-icons/fa';
import Footer from './Footer';

const DryClean = () => {
    let history = useHistory();
  const date= new Date();
const Day=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const Month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const dy=Day[date.getDay()]
const dat=date.getDate();
const mont=Month[date.getMonth()]
    return (
        <div>
            <div className="navbars">
               <div className="upper">
        <div className="left">

        
               
             <FaIcons.BsArrowLeft onClick={()=> {history.push("/DryCleanHome");}} />
          
               Schedule pickup
           
            </div> 
            </div>   
             
       </div>
       <div className="texty">
           <div className="dat">
           <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
        </div>
        <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
        </div>
        <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
        </div>
        <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
        </div>
        <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
        </div>
        <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
        </div>
        <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>
           <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>
           <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>
           <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>
           <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>
           <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>
           <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>
           <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>
           <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>   <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>
           <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>
           <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>
           <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>   <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>   <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>   <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>   <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>   <div className="dat">
        <p>{dy}</p>
        <p>{dat}</p>
        <p>{mont}</p>
           </div>
    
</div>

<div className="downbox">
<Container>
    <Row >
    <Col  className="tab">9:00AM-10:00AM</Col>
    <Col className="tab">10:00AM-11:00AM</Col>
    <Col className="tab">11:00AM-12:00AM</Col>
    <Col className="tab">01:00AM-02:00AM</Col>
    <Col className="tab">02:00AM-03:00AM</Col>
    <Col className="tab">03:00AM-04:00AM</Col>
    <Col className="tab">05:00AM-06:00AM</Col>
    <Col className="tab">06:00AM-07:00AM</Col>
   
   
  </Row>
</Container>
</div>
 <div className="address">
     <p>PICKUP ADDRESS</p>
     <div className="select" onClick={()=>{history.push('/SelectLocation')}}>
         <FaLocationArrow />
         <h5>SELECT</h5>
         <FaAngleRight/>
     </div>
     <div className="next">
     <button onClick={()=>{history.push('/Coupon')}}>Next<FaAngleRight/></button>
     </div>
 
 </div>
 <div className="footer">
        <Footer/>
        </div>
        </div>
    )
}

export default DryClean
