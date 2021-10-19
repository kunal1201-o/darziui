import React,{useState} from 'react'
import { SidebarData } from './SidebarData';
import {Link, useHistory} from 'react-router-dom'

import './Style.css'

import{FaBars,FaUser,FaUserCircle ,FaCartArrowDown, FaHome, FaMailBulk, FaPhoneAlt, FaWhatsapp} from 'react-icons/fa'
const Footer = () => {
    let history= useHistory();
    const [sidebar , setSidebar] = useState(false);
    const showSidebar =()=>setSidebar(!sidebar);
    return (
        <>
             <div className="navbarf">
               <div to="#" className="menu-bars-h" >
                  <FaHome onClick={()=>{history.push('/')}}/>
               </div>
               
               <div to="#" className="menu-bars-h">
                <FaUser onClick={()=>{history.push('/Profile')}}/>
               </div>
               <div to="#" className="menu-bars-h">
            <FaCartArrowDown onClick={()=>{history.push('/Cart')}}/>
               </div>
               <div to="#" className="menu-bars-h">
<FaBars onClick={showSidebar}/>
               </div> 
           
           </div>

           <nav className={sidebar ? 'nav-menu active' :'nav-menu'}>
               <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                      
                 <div className="menu">
                 <h3>Darzi</h3>
                 </div>
               
                     
                
                     
                      
                  </li>
                  <div className="profile" onClick={()=>{history.push('/Login')}} >
                     <div className="pic">
                         
                        <FaUserCircle  />
                     </div>
                     <div className="des">
                         <h6>Login and Register</h6>
                         <p>Please Login and create account for free</p>
                     </div>
                 </div>
        
                 {SidebarData.map((item,index)=>{
                     return(
                         <>
                         <li key={index} className={item.cName}>
                             <Link to={item.path}  >
                                <span className="iconic">{item.icon}</span> 
                                 <span>{item.title}</span>
                             </Link>
                         
                         </li>
                         </>
                     );
                 })}
                 <div className="con">

                 <h4 className="text-dark"><FaWhatsapp/><a href="https://wa.me/8220064679 " target='_blank' rel="noreferrer" >8220064679</a></h4>
                 <h4 className="text-dark"><FaPhoneAlt/><a href="tel:+918220064679">8220064679</a></h4>
                 <h4 className="text-dark"><FaMailBulk/><a href="mailto:darzi0133@gmail.com">darzi0133@gmail.com</a></h4>
                 </div>
                 </ul>
                 </nav>
        </>
    )
}

export default Footer

