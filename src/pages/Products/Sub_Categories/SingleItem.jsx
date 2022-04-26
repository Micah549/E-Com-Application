import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../../../components/reusables/displays/Footer";
import { useAuth } from "../../../firebase/FirebaseAuthHook";
import { useData } from "../../../firebase/FireBaseDataHook";
import { RoutesObject } from "../../../routes/AllRoutes";
import Navbar from "../../../routes/Navbar";
import "../../../themes/SingleItem.css";

export default function SingleItem() {
	const nav = useNavigate();
	const {Products} = useData();
	const [finalVal, setFinalVal] = useState(null);
	const { AddProductToCart, CurrentUser } = useAuth();

	useEffect(() => {
		let path = window.location.href;
		let pathSplit = path.split("/");

		let cat = pathSplit[pathSplit.length - 3].replace("%20", " "); //last entry in array is our cat
		let sub = pathSplit[pathSplit.length - 2].replace("%20", " "); //last entry in array is our cat
		let id = pathSplit[pathSplit.length - 1].replace("%20", " "); //last entry in array is our cat

		if (Products !== null && Products !== undefined) {
			let subCatObj = Products[cat];

			if (subCatObj !== null && subCatObj !== undefined) {
				let prods = Products[cat][sub];

				if (Products !== null) {
					let temp = prods.products[id];
					if (temp !== null) {
						setFinalVal(temp);
						console.log(
							"URL: ",
							path,
							pathSplit,
							cat,
							sub,
							subCatObj,
							prods,
							temp
						);
					}
				}
			}
		}
	}, [window.location.pathname,Products]);

    useEffect(() => {}, [CurrentUser]);
    useEffect(() => {}, [finalVal]);

	function AddToCart() {
		//signed in
		if (CurrentUser !== null && CurrentUser !== undefined) {
			console.log("Adding our cart here");
			let old = CurrentUser.cart;
			console.log("Old cart", old);

			let newOrder = {
				main: finalVal.mainCat,
				sub: finalVal.subCat,
				id: finalVal.id,
				quantity: 1, //hard code value or from user input think of counter
			};
			//user has an existing cart and does
			//possibly contain other products
			if (old != null && old !== undefined) {
				old.push(newOrder);
				console.log("old addded", old);

				//firebase function
				AddProductToCart(CurrentUser.uid, old)
                .then((res) => {
					console.log("YAY");
					window.alert("Added to cart");
				})
                .catch((err) => {
                    console.log("Eror,", err);
                  });

			}
             else {
				/* user has an empty cart or cleared out an existing cart
 either way no info is contained in the cart*/
                // no cart yet so create a new cart
				let cart = [];
				cart.push(newOrder);
				console.log("new added", cart);

				//Firebase Update Call
				AddProductToCart(CurrentUser.uid, cart)
					.then((res) => {
						console.log("YAY");
						window.alert("Added to cart");
					})
					.catch((err) => {
						console.log("Error", err);
					});
			}
		}

		//Not signed in
		else {
			//to redirect PRogrammatically
			let con = window.confirm("Please log in");
			if (con) {
				nav(RoutesObject.visual.sign_in.path);
			}
		}
	}

	return (
		<div>
			<Navbar />
			

			{finalVal !==null && (
				<>
					<div className="Image-Container">
						<p>{finalVal.mainCat}/{finalVal.subCat}/{finalVal.ProductName}</p><br/>
                        <br/>
						<img src={finalVal.ImageUpload }></img>
					<hr/>
					</div>

					<br></br>
					<div className="Product-Details-Container" style={{ float: "centre" }}>
						<h4><b>Product Name</b> :<br/> {finalVal.ProductName}</h4><br/>
						<h4><b>Product Description</b>:<br/>{finalVal.ProductDescription}</h4>

					<hr/>
                    <br/>
						<h4><b>Stock Amount</b> : {finalVal.Stocklevel}</h4>
						<h4><b>Price</b>: {finalVal.ProductPrice}</h4>
                        <br/>
					<hr/>

						<h4><b>Product Main Category</b>: {finalVal.mainCat}</h4><br/>
						<h4><b>Product Sub Category</b>: {finalVal.subCat}</h4>

					<hr/>
                            <div className="button container">
						<button
							className="btn"
							onClick={() => {
								AddToCart();
							}}
						>
							Add To Cart
						</button>

						<Link to={RoutesObject.visual.Cart.path}>
							<button className="btn">View Cart</button>
                            
						</Link>
                        </div>
					</div>
                    
					<br></br>
				</>
                
			)}
            		<Footer/>

		</div>
        
	);
    
}
