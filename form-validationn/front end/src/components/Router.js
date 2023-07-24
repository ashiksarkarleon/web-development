import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import MongoForm from '../components/Mongo-db/Form';
import MySqlForm from '../components/MySql-db/Form';
import Home from "./Home";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="mongo" element={<MongoForm/>}/>
                    <Route path="mysql" element={<MySqlForm/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;