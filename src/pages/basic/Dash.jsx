import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Footer from '../../components/reusables/displays/Footer';
import { useAuth } from '../../firebase/FirebaseAuthHook'
import { useData } from '../../firebase/FireBaseDataHook';
import { RoutesObject } from '../../routes/AllRoutes';
import Navbar from '../../routes/Navbar';
import "../../themes/CartStyle.css";
import MainCategoryDisplay from '../Products/MainCategoryDisplay';

export default function Dash() {
const {RemoveProductFromCart,CurrentUser} =useAuth();
const{Products} =useData();

const [CART,setCART]=useState([]);

useEffect(() => {
    console.log("curr:",CurrentUser)
    if(CurrentUser!== null && CurrentUser.Cart!== undefined && CurrentUser.cart!== null && CurrentUser.cart.length>0){
        setCART(CurrentUser.cart);
    }
    if(CurrentUser!== null && CurrentUser.Cart!== undefined && CurrentUser.cart!== null && CurrentUser.cart.length!== CART.length){
        console.log("Something has changed")
    }
}, [CurrentUser])

useEffect(() => {
   console.log("prods:",Products);
   let arr=[];
   if(CurrentUser!== null && (CurrentUser.Cart!== undefined || CurrentUser.cart!== null)){

    if(Products!==null){
        CurrentUser.cart.map((entry,index) =>{
//id: ,mdkldjkjskldjdsd main: female quantity: 1 sub:" shirts"
            if(Products[entry.main]){
                if(Products[entry.main][entry.sub])
                {
                    if(Products[entry.main][entry.sub].products){
                        // if using index 
                        // let prods = object.values(Products[entry.main][entry.sub].products)prods[index])
                        if(Products[entry.main][entry.sub].products[entry.id]){
                            console.log("???",Products[entry.main][entry.sub].products[entry.id])
                            arr.push({
                                prod:Products[entry.main][entry.sub].products[entry.id]
                                ,cart:entry,
                                 index
                            })
                        }
                    }
                }
            }
        });
        setCART(arr);
       }
    }
 
}, [Products]);


function RunRemove(entry){
    console.log("RUN REMOVE",entry)
    RemoveProductFromCart(CurrentUser.uid,entry.prod.id)

}

function DisplayCart(){
    if (CurrentUser && Products && CART && CART.length > 0) {
        return (
            <div className="center-table">
          <table>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
            {CART.map((entry, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img style={{ width: "100px", height: "100px" }} src={entry?.prod?.ImageUpload ? entry.prod.ImageUpload : ""} alt='broken' />
                  </td>
                  <td>{entry?.prod?.ProductName}</td>
                  <td>{entry?.prod?.ProductDescription}</td>
                  <td>R {entry?.prod?.ProductPrice}</td>
                  <td>{entry?.cart?.quantity}</td>
                  <td>
                    <button
                      onClick={() => {
                        RunRemove(entry);
                      }}>
                      Remove item
                    </button>
                  </td>
                </tr>
              );
            })}
        
          </table>
          </div>
        );
        
      } 
      else {
        return <p style={{backgroundColor:"red" ,color:"white", padding:"20px", margin:"10px", fontSize:"large"}}>You do not have any products to display in your Cart</p>;
      }
    }
  


  return (
    <div>
           <Navbar/>
       <h1 style={{textAlign:"center"}}>Personal User Dashboard</h1>
        {DisplayCart()}
        <button
                      onClick={() => {
                        ;
                      }}>Proceed to Payment       
            </button>
            
                       <a href={RoutesObject.visual.home.path}>Back to {RoutesObject.visual.home.name}</a>
        <Footer/>
        </div>
  )
}
