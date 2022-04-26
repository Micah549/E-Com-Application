import Navbar from '../../routes/Navbar'
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CategoryCard from "../../components/reusables/displays/CategoryCard";
import { useData } from "../../firebase/FireBaseDataHook";
import { RoutesObject } from "../../routes/AllRoutes";
import "../../themes/MainCategory.css"
// const products = [
//     {
//       name: 'Dairy Products',
//       description: 'Milk, eggs, cream ',
//       imageSrc: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFpcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
//       imageAlt: 'Milk, cream,eggs',
//       // href: RoutesObject.home.path,
//     },
//     {
//       name: 'Meat, Poultry and seafood',
//       description: 'Beef, Pork ,Lamb, Fish etc',
//       imageSrc: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
//       imageAlt: 'Meat products page',
//       href: '/meat',
//     },
//     {
//       name: 'Vegetables',
//       description: 'Broccoli, Pumpkin, Cabbage, Tomatoes, etc...',
//       imageSrc: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
//       imageAlt: 'Collection of vegetables.',
//       href:'#',
//     },
//     {
//       name: 'Fruit',
//       description: 'Bananas, apples, grapefruit, etc...',
//       imageSrc: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
//       imageAlt: 'Collection of fruit.',
//       href:'#'
//     }
//   ]
  
  // useEffect(() => {
	// 	console.log("man cat CatString ", CatStrings);
	// }, [CatStrings]);

	// return (
	// 	<div className='MainContainer'>
		
	// 	</div>
	// );

export default function MainCategoryDisplay({  }) {
       const { Products } = useData();
        const [allInventory, setallInventory] = useState([]);
    
        
        
    
        useEffect(() => {
            SetUp();
        }, []);
    
        useEffect(() => {
            SetUp();
        }, [Products]);
    
        function SetUp() {
            if (Products) {
                let main = Object.keys(Products);
                console.log("Test",Object.keys(Products))
                console.log("??", main);
                setallInventory(main);
                
            }
        }

  return (
    
       
        <div className="">
                    {allInventory &&
                        allInventory.map((cat, index) => {
                            let path = RoutesObject.non_visual.SubCategoryLanding.path;
                            let pathCleaned = path.replace(":type", cat);
                            console.log("PATHS ", cat, path, pathCleaned);
                            
                            return  <CategoryCard key={index} catString={cat} imageUpload={cat.ImageUpload} pathVar={pathCleaned}/>
                           
                        })}
                </div>
  );
}
