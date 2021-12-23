import React, { useState } from "react";
import Logo from "../assest/logo.png"
import User from '../assest/user.png'
import Mainmenu from "./Mainmanu";
function Slide(){
    const [togstate,setstate]=useState(false);
  function ToggleChk(){
    if(!togstate){
        document.querySelectorAll('.submenu').forEach(element => {
         element.classList.remove('active');   
        });
    }
  }
        
  
 
    const main=[{name:"Dashboard",
    to:'/',
    icon:"bi bi-speedometer"},
    {
        name:"Content",
    to:'/content',
    icon:"bi bi-body-text" ,
    submenu:[{name:"projects"},{name:"Achivement"},{name:"About"}]

    },{name:"Design",
    to:'/Design',
    icon:"bi bi-vector-pen"}];
    

    return(<div className={`slidmenu  ${togstate?'inactive':''}`}>
         <div className="top-section">
             <div className="logo">
                <img src={Logo} alt="logo"/>
             </div>

             <div className="toggle" onClick={()=>{
                 ToggleChk();
                setstate(!togstate);
                
                console.log(togstate)
             }}>
             <i class="bi bi-arrow-left-square-fill"></i>
             </div>
{togstate}
            
            
         </div>


        <div className="search">
           
               
            
            <div className="searchBtn">
            <i class="bi bi-search"></i>
            </div>
            <input type="text" placeholder="search"/>
        </div>

        <div className="divider"></div>

        <div className="main-menu">
        <ul>
     {main.map((item,index)=>(
       
     
     <Mainmenu Name={item.name}
         Icon={item.icon}
         Submenu={item.submenu || []}
         state={togstate}
         onClick={()=>{
if(togstate){
    setstate(false);
}
         }}
     />
     ))}
    
        </ul>
     </div>

        <div className="sidemenu-footer">
            <div className="user-image">
                <img src={User} alt="img"/>
            </div>
            <div className="userinfo">
            <h5>Abhijith Jana</h5>
            <p>abhijith.kme19cs002@gmail.com</p>
            </div>
            
        </div>

    </div>
    );


}


export default Slide;