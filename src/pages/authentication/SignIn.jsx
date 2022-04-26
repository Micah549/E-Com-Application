import React, { useState } from 'react'
import Navbar from '../../routes/Navbar'
import "../../themes/SignIn.css"
import { LockClosedIcon } from '@heroicons/react/solid'
import logo from '../../assets/images/AlphaGen.png'
import { NavLink } from 'react-router-dom'
import { RoutesObject } from '../../routes/AllRoutes'
// import { CreateNewUser, RegisterEmailPass, SignInAnon,LoginEmailPass ,SignInWithGoogle } from '../../firebase/FirebaseAuth'
 import AuthForm from '../../components/reusables/AuthForm'             
import { onAuthStateChanged } from '@firebase/auth'
import { useNavigate } from 'react-router';
import { useAuth } from '../../firebase/FirebaseAuthHook'
import { FcGoogle} from "react-icons/fc";
import{FaUser, FaUserTie} from "react-icons/fa"

//Google
//Anonymous
//Email and pass input 

export default function SignIn() {
	// Sign up with email and password
	
  const {RegisterEmailPass,CreateNewUser,LoginEmailPass,SignInWithGoogle,SignInAnon}=useAuth();
  let navigation= useNavigate();

  function submitSignIn(email, passw) {
    console.log("email and pass: ", email, passw);
    // do firebase auth call here for signup with email and pass
    LoginEmailPass(email, passw)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Signed in sucsessfully ", user);
        CreateNewUser(user.uid,user).then(()=>{
         navigation(RoutesObject.visual.home.path, {replace:true})
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR occured: ", errorCode, errorMessage);
      });
  }

	function googleBTN() {
		SignInWithGoogle()
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const user = result.user;
				console.log("Signed into google successfully", user);
				//check if user is saved if
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

	function anonBTN() {
		SignInAnon()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const user = result.user;
      console.log("Signed into successfully", user);
      //check if user is saved if
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
		
    
			<br />
      
			<AuthForm type='Sign In' title="Sign in" onFinalize={(email, pass) => submitSignIn(email, pass)} />
			 {/* google */}
       <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-red bg-red-400 hover:bg-red-300 focus:outline-none focus:ring-3 focus:ring-offset-2 focus:ring-white-400"
              onClick={() => googleBTN()}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FcGoogle style={{color:"white"}} />
              </span>
              Sign in with google
            </button>
      <br />


       

			<br />


        {/* Sign-In Anon */}
         <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-red bg-red-400 hover:bg-red-300 focus:outline-none focus:ring-3 focus:ring-offset-2 focus:ring-white-400"
          
              onClick={() => anonBTN()}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FaUserTie className="h-5 w-5 text-black-500 group-hover:text-red-400" aria-hidden="true" />
              </span>
              Sign in Anonymously
            </button>
			<br />
			<br />

			
		</>
	)}