
import {useSelector} from "react-redux";
import{login, logout, selectUser} from "./features/userSlice"
import React from 'react';
import Nav from './Nav';
import "./ProfileScreen.css";


import {auth} from './firebase';
import PlanScreen from "./PlanScreen";




function ProfileScreen() {


    const user= useSelector(selectUser); 
    

    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                    <div className="profileScreen__details">
               
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <PlanScreen/>
                           <button className="profileScreen__signOut" onClick={function(){
                               auth.signOut()
                           }}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen