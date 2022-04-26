import React, { useEffect, useState } from 'react';
import '../themes/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/images/AlphaGen.png"
import { AllRoutes, RoutesObject } from './AllRoutes';
import { GetAuthState, logout } from '../firebase/FirebaseAuth';
import { useAuth } from '../firebase/FirebaseAuthHook';
import "../themes/SingleItem.css"
export default function Navbar() {
   
  
  const [currUserLocal, setcurrUserLocal] = useState(null);
  
  const {Logout,CurrentUser} =useAuth();

  useEffect(() => {
 if (CurrentUser !== null && CurrentUser !== undefined){
   setcurrUserLocal({displayName:CurrentUser?.displayName, email:CurrentUser?.email, profileUrl:CurrentUser?.profileUrl, uid:CurrentUser?.uid, role: CurrentUser?.role})
 }
 else{
   setcurrUserLocal(null)
 }
}, [CurrentUser])

  //  useEffect(() => {
  //    GetAuthState()
  //    .then((value)=>{
  //   //value is the returnUser we create in our promise, here we read thatvalue if it is "" we know the user not logged in value.uid
  //        if(value && value.uid && value.uid.length >0)
  //        {
  //           console.log("User is signed and valid",value);
  //           setcurrUserLocal(value);
  //         }
  //         else
  //         {
  //           setcurrUserLocal({displayName:"", email:"",email:"",profileUrl:"",uid:"",role:""})
  //         }
  //    }) 
  //     .catch((err)=>{});
  //  }, [GetAuthState()]) //[]===only when firtst mounted[...] checks every time change occurs to this value
  
     function NavOnAuth()
      {

         return AllRoutes.reverse().map((entry,index) => {
      
           if(currUserLocal && currUserLocal.uid && currUserLocal.uid.length > 0)
               {
                  return(
                           <React.Fragment key={index}>
                           {entry.name === RoutesObject.visual.sign_in.name || entry.name === RoutesObject.visual.sign_up.name || entry.name===RoutesObject.visual.Forgot_pass.name || entry.name === RoutesObject.non_visual.reset_pass.name ? 
        (
          <React.Fragment key={index}>
            {/* returning an empty fragment because user is already logged in */}
          </React.Fragment>
        ):(
            <NavLink className="nav-Link" key={index} to={entry.path}>{entry.showIcon ? entry.showIcon: entry.name}{entry.icon}</NavLink>
        
        )}
        </React.Fragment>
        );
      }
       else
       {
         return(<NavLink className="nav-Link" key={index} to={entry.path}>{entry.icon}{entry.name}</NavLink>
         )
       }
      });
    }
   
    return (
    <div>

      {/* AllRoutes.reverse().map(entry,index)=>() */}

              <nav>
                <img className='img-Logo' src={logo} alt="company-logo"></img>
              
              </nav>
              
              <div className='List'>
                
                {NavOnAuth()}
                {currUserLocal?.uid?.length > 0 &&
                (
                <button className='btn' onClick={()=>{Logout();}}>Log out</button>
                )}
                
                </div>
              


    </div>
  );
}
