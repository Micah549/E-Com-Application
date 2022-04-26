import ForgotPass from "../pages/authentication/ForgotPass"
import Home from "../pages/basic/Home";
import ResetPass from "../pages/authentication/ResetPass";
import SignUp from "../pages/authentication/SignUp";
import SignIn from "../pages/authentication/SignIn";
import ProductUploads from "../pages/admin/ProductUploads";
import SubCategoryView from "../pages/Products/Sub_Categories/SubCategoryView";
import SingleItem from "../pages/Products/Sub_Categories/SingleItem";
import ProductCategory from "../pages/Products/Sub_Categories/ProductCategory";
import FAQ from "../pages/basic/FAQ";
import Dash from "../pages/basic/Dash";
import { BsCart } from "react-icons/bs";
import { CgShoppingCart} from "react-icons/cg";
import { FcCallback, FcFaq,FcHome,FcManager} from "react-icons/fc";
import {MdPassword } from "react-icons/md";
import {GiDoorHandle, GiPencil, GiShoppingCart}from "react-icons/gi"
import Contact from "../pages/basic/Contact";
// import beef from '../pages/Products/items/Beef'
//RoutesObject.home.path// access any of the properties 

export const RoutesObject= {
    //KEY: Valueicon:"",

    visual: {
        home: {name:"Home", path:"/", comp: <Home/>,icon:<FcHome/>, showIcon:true, ex: true},
        sign_in: {name:"Sign In", path:"/signin", comp:<SignIn/>,icon:<GiDoorHandle/>,showIcon:true, ex: true} ,
        sign_up: {name:"Sign up", path:"/signup", comp:<SignUp/>,icon:<GiPencil/>, showIcon:true,ex: true} ,
        Forgot_pass: {name:"Forgot Password", path:"/forgot", comp:<ForgotPass/>,icon:<MdPassword/>,showIcon:false, ex: true} ,
        admin: {name:"Admin", path:"/admin", comp:<ProductUploads/>,icon:<FcManager/>, showIcon: true, ex: true} ,
        Cart: {name:"Cart", path:"/dash", comp:<Dash/>, icon:<GiShoppingCart />, showIcon:true, ex: true} ,
        FAQ: {name:"FAQ", path:"/faq", comp:<FAQ/>,icon:<FcFaq/> ,showIcon:true, ex: true},
        Contact: {name:"Contact us", path:"/contact", comp:<Contact/>,icon:<FcCallback/> ,showIcon:true, ex: true}
    },
    non_visual: {
        SubCategoryLanding:{ name: "SubCategory", path: "/cat/:type", comp: <SubCategoryView />,icon:"",showIcon:false, ex: false },
        ProductLanding:{ name: "ProductCategory", path: "/subcat/:cat/:subcat", comp: <ProductCategory />,icon:"",showIcon:false, ex: false },
        SingleProduct:{ name: "ProductItem", path: "/prod/:cat/:subcat/:index_id", comp: <SingleItem/> ,icon:"",showIcon:false, ex: false },
        reset_pass: {name:"Reset Password", path:"/reset", comp:<ResetPass/>,icon:'', showIcon: false, ex: true} 
    }
       // Beef: {name:"Beef", path:"/beef", comp: <Beef/>, ex: true},


};
//Convert object to an array using built in js function
/* Takes object iterates over it and pushes each value 
into an array and returns the array back to us to use
*/
export const AllRoutes = Object.values(RoutesObject.visual)

//Object.values(RoutesObject) is the same as saying 