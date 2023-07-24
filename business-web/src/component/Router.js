import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route path="gallery" element={<Gallery/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contactus" element={<ContactUs/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;