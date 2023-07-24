import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-default"
      data-spy="affix"
      data-offset-top="197"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-8">
              <div className="navbar-header">
                <button
                  id="btnToggle"
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="col-sm-4">
                  <a className="navbar-brand" href="#">
                    MyCommerce
                  </a>
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <div className="input-group-btn">
                    <button type="submit" className="btn btn-default">
                      <i className="glyphicon glyphicon-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <span className="icon-bar"></span>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">
                      {" "}
                      <span className="glyphicon glyphicon-user"></span> Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span className="glyphicon glyphicon-log-in"></span> Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
