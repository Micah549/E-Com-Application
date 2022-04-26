import React, { useEffect, useState } from 'react'
import CategoryCard from '../../../components/reusables/displays/CategoryCard';
import Footer from '../../../components/reusables/displays/Footer';
import { useData } from '../../../firebase/FireBaseDataHook';
import { RoutesObject } from '../../../routes/AllRoutes';
import Navbar from '../../../routes/Navbar';
import "../../../themes/MainCategory.css";
export default function ProductCategory() {

    const { Products } = useData();
    const [ProdsArr, setProdsArr] = useState([]);
    const [main, setmain] = useState("");
    const [sub, setsub] = useState("");

    useEffect(() => {
        let path = window.location.href;
        let pathSplit = path.split("/");
        let cat = pathSplit[pathSplit.length - 2].replace("%20"," "); //last entry in array is our cat
        let sub = pathSplit[pathSplit.length - 1].replace("%20"," "); //last entry in array is our cat
        setmain(cat);
        setsub(sub);
        if (Products !== null) {
            let subCatObj = Products[cat];
      
            if (subCatObj !== null || subCatObj!== undefined) {
              let prods = Products[cat][sub];
      
              if (prods !== null ) {
                let arr = Object.values(prods.products);
                setProdsArr(arr);
                // console.log("URL: ", path, pathSplit, cat, sub, subCatObj, prods, arr);
                let testProd=prods.products
                console.log("URL: ",testProd );
                
              }
            }
          }
        }, []);
  return (
    <div>
        <Navbar/>
        <h1 className="h1-title">Products Category Page</h1>
          {ProdsArr &&
          ProdsArr.map((prod, index) => {
            let path = RoutesObject.non_visual.SingleProduct.path // /prod/:cat/:subcat/:index_id
            let pathCleaned = path.replace(":cat", main).replace(":subcat", sub).replace(":index_id", prod.id); //using hardcoded value
            console.log("PATHS: ", prod, path, pathCleaned);

            return <CategoryCard key={index} catString={prod.ProductName} imageUpload={prod.ImageUpload} price={prod.ProductPrice} description={prod.ProductDescription} stockLevel={prod.Stocklevel} pathVar={pathCleaned} />;
          })}
          		<Footer/>

    </div>
  )
}
