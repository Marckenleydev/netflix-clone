import React ,{useState, useEffect }  from 'react'
import { useHistory } from 'react-router'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false)
    const history = useHistory();
   
    const transitionNavBar= () =>{
      if(window.scrollY > 100){
          handleShow(true);
 
      }else{
          handleShow(false)
      }
    }
 
 
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return()=> window.removeEventListener("scroll", transitionNavBar)
    },[])

    return (
        <div className={`nav ${show && "nav__black" } `}>

          <div className="nav__contents">
             <div className="nav__menu">
            <img onClick={function(){
              history.push("/")
            }} className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
             
               <li>Home</li>
               <li>Tv Shows</li>
               <li>Movie</li>
               <li>News & Popular</li>
               <li>My List</li>



             </div>
            <img onClick={function(){
              history.push("/profile")
            }} className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
         
          </div>

        </div>
    )
}
    
export default Nav
