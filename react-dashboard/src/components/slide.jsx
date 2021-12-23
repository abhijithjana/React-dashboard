import React from "react";
import Logo from "../assest/logo.png"
function Slide(){
    return(<div className="slidmenu inactive">
         <div className="top-section">
             <div className="logo">
                <img src={Logo} alt="logo"/>
             </div>

             <div className="toggle" onClick={()=>{
                 
             }}>
             <i class="bi bi-arrow-left-square-fill"></i>
             </div>
            
         </div>

        <div className="search">
           
               
            
            <div className="searchBtn">
            <i class="bi bi-search"></i>
            </div>
            <input type="text" placeholder="search"/>
        </div>

    </div>
    );


}


export default Slide;