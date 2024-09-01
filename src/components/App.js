
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const[state,setState]=useState("")
  return (
    <div>
         <label htmlFor="" >Enter your name:</label>
         <input type="text" value={state} onChange={(e)=>{
               setState(e.target.value);
         }} />

         <p>{state}</p>
    </div>
  )
}

export default App

