
import   "./Login.css";
import React, { useState } from 'react'
import SignInScreen from './screens/SignInScreen';
function Login() {
    
    const [signIn,setSignIn]= useState(false)




    return (
        <div className="loginScreen">
           <div className="loginScreen__background">
               <img className="loginScreen__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"/>
               <button
                onClick={ function(){
                   setSignIn(true)
               }} className="login__button">Sign In</button>
               <div className="loginScreen__gradient"/>
           </div>
           <div className="login__screen__body">
            {signIn ?(
                <SignInScreen/>
            ):(
                <>
               <h1>Unlimited files, TV programmes and more.</h1>
               <h2>Watch anywhere . Cancel at any time</h2>
               <h3>Ready to watch? Enter your email to create or restart your membership</h3>
               <div className="login__screen__input">
                   <form>
                       <input type="email" placeholder="Email Address" />
                       <button className="loginScreen_getStarted" 
                       onClick={ function(){
                   setSignIn(true)
               }}>GET STARTED</button>
                   </form>
               </div>
               </>
            )}
           </div>
         
        </div>
    )
}

export default Login
