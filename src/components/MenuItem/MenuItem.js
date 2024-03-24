import React from "react";

function MenuItem(props){
  //  console.log("Image URL:",props.image);
    return(
        <div className="menuItem">
            
            <div style={{backgroundImage:`url(${props.image})`}}></div>
            <h1>{props.name}</h1>
            <p>₹{props.price}</p>
        </div>
    )
} 

export default MenuItem