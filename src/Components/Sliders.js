import React, { useState } from "react";

import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Style.css";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function Sliders() {
  const [items] = useState([
      {id:1,title:'Images/pic9.jpg'}, 
       {id:2,title:'Images/pic13.jpg'}, 
        {id:3,title:'Images/pic7.jpg'},
        {id:4,title:'Images/pic6.jpg'}, 
        {id:5,title:'Images/pic10.jpg'},
         {id:6,title:'Images/pic11.jpg'}, 
         {id:7,title:'Images/pic12.jpg'},
        {id:8,title:'Images/pic14.jpg'}]);



  return (
    <div className="App">
      <div className="controls-wrapper">
       
      </div>
      
      <div className="carousel-wrapper">
          <h3>Top Picks for you</h3>
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item.id}><img src={item.title} alt="" /></Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Sliders