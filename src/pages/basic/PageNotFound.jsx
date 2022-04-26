import React from 'react'
import "../../themes/MainCategory.css"
import { BsExclamationDiamond } from 'react-icons/bs'

export default function PageNotFound() {
  return (
    <div className= "error-div">
        <h1 className="h1-title"><b>ERROR!<br/><div className="Error-Logo"><BsExclamationDiamond/></div> </b><br/>Page not Found</h1>
        <p>Don't worry, we've got you! and you can still navigate on your favorite online GROCER </p>

        </div>
  )
}
