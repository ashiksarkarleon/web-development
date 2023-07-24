import '../css/Footer.css';

const Footer = () => {
    return(
        <div>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <h3>Services</h3>
                            <p>Service 1</p>
                            <p>Service 2</p>
                            <p>Service 3</p>
                            <p>Service 4</p>
                        </div>
                        <div className='col-sm-3'>
                            <h3>Framework</h3>
                            <p>React</p>
                            <p>Angular</p>
                            <p>View js</p>
                            <p>Node js</p>
                            <p>Django</p>
                            <p>Asp.net</p>
                            
                        </div>
                        <div className='col-sm-3'>
                            <h3>Language</h3>
                            <p>JavaScript</p>
                            <p>Python</p>
                            <p>Java</p>
                            <p>Kotlin</p>
                            <p>C#</p>
                            <p>C++</p>
                        </div>
                        <div className='col-sm-3'>
                            <h3>ContactUs</h3>
                            <form className='form-submit' action='#'>
                                <input className='form-control' placeholder='Enter your name...'/>
                                <input className='form-control' placeholder='Enter your Email...'/>
                                <duv className='btnSub'>
                                    <div>
                                        <input className='btn btn-primary' type={'submit'} name='Submit'/>
                                    </div>
                                </duv>
                            </form>
                        </div>
                    </div>
                    <h1 className='auth'>© 2022 Ashik Sarkar Leon — All Rights Reserved.</h1>
                </div>
            </footer>
        </div>
    );
}
export default Footer;