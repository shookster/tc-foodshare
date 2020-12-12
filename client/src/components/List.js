import React from "react";
import "./List.css"

export default function List(props) {
  return (
      
    <div className="listGroup"  >
    
      Address: {props.address} <br />
      Foods: {props.food}<br />
      Description: {props.description}<br />
      <div> <button type="button" className="btn btn-primary btn-sm">
        Share
      </button>
      <button type="button" className="btn btn-success btn-sm">
        Direction
      </button></div>
      <hr color="red"/>
      
    </div> 
  );
}
