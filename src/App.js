import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import {auth} from "./firebase";
import SignInScreen from './screens/SignInScreen';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector, useStore } from 'react-redux';
import{login, logout, selectUser} from "./features/userSlice"
import ProfileScreen from './ProfileScreen';

function App() {


  const user= useSelector(selectUser); 
  console.log(user);
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(function(userAuth){
      if(userAuth){
        //login
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }));
      }else{
        //logout
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])



  return (
    <div className="App">
     <Router>
     {!user ? (<Login />):(
      <Switch>
      <Route exact path="/profile">
             <ProfileScreen/>
          </Route>
          <Route exact path="/">
             <HomeScreen />
          </Route>

          <Route  path="/Login">
            <Login/>
          </Route>
        
        
        
        </Switch>


     )}
     

       
      
        
      </Router>
    </div>
  );
}

export default App;
