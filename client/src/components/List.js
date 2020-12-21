import React from "react";
import "./List.css";

export default function List(props) {
  return (
    <div className="listGroup">
     
      Address: {props.address} <br />
      Foods: {props.food}
      <br />
      Description: {props.description}
      <br />
      <div>
        {/* <TwitterIcon size={32} round={true} />
        <TwitterShareButton/> */}
        <button type="button" className="btn btn-primary btn-sm">
          Share          
        </button>
        <a
          type="button"
          className="btn btn-success btn-sm"
          target="_blank"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.address)}`}
        >
         Direction
        </a>
        {props.children}
      </div>
      <hr color="red" />
    </div>
  );
}
