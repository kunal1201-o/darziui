import React, { useState } from 'react'
import { Collapse,Row,Col, } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import {  FaAngleUp } from 'react-icons/fa';
import { useHistory } from 'react-router';
import Footer from './Footer';

const PriceListDry = () => {
    let history= useHistory();
    const [open1 ,setOpen1] =useState(false);
    const [open2 ,setOpen2] =useState(false);
    const [open3 ,setOpen3] =useState(false);
    const [open4 ,setOpen4] =useState(false);
    const [open5 ,setOpen5] =useState(false);
    const [open6 ,setOpen6] =useState(false);
    const [open7 ,setOpen7] =useState(false);
  
    return (
<>
        <div className="navbars">
        <div className="upper">
 <div className="left">
  <BsArrowLeft onClick={()=> {history.push("/DryCleanHome");}} /> 
     Price List
     </div> 
     </div>   
      
</div>
        <div className="Dry-price-list">
            <h3 onClick={()=>setOpen1(!open1)}>WASH & FOLD <FaAngleUp/></h3>
            <Collapse in={open1}>
               <div id='example-collapse-text'>
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
               </div>
            </Collapse>
            <h3 onClick={()=>setOpen2(!open2)}>STREAM IRONING <FaAngleUp/></h3>
            <Collapse in={open2}>
               <div id='example-collapse-text'>
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
               </div>
            </Collapse>
            <h3 onClick={()=>setOpen3(!open3)}>MEN DRY CLEANING <FaAngleUp/></h3>
            <Collapse in={open3}>
               <div id='example-collapse-text'>
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
               </div>
            </Collapse>
            <h3 onClick={()=>setOpen4(!open4)}>WOMEN DRY CLEANING<FaAngleUp/></h3>
            <Collapse in={open4}>
               <div id='example-collapse-text'>
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
               </div>
            </Collapse>
            <h3 onClick={()=>setOpen5(!open5)}>CHILDREN DRY CLEAN<FaAngleUp/></h3>
            <Collapse in={open5}>
               <div id='example-collapse-text'>
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
               </div>
            </Collapse>
            <h3 onClick={()=>setOpen6(!open6)}>CARPET CLEANING<FaAngleUp/></h3>
            <Collapse in={open6}>
               <div id='example-collapse-text'>
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
               </div>
            </Collapse>
            <h3 onClick={()=>setOpen7(!open7)}>SOFA CLEANING <FaAngleUp/></h3>
            <Collapse in={open7}>
               <div id='example-collapse-text'>
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
                   <Row>
                       <Col>
                       Suit 3 pcs
                       </Col>
                       <Col>
                       $500.00
                       </Col>
                   </Row>
                   <hr />
               </div>
            </Collapse>
        </div>
        <div className="footer">
        <Footer/>
        </div>
        </>
    )
}

export default PriceListDry
