import '../css/Home.css';
import bgimg from '../img/pngtree-online-meeting-discussion-illustration-background-picture-image_1178673.jpg';
import s_img_1 from '../img/pngtree-online-survey-concept-banner-image_1384918.jpg';
import img_javascript from '../img/javascript-vector-logo.jpg';
import img_python from '../img/Python-logo-notext.svg.jpg';
import img_java from '../img/Java.jpg';
import img_kotlin from '../img/Kotlin_Icon.svg.jpg';
import img_csharp from '../img/c-sharp.jpg';
import img_cpp from '../img/C++ Logo.jpg';
import img_react from '../img/React-icon.jpg';
import img_angular from '../img/angularjs-logo.jpg';
import img_viewjs from '../img/view js.jpg';
import img_nodejs from '../img/Node.js_logo.jpg';
import img_django from '../img/django-python.jpg';
import img_asp_net from '../img/asp-net.jpg';


const Home = () => {
    return(
        <div>
            <div className="container">
                <div className='thumbnail bg-img'>
                    <div className='bg-content'>
                        <h1>I AM HERE</h1>
                        <p>Lorem ipsum, or lipsum as it is sometimes known.</p>
                        <button type='button'>ContactUs</button>
                    </div>
                </div>
                <div className='service-Title-1'>
                    <h1>Programming Language</h1>
                </div>
                <div className='service-1-content'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <div className='content-wrapper'>
                                <img src={img_javascript} alt=''/>
                                <h1>JavaScript</h1>
                                <p>Learn For Web</p> 
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='content-wrapper'>
                                <img src={img_python} alt=''/>
                                <h1>Python</h1>
                                <p>Learn For Web & Machine learning</p> 
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='content-wrapper'>
                                <img src={img_java} alt=''/>
                                <h1>Java</h1>
                                <p>Learn For Enterprice</p> 
                            </div>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <div className='content-wrapper'>
                                <img src={img_kotlin} alt=''/>
                                <h1>kotlin</h1>
                                <p>Learn For Android</p> 
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='content-wrapper'>
                                <img src={img_csharp} alt=''/>
                                <h1>C#</h1>
                                <p>Learn For Desktop & Mobile & Web</p> 
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='content-wrapper'>
                                <img src={img_cpp} alt=''/>
                                <h1>C++</h1>
                                <p>Learn For OOP</p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service-Title-2'>
                    <h1>Frontend Framework</h1>
                </div>
                <div className='service-1-content'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <div className='content-wrapper'>
                                <img src={img_react} alt=''/>
                                <h1>React js</h1>
                                <p>Learn With React</p> 
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='content-wrapper'>
                                <img src={img_angular} alt=''/>
                                <h1>Angular</h1>
                                <p>Learn With Angular</p> 
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='content-wrapper'>
                                <img src={img_viewjs} alt=''/>
                                <h1>View js</h1>
                                <p>Learn For Enterprice</p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service-Title-3'>
                    <h1>Backend Framework</h1>
                </div>
                <div className='service-1-content'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <div className='content-wrapper'>
                                <img src={img_nodejs} alt=''/>
                                <h1>Node js</h1>
                                <p>Learn With Node js</p> 
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='content-wrapper'>
                                <img src={img_django} alt=''/>
                                <h1>Django</h1>
                                <p>Learn With Django</p> 
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='content-wrapper'>
                                <img src={img_asp_net} alt=''/>
                                <h1>Asp.net</h1>
                                <p>Learn With Asp.net</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;