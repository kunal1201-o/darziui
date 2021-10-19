import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import { FaAccusoft, FaBabyCarriage,FaTshirt } from 'react-icons/fa'
import {RiHandbagFill} from 'react-icons/ri'
import {GiFoundryBucket, GiHelmetHeadShot, GiRunningShoe} from 'react-icons/gi'
import {IoWalletSharp} from 'react-icons/io5'
import { useHistory } from 'react-router'
const Box = () => {
    let history =useHistory();
    return (
        <div className="big">
        <h3>Top Categories</h3>
            <Row>
                
          
                <Col onClick={()=>{history.push('/MenproductList')}} >
                <FaTshirt/>
               <p>Mens</p>
                 
                </Col>
                <Col onClick={()=>{history.push('/Womenproduct')}}>
                <RiHandbagFill/>
                <p>Womens</p>
                 
                </Col>
                <Col onClick={()=>{history.push('/Boys')}}>
                <GiRunningShoe/>
                <p>Boys</p>
                </Col>
                <Col onClick={()=>{history.push('/Girls')}}>
                <IoWalletSharp/>
                <p>Girls</p>
                </Col>
               

            </Row>
            <Row>
           
                <Col onClick={()=>{history.push('/HomeDe')}}>
                <FaAccusoft/>
                <p>Home</p>
                </Col>
                <Col onClick={()=>{history.push('/DryClean')}}>
                <GiFoundryBucket/>
                <p>DryClean</p>
                </Col>
                <Col onClick={()=>{history.push('/Tailor')}}>
                <GiHelmetHeadShot/>
                <p>Tailor</p>
                </Col>
                <Col onClick={()=>{history.push('/Baby')}}>
                <FaBabyCarriage/>
                <p>Baby</p>
                </Col>
            </Row>
        </div>
    )
}

export default Box
