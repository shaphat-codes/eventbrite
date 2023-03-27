
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'





const LogInPage = () => {
  let {loginUser} = useContext(AuthContext)



    return (
        <div class="row">
        <div class="col">
            <div class="container">

            
        <form onSubmit={loginUser}>
  <div class="form-align">
    <h3 className='login-title'>eventbrite</h3>
    <strong><h1 className='login-header'>Log in</h1></strong>
  </div>

  <div class="container">
    
    <input type="text" placeholder="enter email " name="email" required/>

    
    <input type="password" placeholder="Enter Password" name="password" required/>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
        </div>
        </div>
        <div class="col">
         <img height="600px" width="650px" src="https://st2.depositphotos.com/1594308/8293/i/450/depositphotos_82938782-stock-photo-people-dancing-in-confetti.jpg"/>
        </div>
      </div>
    )
}
export default LogInPage