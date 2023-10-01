import React,{ useEffect, useState } from "react";


export   const DropDownUi=({menu})=>{
    const [hoverData, setHoverData] = useState([]);

   console.log(menu)
    return (
          <div className="dropdown-box" >
        {menu.map((el) => (
          <li className="cursor list" onMouseEnter={()=>setHoverData(el.options)}>
           {el}
            </li>
        ))}

      </div>
    
        
      
    );
  }