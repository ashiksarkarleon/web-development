import { useState, useEffect, useRef} from 'react';
import axios from 'axios';
import './css/Form.css';

const Form = () => {

    const [fastname, setFastName] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();
    const [sex, setSex] = useState();
    const [date, setDate] = useState();

    function mStatus1(){
        var sMes1 = document.getElementById('alertsuccess').style;
        sMes1.visibility = 'visible';
    }
    function mStatus2(){
        var sMes1 = document.getElementById('alertfail').style;
        sMes1.visibility = 'visible';
    }
        
    const message = () => {
        fetch('http://localhost:8000/status')
        .then((res) => {
            if(res.status === 200){
                registration();
                setTimeout(mStatus1(), 2000);
                //alert('Registration Success');  
            }else if(res.status === 400){
                setTimeout(mStatus2(), 3000);
            }else{
                setTimeout(mStatus2(), 3000);
                //alert('Registration fail');
            }
        })
        .catch((error) => {
            alert(error);
        })
    };

    const registration = () => {
        axios.post('http://localhost:8000/insert', {
            fastname: fastname,
            lastname: lastname,
            email: email,
            password: password,
            sex: sex,
            date: date
        }).then(function(response){
            alert(response);
        }).catch(function(error) {
            alert(error);
        });
    };

    const validation = (event) => {
        if(password !== rePassword){
            alert('password does not match');
        }
        else if(password === rePassword){
            message();
        }
    }

    /*
    const [inputs, setInputs] = useState();

    const changeInputs = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}));
    }
*/
/*
    useEffect(() => {
        console.log(date);
    },[date]);
*/

    

    return (
        <div className='container-fluid'>

            <h1 className='form-name'>Registration</h1>
            <br/>
            <form onSubmit={validation}  className='form-horizontal'>      
                <div className='form-group'>
                    <div className='col-sm-6'>
                        <div className='input-group'>
                            <span className='input-group-addon'><i className='glyphicon glyphicon-user'></i></span>
                            <input type={'text'} className="form-control" name='fastname' value={fastname} placeholder='Enter Your FastName...' onChange={(e) => {setFastName(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='input-group'>
                            <span className='input-group-addon'><i className='glyphicon glyphicon-user'></i></span>
                            <input type={'text'} className="form-control" name='lastname' value={lastname} placeholder='Enter Your LastName...' onChange={(e) => {setLastName(e.target.value)}} required/>
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='col-sm-12'>
                        <div className='input-group'>
                            <span className='input-group-addon'><i className='glyphicon glyphicon-envelope'></i></span>
                            <input type={'email'} className="form-control" name='email' value={email} placeholder='Enter Your Email...' onChange={(e) => {setEmail(e.target.value)}} required/>
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='col-sm-12'>
                        <div className='input-group'>
                            <span className='input-group-addon'><i className='glyphicon glyphicon-lock'></i></span>
                            <input type={'password'} className="form-control" name='password' value={password} placeholder='Enter Your Password...' onChange={(e) => {setPassword(e.target.value)}} required/>
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='col-sm-12'>
                        <div className='input-group'>
                            <span className='input-group-addon'><i className='glyphicon glyphicon-lock'></i></span>
                            <input type={'password'} className="form-control" name='rePassword' value={rePassword} placeholder='Re-Type Your Password...' onChange={(e) => {setRePassword(e.target.value)}} required/>
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='col-sm-6'>
                        <div className='input-group'>
                            <h5 className='radio-inline'>Gender : </h5>
                            <label className='radio-inline'><input type={'radio'} name='sex' value={'male'} checked={sex === "male"} onChange={(e) => {setSex(e.target.value)}} required/>Male</label>
                            <label className='radio-inline'><input type={'radio'} name='sex' value={'female'} checked={sex === "female"} onChange={(e) => {setSex(e.target.value)}} required/>Female</label>
                        </div>
                    </div>
                </div>

                <div className='form-group'>
                    <label className='col-sm-3 control-label dateName'>Date of Birth : </label>
                    <div className='col-sm-6'>
                        <input className='form-control' id='date' type={'date'} name='date' value={date} onChange={(e) => {setDate(e.target.value)}} required/>
                    </div>
                </div>

                <div className='form-group'>
                    <div className='col-sm-3'>
                        
                    </div>
                    <div className='col-sm-8'>
                        <div className='input-group'>
                            <button className='btn btn-primary' type='submit'>Register</button>
                        </div>
                    </div>
                </div>
                
            </form>

            <div className='container-fluid'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4 alert-message'>
                    <div className='alert alert-success alert-dismissable fade in alert-message-success' id='alertsuccess'>
                        <a href='#' className='close' data-dismiss='alert' aria-label='class'>&times;</a>
                        <strong>{'Success!'}</strong> {'Registration'}
                    </div>
                    <div className='alert alert-warning alert-dismissable fade in alert-message-fail' id='alertfail'>
                        <a href='#' className='close' data-dismiss='alert' aria-label='class'>&times;</a>
                        <strong>{'Fail!'}</strong> {'Registration'}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Form;