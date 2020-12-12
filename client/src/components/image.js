import React from "react";
import "./image.css";

function Food(props) {
    return (
      <div className="food text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
      </div>
    );
  }
  
  export default Food;