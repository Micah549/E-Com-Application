import React, { useEffect, useState } from "react";
import CategoryCard from "../../../components/reusables/displays/CategoryCard";
import Footer from "../../../components/reusables/displays/Footer";
import { useData } from "../../../firebase/FireBaseDataHook";
import { RoutesObject } from "../../../routes/AllRoutes";
import Navbar from "../../../routes/Navbar";
import "../../../themes/MainCategory.css";
export default function SubCategoryView() {
	const { Products } = useData();
	const [SubCatArr, setSubCatArr] = useState([]);
	const [main, setMain] = useState("");

	useEffect(() => {
        let path = window.location.href;
        let pathSplit = path.split("/");
        let cat = pathSplit[pathSplit.length - 1].replace("%20"," "); //last entry in array is our cat
        setMain(cat);
        console.log("???", path, cat)

		if (Products !== null) {
        console.log("P", Products)
			// if ( Products[cat]) {
			// 	let subCatStrings = Object.keys(Products[cat]);
			// 	setSubCatArr(subCatStrings);
			// }
            
            let subCatObj = Products[cat];
            console.log("My prods",Products[cat])

            if (subCatObj !== null || subCatObj!==undefined) {
              let subCatStrings = Object.keys(subCatObj);
              setSubCatArr(subCatStrings);
            }
      

			console.log("URL: ", path, pathSplit, cat); // , subCatStrings
		}
	}, []);

	return (
        <>
			<Navbar />
            
			<h1 className="h1-title">Sub Category</h1>
			{SubCatArr && SubCatArr.map((sub, index) => {
					let path = RoutesObject.non_visual.ProductLanding.path; // subcat/:cat/:subcat
					let pathCleaned = path.replace(":cat", main).replace(":subcat", sub); //using hardcoded value
					console.log("PATHS: ", sub, path, pathCleaned);

					return <CategoryCard key={index} catString={sub} imageUpload={sub.imageUpload} pathVar={pathCleaned} />;
					
				})}
		<Footer/>
        </>
	);
}
