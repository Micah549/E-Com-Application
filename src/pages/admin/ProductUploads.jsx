import React, { Fragment, useState } from "react";
import { useData } from "../../firebase/FireBaseDataHook";
import logo from "../../assets/images/AlphaGen.png";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { RoutesObject } from "../../routes/AllRoutes";
import Navbar from "../../routes/Navbar";

//Choice of how to gather input from user to save to the db

// safety check only allow access to page if role === "admin"

// Use USeData to hook to access all of the crud functionalities
export default function ProductUploads() {
	const { CreateProduct } = useData();

	let catValues = {
		mainCat: "",
		subCat: "",
		// prodCat: "",
		ProductName: "",
		ProductDescription: "",
		ProductPrice: "",
		Stocklevel: "",
		ImageUpload: [""],
	};

	const mainCategory = [
		"--Choose the main category--",
		,
		"Pantry",
		"Beverages-&-Juices",
		"Household",
        "Cleaning",
		"Braai-&-Outdoor",
		"Frozen-Food",
		"Dairy",
		"Meat,Poultry-&-Fish",
		"Fruit,Vegetables-&-Salads",
		"Bread-&-Bakery",
		"Personal-Care",
        "Pet-care"
	]; //select.option

	const subCategory = [
		"--Choose the subcategory --",
		"Butter-&-Margarine",
		"Cheese",
		"Yoghurt",
		"Fresh-Milk",
		"Flavoured-Milk",
		"Fresh-Cream",
		"Maas",
		"Beef",
		"Chicken",
		"Lamb",
		"Mutton",
		"Pork",
		"Sausage",
		"Mince-&-Meatballs",
		"Sosaties-&-Burgers",
        "Cat-food",
        "Fresh-Fruit",
        "Fresh-Vegetables",
        "Salads-&-Herbs", "Sponges", 
        "Cloths-&-Accessories",
        "Chocolates-&-Sweets",
"Polish",
"Multi-Purpose-&-Surface-Cleaners",
"Disinfectant-&-Bleach",
"Bathroom-&-Toilet-Cleaner",
"Laundry-Powder-&-Detergents",
"Dishwashing","Fresh-bread","Fresh-Rolls",
"Sugar-Flour-&-Baking","Coffee-tea-hot-drinks"


	]; //select.option

	const prodCategory = [
		"--Choose the product Category--","Full-Cream-Milk",
		"Yoghurt",
	];

	const [categoryData, setCategoryData] = useState(catValues);

	// let test = {
	// 	name: "Test",
	// 	desc: "Test",
	// 	price: 0.0,
	// 	stockLevel: 1,
	// 	images: [""],
	// 	mainCat: "female",
	// 	SubCat: "dresses",
	// };

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCategoryData({ ...categoryData, [name]: value });
		console.log("???", { ...categoryData, [name]: value });
	};

	const submitChange = (e) => {
		e.preventDefault();
        window.alert("New Product Successfully Added with its details")
		setCategoryData("");
		console.log("values", categoryData);
	};

	return (
		<>
			<div>
                <Navbar/>
				<img className="mx-auto h-14 w-auto" src={logo} alt="AlphaGen" />
				<h2 className="mt-6 text-center text-3xl font-bold text-red-500">
					Product Upload
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600"></p>
			</div>
			<form onSubmit={submitChange}>
				<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
					<div className="max-w-md w-full space-y-8">
						{/* Form Starts */}
						<div className="mt-8 space-y-6">
							<input type="hidden" name="remember" defaultValue="true" />
							<div className="rounded-md shadow-sm -space-y-px">
								<div>
									{/* name */}
									<label htmlFor="name" className="sr-only">
										Product Name
									</label>
									<input
										value={categoryData.ProductName}
										onChange={handleChange}
										name="ProductName"
										type="text"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										placeholder="Product Name"
									/>
								</div>
								<div>
									{/* Description */}
									<label htmlFor="Description" className="sr-only">
										Description
									</label>
									<input
										value={categoryData.ProductDescription}
										onChange={handleChange}
										name="ProductDescription"
										type="text"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
										placeholder="Product Description"
									/>
								</div>
								<div>
									{/* Product Price */}
									<label htmlFor="Product Price" className="sr-only">
										Product Price
									</label>
									<input
										value={categoryData.ProductPrice}
										onChange={handleChange}
										name="ProductPrice"
										type="text"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
										placeholder="Price"
										min="0"
									/>
								</div>
								{/* Stock level */}
								<label htmlFor="Stock level" className="sr-only">
									Stock level
								</label>
								<input
									value={categoryData.Stocklevel}
									onChange={handleChange}
									name="Stocklevel"
									type="number"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
									placeholder="Stock level"
									min="0"
								/>
							</div>

							{/* Image Upload */}
							<label htmlFor="ImageUpload" className="">
								Image Upload
							</label>
							<input
								onChange={handleChange}
								name="ImageUpload"
								type="file"
								accept="image/*"
								required
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-red-300 focus:outline-none focus:ring-3 focus:ring-offset-2 focus:ring-white-400"
								placeholder="Image Upload"
							/>
						</div>
						<div></div>
						{/* Main categoryData */}
						<label htmlFor="Main Category" className="sr-only">
							Main Category
						</label>
						<select
							name="mainCat"
							id=""
							value={categoryData.prod}
							onChange={handleChange}
						>
							{mainCategory.map((prod, index) => {
								return (
									<option key={index} value={prod}>
										{prod}
									</option>
								);
							})}
						</select>

						{/* SubCat */}
						<label htmlFor="SubCat" className="sr-only">
							Sub Category
						</label>

						<select
							name="subCat"
							id=""
							value={categoryData.subProd}
							onChange={handleChange}
						>
							{subCategory.map((subProd, index) => {
								return (
									<option key={index} value={subProd}>
										{subProd}
									</option>
								);
							})}
						</select>

						

						{/* <input
                value={categoryData.subCat}
                name="Stock level"
                type="number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Sub categoryData"
              /> */}

						<button
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-red bg-red-400 hover:bg-red-300 focus:outline-none focus:ring-3 focus:ring-offset-2 focus:ring-white-400"
							onClick={() => {
								CreateProduct(categoryData);
							}}
							type="submit"
						>
							{" "}
							Add Product
						</button>

						{/* <button
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-red bg-red-400 hover:bg-red-300 focus:outline-none focus:ring-3 focus:ring-offset-2 focus:ring-white-400"
						>{RoutesObject.home.path}
						Back to Home
						</button> */}
					</div>
				</div>
			</form>
		</>
	);
}
