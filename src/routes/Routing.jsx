import React from "react";
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import PageNotFound from "../pages/basic/PageNotFound";
import { AllRoutes, RoutesObject } from './AllRoutes'


export default function Routing() {
  return (
    <BrowserRouter>
     <Routes>
            {AllRoutes.map((entry,index)=>{
              // console.log("???", entry)
              return <Route key={index} exact={entry.ex} path={entry.path} element={entry.comp}/>
              })}
              
            {Object.values(RoutesObject.non_visual).map((entry,index) => 
            {return <Route key ={index} exact ={entry.ex} path={entry.path} element={entry.comp}/>;
         })}
            <Route key='404' path='*' element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  );
}
