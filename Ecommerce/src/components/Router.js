import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import View from './pages/View';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/view" element={<View/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
