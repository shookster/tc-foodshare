import React from "react";
import "./List.css";
import {
  TwitterIcon,
  TwitterShareButton,
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";

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
          {/* <EmailShareButton/>
      <FacebookShareButton/>
      <WhatsappShareButton />
      <LinkedinShareButton /> */}
        </button>
        <button type="button" className="btn btn-success btn-sm">
          Direction
        </button>
        {props.children}        
      </div>
      <hr color="red" />
    </div>
  );
}
