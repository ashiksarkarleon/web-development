import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/styles.css";
 import {Pagination, Navigation} from "swiper";
import { Link } from "react-router-dom";
import '../css/Home.css';

import img1 from "../img/carousel img/109-1097440_latest-mobile-banner-png-transparent.png";
import img2 from "../img/carousel img/cd1c7cbd61e5f596d2d59ae2ea7b3d9c.jpg";
import img3 from "../img/carousel img/f0f5a6cc6bff547d2c7d5cbcb00bea85.png";
import smpic1 from "../img/smartphone/infinix-hot12.jpg";
import smpic2 from "../img/smartphone/apple iphone 12.jpg";
import smpic3 from "../img/smartphone/Realme-7-Mist-White.jpg";
import mapic1 from "../img/mobile accessories/back camera lens.jpg";
import mapic2 from "../img/mobile accessories/infinix note 10 Silicone cover.jpg";
import mapic3 from "../img/mobile accessories/Remax Rpp-96 Power Bank.jpg";
import compic1 from "../img/computer/hp pavilion 15 core i5.jpg";
import compic2 from "../img/computer/Dell Inspiron 15 intel i5.jpg";
import compic3 from "../img/computer/lenovo ideapad 5i core i5.jpg";
import comapic1 from "../img/computer accessories/corsair vengeance lpx rgb pro 16 gb ddr4 3200mhg desktop 9600tk.jpg";
import comapic2 from "../img/computer accessories/fantech strike cpu case.jpg";
import comapic3 from "../img/computer accessories/revenger vp 350 watt power supply.jpg";
import ecompic1 from "../img/electronics accessories/d-link dir-650in n300 300mbps 1500.jpg";
import ecompic2 from "../img/electronics accessories/tenda f3 300mbps 1240.jpg";
import ecompic3 from "../img/electronics accessories/tp-link archer c6 3650.jpg";


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#categoryNavbar"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">
                    Category
                  </a>
                </div>
                <div className="collapse navbar-collapse" id="categoryNavbar">
                <ul className="nav navbar-nav">
                  <span className="icon-bar"></span>
                </ul>
                <ul className="nav navbar-nav">
                <li className="">
                  <Link to={"/"}>Smartphones</Link>
                </li>
                <li className="">
                  <Link to={"/"}>Mobile Accessories</Link>
                </li>
                <li className="">
                  <Link to={"/"}>Computer</Link>
                </li>
                <li className="">
                  <Link to={"/"}>Computer Accessories</Link>
                </li>
                <li className="">
                  <Link to={"/"}>Electronics Accessories</Link>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Other <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={"/"}>Other 1</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Other 2</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Other 3</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Other 4</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Other 5</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Other 6</Link>
                    </li>
                  </ul>
                </li>
              </ul>
                </div>
              </nav>

            </div>

            <div className="col-sm-9">
              <div
                className="carousel slide"
                id="myCarousel"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="item active">
                    <img src={img1} alt="Los Angeles" />
                    <div className="carousel-caption"></div>
                  </div>
                  <div className="item">
                    <img src={img2} alt="Chicago" />
                    <div className="carousel-caption"></div>
                  </div>
                  <div className="item">
                    <img src={img3} alt="New York" />
                    <div className="carousel-caption"></div>
                  </div>
                </div>

                <a
                  href="#myCarousel"
                  className="left carousel-control"
                  data-slide="prev"
                >
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  href="#myCarousel"
                  className="right carousel-control"
                  data-slide="prev"
                >
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Previous</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container container-category">
            <div className="row">
                <div className="categoryTitle">
                    <h4>Smartphones</h4>
                </div>
            </div>
            
            <Swiper 
                    slidesPerView={5}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card">
                                <img src={smpic1} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">Infinix Hot 12</h5>
                                    <p className="card-text">12500</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={smpic2} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">Apple iphone 12</h5>
                                    <p className="card-text">145000</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={smpic3} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">Realme 7</h5>
                                    <p className="card-text">18500</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>            

                </Swiper>
        </div>

        <div className="container container-category">
            <div className="row">
                <div className="categoryTitle">
                    <h4>Mobile Accessories</h4>
                </div>
            </div>
            
            <Swiper 
                    slidesPerView={5}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card">
                                <img src={mapic1} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">back camera lens</h5>
                                    <p className="card-text">50</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={mapic2} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">infinix note 10 Silicone cover</h5>
                                    <p className="card-text">230</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={mapic3} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">Remax Rpp-96 Power Bank</h5>
                                    <p className="card-text">750</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>            
                </Swiper>
        </div>

        <div className="container container-category">
            <div className="row">
                <div className="categoryTitle">
                    <h4>Computer</h4>
                </div>
            </div>
            
            <Swiper 
                    slidesPerView={5}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card">
                                <img src={compic1} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">hp pavilion 15 core i5</h5>
                                    <p className="card-text">65400</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={compic2} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">Dell Inspiron 15 intel i5</h5>
                                    <p className="card-text">66540</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={compic3} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">lenovo ideapad 5i core i5</h5>
                                    <p className="card-text">101400</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>            
                </Swiper>
        </div>

        <div className="container container-category">
            <div className="row">
                <div className="categoryTitle">
                    <h4>Computer Accessories</h4>
                </div>
            </div>
            
            <Swiper 
                    slidesPerView={5}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card">
                                <img src={comapic1} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">hp pavilion 15 core i5</h5>
                                    <p className="card-text">65400</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={comapic2} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">Dell Inspiron 15 intel i5</h5>
                                    <p className="card-text">66540</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={comapic3} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">lenovo ideapad 5i core i5</h5>
                                    <p className="card-text">101400</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>            
                </Swiper>
        </div>

        <div className="container container-category">
            <div className="row">
                <div className="categoryTitle">
                    <h4>Electronics Accessories</h4>
                </div>
            </div>
            
            <Swiper 
                    slidesPerView={5}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card">
                                <img src={ecompic1} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">D-link dir-650in n300</h5>
                                    <p className="card-text">1500</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={ecompic2} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">Tenda f3</h5>
                                    <p className="card-text">1240</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <img src={ecompic3} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">Tp-link archer c6</h5>
                                    <p className="card-text">3650</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </SwiperSlide>            
                </Swiper>
        </div>



      </div>
    );
  }
}

export default Home;
