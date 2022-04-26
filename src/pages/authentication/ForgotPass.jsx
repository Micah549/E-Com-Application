import React from 'react'
import Navbar from '../../routes/Navbar'
import "../../themes/SignIn.css"
import { LockClosedIcon } from '@heroicons/react/solid'
import logo from '../../assets/images/AlphaGen.png'
import { NavLink } from 'react-router-dom'
import { RoutesObject } from '../../routes/AllRoutes'
import { useState } from 'react'
import Footer from '../../components/reusables/displays/Footer'


//button reset password and input for email
export default function ForgotPass() {
  return (
    <div>
        <Navbar/>
      <h1>Forgot password</h1>
      <br/>
      <h2>FIll in your email below to receive instructions to reset your password</h2>
      <br/>
 <input
 type="text"
 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
 placeholder="Email"
 >
 </input>
                <button
			type="submit" 
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-900"
            onClick={()=>{}}
           >Send email
            
            </button>
                 <Footer/>               
     </div>

  )
}
