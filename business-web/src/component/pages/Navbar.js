import { Link } from "react-router-dom";
import {IconContext} from 'react-icons';
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import '../css/NavBar.css';

const Navbar = () => {
    return(
        <div>
            <div className="container">
                <div className="nav-top-info row">
                    <div className="col-sm-3">
                        <a href="#">
                            <IconContext.Provider value={{ color: "rgb(26, 236, 26)", className: "global-class-name"}}>
                                <span><FaEnvelope/></span>
                            </IconContext.Provider>
                            <p>example@gmail.com</p>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="#">
                            <IconContext.Provider value={{ color: "rgb(16, 111, 199)", className: "global-class-name" }}>
                                <span><FaFacebook /></span>
                            </IconContext.Provider>
                            <p>facebook.com/expamle</p>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="#">
                            <IconContext.Provider value={{ color: "rgb(0, 163, 228)", className: "global-class-name" }}>
                                <span><FaTwitter /></span>
                            </IconContext.Provider>
                            <p>twitter.com/expamle</p>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="#">
                            <IconContext.Provider value={{ color: "rgb(209, 6, 175)", className: "global-class-name" }}>
                                <span><FaInstagram /></span>
                            </IconContext.Provider>
                            <p>instagram.com/expamle</p>
                        </a>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-default" data-spy='affix' data-offset-top='197'>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to={"/"}>Business</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li data-toggle="pill" className="active">
                                <Link id="link" to={"/"}>Home</Link>
                            </li>
                            <li data-toggle="pill">
                                <Link id="link" to={"/services"}>Services</Link>
                            </li>
                            <li data-toggle="pill">
                                <Link id="link" to={"/gallery"}>Gallery</Link>
                            </li>
                            <li data-toggle="pill">
                                <Link id="link" to={"/about"}>About</Link>
                            </li>
                            <li data-toggle="pill">
                                <Link id="link" to={"/contactus"}>ContactUs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;