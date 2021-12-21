import React from "react";
import Logo from "../assest/logo.png"
function Slide(){
    return(<div className="slidmenu">
         <div className="top-section">
             <div className="logo">
                <img src={Logo} alt="logo"/>
             </div>

             <div className="toggle">
             <i class="bi bi-arrow-left-square-fill"></i>
             </div>
            
         </div>

    </div>
    );


}


export default Slide;