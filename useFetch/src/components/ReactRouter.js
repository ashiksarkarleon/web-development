import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Bloge from "../components/pages/Bloge";
import About from "../components/pages/About";
import Layout from "../components/pages/Layout";

function ReactRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="bloge" element={<Bloge/>}/>
                    <Route path="about" element={<About/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ReactRouter;