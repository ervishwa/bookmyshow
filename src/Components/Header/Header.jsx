import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import "./Header.css"
import { useFirebase } from '../../Firebase'
import MenuIcon from '@mui/icons-material/Menu';
export const Header = () => {

  // const userref = useRef(null);
  const firebase = useFirebase();
   console.log(firebase.currUser);


   const HandelClick = ()=>{
     firebase.signOut(firebase.auth);
     firebase.setIsLogin(false);
   }
  return (
    <div className="header">

    <div className="headerLeft">
       <Link to="/"><img className="header__icon" src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"></img></Link>
       <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
       <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
       <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
    </div>
    <div className='headerright'>
       <div className='input_text'>
         <input className='input_text' type="text" placeholder='Search for Movies'></input>
         <button className='search_button'>Search</button>
       </div>
       <div className='userInfodiv'>
       {(firebase.currUser) ?  <div className='userInfo'><button onClick={HandelClick}>Log out</button>
    <span>{firebase.currUser.email}</span></div>  : <div className='signin'>
     <Link to="/login" style={{textDecoration:"none" , color : "white"}}>Sign in</Link>
    </div> }
    {/* <div>
     <Link to="/login">Sign in</Link>
    </div> */}

       </div>
      

    </div>

     
    {/* <button onClick={()=>{
      userref.current.style.display = "none";
    }}><MenuIcon className='menubar'/></button>  */}
   

</div>
  )
}

// ()=>firebase.signOut(firebase.auth)