import React, { useState } from "react";
import Content from "./Content";
import Design from "./Design";
import Logo from "../assest/logo.png"
import User from '../assest/user.png'
import Mainmenu from "./Mainmanu";

import {
    BrowserRouter,
    Routes,
    Route,
    useRoutes,
  } from "react-router-dom"



function Slide(props){
  
    const [togstate,setstate]=useState(false);

    
  const ToggleChk=()=>{
  
    if(!togstate){
        document.querySelectorAll('.submenu').forEach(element => {
         element.classList.remove('active');   
        });
    }
   
    
    
  }

        
  
 
    const main=[{name:"Dashboard",
    To:'/',
    icon:"bi bi-speedometer"},
    {
        name:"Content",
    To:'/content',
    icon:"bi bi-body-text" ,
    submenu:[{name:"projects"},{name:"Achivement"},{name:"About"}]

    },{name:"Design",
    To:'/design',
    icon:"bi bi-vector-pen"}];
    const [state,setState]=useState(false);
    

    return(<div className={`slidmenu  ${togstate?'inactive':''}`}>

         <div className="top-section">
             <div className="logo">
                <img src={Logo} alt="logo"/>
             </div>

             <div className="toggle" onClick={()=>{
                  props.OnCollaps(togstate);
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

     
                  
<BrowserRouter>

<div className="main-menu">
        <ul>
     {main.map((item,index)=>(
       
     
     <Mainmenu Name={item.name}
         Icon={item.icon}
         To={item.To}
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






<div className={`test ${togstate?'inactive':''}`}>

<Routes>

<Route  path="/"  />
<Route  path="content" element={<Content/>} />
<Route path="design" element={<Design />} />


    
    <Route
    path="*"
    element={
      <main style={{ padding: "1rem" ,margin:"0 0 0 300px"}}>
        <p>There's nothing here!</p>
      </main>}
      >
      </Route> 
    
    
      
     
    </Routes>
    </div>

</BrowserRouter>

    </div>
    );


}


export default Slide;
