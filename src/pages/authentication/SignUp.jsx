
import Navbar from '../../routes/Navbar'
import "../../themes/SignIn.css"
import { LockClosedIcon } from '@heroicons/react/solid'
import logo from '../../assets/images/AlphaGen.png'
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
// import { CreateNewUser, RegisterEmailPass } from '../../firebase/FirebaseAuth';
import AuthForm from '../../components/reusables/AuthForm';
import { useNavigate } from 'react-router';
import { RoutesObject } from '../../routes/AllRoutes';
import { useAuth } from '../../firebase/FirebaseAuthHook';
//email password
//bonus ensure password add confirm password field
//stop user from using sign up
//form validation

export default function SignUp() {

    const {RegisterEmailPass,CreateNewUser}=useAuth();
    let navigation= useNavigate();
    
     function submitSignUp(email, password) {
      console.log("email and pass: ", email, password);
      // do firebase auth call here for signup with email and pass
  
      RegisterEmailPass(email, password) //change this to register
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Sign Up successful",user)
        // ...
        CreateNewUser(user.uid,user).then(()=>{
          navigation(RoutesObject.visual.home.path, {replace:true})
        })
      })
    
  
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error logging in, please try again: ", errorCode, errorMessage);
        });
    }
       
  return (

    <>
			<AuthForm type='Sign Up' title="Sign Up" onFinalize={(email, pass) => submitSignUp(email, pass)} />
		</>

  

)
}
