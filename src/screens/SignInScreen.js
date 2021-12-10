
import React, { useRef } from 'react'
import "./SignInScreen.css"
import {auth} from "../firebase"


function SignInScreen() {


    const emailRef = useRef(null)
    const passwordRef=useRef(null)
  
   function register(e){
       e.preventDefault();

       auth.createUserWithEmailAndPassword(
           emailRef.current.value,
           passwordRef.current.value
       ).then((authUser)=>{
           console.log(authUser)
       }).catch((error)=>{
           alert(error.message)
       })


   }

  function signIn(e){
      e.preventDefault();
      auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser)=>{
        console.log(authUser)
    }).catch((error)=>{
        alert(error.message)
    })

  }

    return (
        <div className="sign__center">
        
        <div className="signupScreen">
      <form>
          <h1>Sign In</h1>
          <input ref={emailRef} type="email" placeholder="Email Adress"/>
          <input ref={passwordRef} type="password" placeholder="password"/>
          <button  type="submit" onClick={signIn}>Sign In</button>
          <h4> <span className="signup__Screen__gray">New to Netflix?</span> 
          <span className="sign__link" onClick={register }>Sign Up Now</span> </h4>
      </form>
        </div>
        </div>
    )
}

export default SignInScreen
