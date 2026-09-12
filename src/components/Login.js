import React from 'react'

export default function Login({isLoggedin,setIsLoggedin}) {

    function handleSubmit(){
        setIsLoggedin(prev=>!prev);
    }

  return (
    <div>
         {
        isLoggedin ? (<p>You are Looged in! </p>): (<form onSubmit={handleSubmit}>
        <label for="username">Username: </label>
        <input type='text' id='username'/> <br/>

        <label for="password">Password: </label>
        <input type='text' id='password'/> <br/>

        <button type='submit'>Login</button>
    </form>)
    
    }
    </div>
   
  )
}
