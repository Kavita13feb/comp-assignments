import React,{ useEffect, useState } from "react";


export   const DropDownUi=({menu})=>{
    const [hoverData, setHoverData] = useState([]);

useEffect(()=>{
  setHoverData(menu[0].options)

},[])    
    return (
        <div className="dropdown-box">
          <ul >
        {menu.map((el) => (
          <li className="cursor list" onMouseEnter={()=>setHoverData(el.options)}>

            {el.title}
            </li>
        ))}

      </ul>
      <ul  >
        {hoverData.map((el) => (
          <li >{el}</li>
        ))}

      </ul>
        </div>
        
      
    );
  }