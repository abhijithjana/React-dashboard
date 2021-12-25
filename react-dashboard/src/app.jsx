import React, { useState } from "react";
import Slide from "./components/slide";
import Test1 from "./components/test1";
import Test2 from "./components/test2";
import Design from "./components/Design";
import { NavLink } from "react-router-dom";

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


<BrowserRouter>








<div className={`test ${state?'inactive':''}`}>

<Routes>

<Route  path="/"  />
<Route  path="test1" element={<Test1 />} />
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
export default APP;