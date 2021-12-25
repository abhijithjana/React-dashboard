import React, { useState } from "react";
import { NavLink } from "react-router-dom";



function Mainmenu(props){
    const [expand,setexpand]=useState(false)
    const submenu=props.Submenu;
   const link=props.to;
   console.log(Location);
    return(<div>
 
        <li onClick={
           props.onClick}>
            <a to={props.to} className="main-menu-item">
            <div className="mainmenu-icon">
            <i class={props.Icon}></i>
            </div>
            <span onClick={()=>{setexpand(!expand)}} >
        <NavLink to={props.To} >{props.Name}</NavLink>  </span></a>
            { expand  && submenu.length > 0 ?
              
            <ul className={`submenu ${expand? "active" :''}`}>
               {submenu.map((item,index)=>( <li>
                    <a >
                        {item.name}
                    </a>
                </li>))}
               
               
            </ul>:""}
           </li>

           
    </div>);
}
export default Mainmenu;