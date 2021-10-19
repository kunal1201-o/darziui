import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { useHistory } from 'react-router'
const CollectionCat = () => {
    let history= useHistory();
    return (
        <div>
             <Row>
                
          
                <Col  className="men-collection" onClick={()=>{history.push('/MenproductList')}} >
               <img src="Images/pic30.png" alt="" />
               <p>Shirts</p>
                 </Col>
             
                <Col className="men-collection" onClick={()=>{history.push('/Boys')}}>
                <img src="Images/pic34.jfif" alt="" />
                <p>up to 50% off</p>
                </Col>
                <Col className="men-collection" onClick={()=>{history.push('/Girls')}}>
                <img src="Images/pic33.png" alt="" />
                <p>up to 40% off</p>
                </Col>
               

            </Row>
            <Row>
           
                <Col  className="men-collection" onClick={()=>{history.push('/HomeDe')}}>
                <img src="Images/pic35.jfif" alt="" />
                <p>up to 20% off</p>
                </Col>
                
                <Col className="men-collection" onClick={()=>{history.push('/Tailor')}}>
                <img src="Images/pic36.png" alt="" />
                <p>up to 70% off</p>
                </Col>
                <Col className="men-collection" onClick={()=>{history.push('/Baby')}}>
                <img src="Images/pic37.jfif" alt="" />
                <p>up to 30% off</p>
                </Col>
            </Row>
        </div>
    )
}

export default CollectionCat
