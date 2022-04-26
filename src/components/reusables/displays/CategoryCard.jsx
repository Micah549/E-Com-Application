import { prodErrorMap } from '@firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router';
import { RoutesObject } from '../../../routes/AllRoutes';
import "../../../themes/MainCategory.css"

export default function CategoryCard({catString,pathVar,price,description,stockLevel,imageUpload}) {
    const navigate = useNavigate();
    
        //remove placeholder
    
        // let path = RoutesObject.MainCategoryDisplay.path; //"/cat/:type"
        // let pathCleaned = path.replace(":type", catString); //hardcord val
        // let newUrl = "";
    
        // console.log("paths:", catString, path, pathCleaned);
         return (
            <div className="card-cat">
            <button className="btn-style" onClick={() => navigate(`${pathVar}`)}>
                <img style={{width:"100%",height:"45%"}} src={imageUpload} alt="Image Category"/>
                <h1 className="h1-heading">{catString}</h1>
               {price &&<h2 className="h2-title">Price: R {price}</h2>}
               {stockLevel && <h2 className="h2-title">Stock-on-hand: {stockLevel}</h2>}
               {description && <h2 className="h2-title">{description}</h2>}
            </button>
            </div>
        );
}


//     return (
//         <div>
//              {/* <div className="bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
//           <h2 className="text-2xl font-extrabold text-gray-900">Products</h2>

//           <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
//             {products.map((products) => (
//               <div key={products.name} className="group relative">
//                 <button onClick={()=>{navigate(`${RoutesObject.Products.path}`)}} className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
//                   <img
//                     src={products.imageSrc}
//                     alt={products.imageAlt}
//                     className="w-full h-full object-center object-cover"
//                   />
//                 </button>
//                 <h3 className="mt-6 text-sm text-gray-500">
//                   <a href={products.href}>
//                     <span className="absolute inset-0" />
//                     {products.name}
//                   </a>
//                 </h3>
//                 <p className="text-base font-semibold text-gray-900">{products.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       </div> */}

//   );

