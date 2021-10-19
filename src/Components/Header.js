import React from 'react'
import {FaMapMarkerAlt, FaSearch} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BiChevronDown} from 'react-icons/bi'
import { Dropdown } from 'react-bootstrap'
import './Style.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useHistory } from 'react-router'
const Header = () => {
    let history= useHistory();
    return (
        <>
          <div className="navbars">
              <div className="upper">
              <div className="left" onClick={()=>{history.push('/SetLocation')}}>
                 <FaMapMarkerAlt/> HOME <BiChevronDown/>
              </div>
              <div className="right">
              <AiOutlineUser/>
            
              
              <Dropdown >
 <Dropdown.Toggle > <BsThreeDotsVertical/></Dropdown.Toggle>
 <Dropdown.Menu>
   <Dropdown.Item onClick={()=>{history.push('/Readymade')}}>Readymade</Dropdown.Item>
   <Dropdown.Item onClick={()=>{history.push('/DryCleanHome')}}>Dry Clean</Dropdown.Item>
   <Dropdown.Item onClick={()=>{history.push('/TailorHome')}}>Tailor</Dropdown.Item>
 </Dropdown.Menu>
</Dropdown>
              
              </div>
              </div>
              
              <div className="Search">

                 <FaSearch/> <input type="text" placeholder="Search for Products" />
              </div>
              </div>  
        </>
    )
}

export default Header
