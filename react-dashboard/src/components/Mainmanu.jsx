import React, { useState } from "react";


function Mainmenu(props){
    const [expand,setexpand]=useState(false)
    const submenu=props.Submenu;
 
   console.log(Location);
    return(<div>
  
        <li onClick={
           props.onClick}>
            <a className="main-menu-item">
            <div className="mainmenu-icon">
            <i class={props.Icon}></i>
            </div>
            <span onClick={()=>{setexpand(!expand)}}>
         {props.Name} </span></a>
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