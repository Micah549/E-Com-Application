import { getDatabase, onValue, push, ref, set } from '@firebase/database';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { FIREBASE_REALTIME_DB } from './FirebaseConfig';

const PathString = "PRODUCTS/";

const DataContext =createContext({}); //creator 
export const useData=() => useContext(DataContext); //provider


export default function FireBaseDataHookProvider({children,...props}) {
  
    const [Products, setProducts] = useState(null);//null if empty and and array of objects if it not null
    

    useEffect(() => {
        const db = getDatabase();
        const Ref = ref(FIREBASE_REALTIME_DB, PathString);
        //opening up the read stream to firebase db and then get update  every time 
        //there is a change to any of the children listed within it
        onValue(Ref, (snapshot) => {
          const data = snapshot.val();
          console.log("Data",data)
         if(data!=null)
         {
             setProducts(data);
         }
        });
    }, [])
    // creating a product
    // product has name, desc, price, stocklevel, images[]
    /*
    main: {subcategories{....products[]}}

    const mainCat=  ["male','female',"kids"] //select.option
    const subcat=["shoes","shirts", dresses] //select.option
    1x image upload===button,input
        const inventories ={
     main:{
         subcat:{
             products:[] has to be an array
            }
        }
        inventory.main.subcat.products[]
        inventory.dairy.milk.products
    */
    function CreateProduct(newProduct)
    {
    //     let test={name:"Test", desc:"Test", price:0.0, stocklevel:1, images:[""],
    // maincat:"female", Subcat:"dresses"}

    let path = `${PathString}${newProduct.mainCat}/${newProduct.subCat}/products`;
    let REF = ref(FIREBASE_REALTIME_DB, `${path}`);
    // Get a key for a new product.
    const Key = push(REF).key;
    const finalREF = ref(FIREBASE_REALTIME_DB, `${path}/${Key}`);
    newProduct.id=Key;

    return set(finalREF, newProduct);
    }



    function UpdateProduct(ProductID,newProduct,oldProduct){}
    function DeleteProduct(ProductID){}

    
    const value={
        CreateProduct, //CREATE
        Products,   //READ
        UpdateProduct, //UPDATE
        DeleteProduct //DELETE

    };
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
