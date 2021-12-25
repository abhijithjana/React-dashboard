import React, { useState } from "react";
import Slide from "./components/slide";


import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom"
  
function APP(){
    const [state,setstate]=useState(false);

const rootElement = document.getElementById("root");
return (
    <div>

 <Slide OnCollaps={(togstate)=>{
       
       setstate(!state);
       console.log("gg"+state);
      }}/>





    </div>
);
}
export default APP;