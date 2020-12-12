import React from 'react';
import "./List-container.css"

export default function(props) {

return(
    <div className="listContainer" >
      {
      props.children    
      }  
    </div>    
)

}