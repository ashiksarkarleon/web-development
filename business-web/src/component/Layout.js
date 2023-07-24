import {Outlet} from 'react-router-dom'
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';

const Layout = () => {
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}
export default Layout;