
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";

const App = () => {

  const[isLoggedin,setIsLoggedin]=useState(false);

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>

        
          <Login isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
        
        
    </div>
  )
}

export default App
