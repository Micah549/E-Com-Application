import { setPriority } from "@firebase/database";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CategoryCard from "../../components/reusables/displays/CategoryCard";
import { useData } from "../../firebase/FireBaseDataHook";
import { RoutesObject } from "../../routes/AllRoutes";
import Navbar from "../../routes/Navbar";
import MainCategoryDisplay from "../Products/MainCategoryDisplay";
import "../../themes/MainCategory.css"
import Footer from "../../components/reusables/displays/Footer";
import Slideshow from "../../components/Slideshow";

// MAIN CATAGORY DSIPLAY PAGE AND CONSUMING OF DATA

	export default function Home() {
      
    
        return (
            <>
 
                <Navbar />
               <> <h1 className='h1-title'>Welcome to, <b className='bold'>Alpha-Gen</b> Your favourite online store!</h1></>
               <Slideshow/>
                <div className="">
                    <MainCategoryDisplay/>
                    {/* {allInventory &&
                        allInventory.map((cat, index) => {
                            let path = RoutesObject.SubcategoryView.path;
                            let pathCleaned = path.replace(":type", cat);
                            console.log("PATHS ", cat, path, pathCleaned);
                            
                            return  <CategoryCard key={index} catString={cat} ></CategoryCard>
                           
                        })} */}
                </div>
                <Footer/>
            </>
        );
}