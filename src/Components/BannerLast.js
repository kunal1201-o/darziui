import React from 'react'
import {FcBearish, FcDepartment, FcShipped, FcSportsMode} from 'react-icons/fc'
import './Style.css'
const BannerLast = () => {
    return (
        <div>
            <div className="box">
                <div className="lefty">
                    <ul>
                    <div className="list"> <FcShipped  className="ico"/>  <li> Things delivered to your doorstep instantly</li></div>
                    
                    <div className="list">  <FcDepartment className="ico"/>     <li>  Delivered from anywhere in the city </li></div>
                    <div className="list"><FcBearish className="ico"/>    <li>No minimjm order value on your purchase</li></div>
                    </ul>
                </div>
                <div className="righty">
<FcSportsMode/>
                </div>
            </div>
        </div>
    )
}

export default BannerLast
