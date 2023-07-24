import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/Read.css';

const Read = () => {
    const [datas, setData] = useState([]);
    const[querys, setQuery] = useState([]);
    const [view, setView] = useState([]);
    const url = 'http://127.0.0.1:8000/read';

    const [fastname, setFastName] = useState([]);
    const [lastname, setLastName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [sex, setSex] = useState([]);
    const [date, setDate] = useState([]);

    const [v_id, setVid] = useState([]);
    const [v_name, setVname] = useState([]);
    const [v_email, setVemali] = useState([]);
    const [v_sex, setVsex] = useState([]);
    const [v_date, setVdate] = useState([]);

    const [input, setInput] = useState([]);

    useEffect(() => {
        axios.get(url).then(function(response){
            setData(response.data);
        }).catch(function(err){
            notify(err);
        });
    }, []);

    const refreshFetchData = () => {
        axios.get(url).then(function(response){
            setData(response.data);
        }).catch(function(err){
            notify(err);
        });
    }

    const deleteData = (event) => {
        const dId = event.target.value;
        setTimeout(() =>{
            axios.get('http://127.0.0.1:8000/delete/' + dId).then(function(response){
                refreshFetchData();
            }).catch(function(err){
                notify(err);
            });
        }, 550)
    };

    const qData = (event) => {
        var eId = event.target.value;
        axios.get('http://127.0.0.1:8000/query/' + eId).then(function(response){
            setQuery(response.data);
        }).catch(function(err){
            notify(err);
        });  
    };

    const vData = (event) => {
        var eId = event.target.value;
        axios.get('http://127.0.0.1:8000/query/' + eId).then(function(response){
            setView(response.data);
        }).catch(function(err){
            notify(err);
        });  
    };

    const viewData = (e) => {
        setVid(view[0].id);
        setVname(view[0].fastname + " " + view[0].lastname);
        setVemali(view[0].email);
        setVsex(view[0].sex);
        setVdate(view[0].date);
    };

    const displayData = () => {

        setFastName(querys[0].fastname);
        setLastName(querys[0].lastname);
        setEmail(querys[0].email);
        setPassword(querys[0].password);
        setSex(querys[0].sex);
        setDate(querys[0].date);
/*
        document.querySelector('.fastname').value = querys[0].fastname;
        document.querySelector('.lastname').value = querys[0].lastname;
        document.querySelector('.email').value = querys[0].email;
        document.querySelector('.password').value = querys[0].password;

        if(querys[0].sex === 'male'){
            document.querySelector('.male').checked = true;
        }
        if(querys[0].sex === 'female'){
            document.querySelector('.female').checked = true;
        }
        document.querySelector('.date').value = querys[0].date;
*/
    }

    const notify = (mess) => {
        toast(mess);
    };

    const editData = (event) => {
        event.preventDefault();
        axios.put('http://127.0.0.1:8000/update', {
            id: querys[0].id,
            fastname: fastname,
            lastname: lastname,
            email: email,
            password: password,
            sex: sex,
            date: date
        }).then(function(response) {
            if(response.data === "OK"){
                notify('Save Successfull');
                refreshFetchData();
                setFastName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setSex('');
                setDate('');
            }
            
        }).catch(function(err){
            notify(err);
            refreshFetchData();
        });

    };

    const clean = () => {
        setFastName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setSex('');
        setDate('');
    }

    const addData = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/insert', {
            fastname: fastname,
            lastname: lastname,
            email: email,
            password: password,
            sex: sex,
            date: date
        }).then(function(response) {
            if(response.data === 'OK'){
                notify('Add Successfull');
                refreshFetchData();
                setFastName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setSex('');
                setDate('');
            }
        }).catch(function(err){
            notify(err);
            refreshFetchData();
        });
    }

    const search = () => {
        var filter = input.toString().toUpperCase();
        var table = document.querySelector('table');
        var tr = table.getElementsByTagName('tr');
        
        for(var i=0; i<tr.length; i++){
            var td = tr[i].getElementsByTagName('td')[0];
            if(td){
                var txtVale = td.textContent || td.innerHTML;
                if(txtVale.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                } else {
                    tr[i].style.display = 'none';
                }
            }
        }

    }

    return(
        <div>
            <div className='title' data-spy="affix" data-offset-top="197">
                <p>CRUD React</p>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='divBtnAdd'>
                        <input type={'text'} className='searchInput form-control' id='myInput' placeholder='Search..' onChange={(e) => setInput(e.target.value)} onKeyUp={((e) => search())}/>
                        <button className='btn btn-primary btnAdd' name='delete' data-toggle='modal' data-target='#mymodal_add' onClick={clean}>Add</button>
                    </div>
                </div>
                <div className='container container-dev'>
                    <div className='table-responsive'>
                        <table className='table table-striped table-bordered table-hover table-condensed' id='myTable'>
                            <thead>
                                <tr>
                                    <th>FastName</th>
                                    <th>LastName</th>
                                    <th>Enail</th>
                                    <th>Password</th>
                                    <th>Sex</th>
                                    <th>Date of Birth</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas.map(items => (
                                    <tr key={items.id}>
                                        <td>{items.fastname}</td>
                                        <td>{items.lastname}</td>
                                        <td>{items.email}</td>
                                        <td>{items.password}</td>
                                        <td>{items.sex}</td>
                                        <td>{items.date}</td>
                                        <td>
                                            <button className='btn btn-success' value={items.id} name='view' data-toggle='modal' data-target='#mymodal_view' onClick={(e) => {viewData(e)}} onMouseOver={(e) => {vData(e)}}>View</button>
                                            <button className='btn btn-info' value={items.id} name='edit' data-toggle='modal' data-target='#mymodal' onClick={(e) => {displayData()}} onMouseOver={(e) => {qData(e)}}>Edit</button>
                                            <button className='btn btn-danger' value={items.id} name='delete' onClick={(e) => {deleteData(e)}}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className='modal fade' id='mymodal' role={'dialog'}>
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Edit</h4>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={editData}  className='form-horizontal'>    
                                    <div className='form-group'>
                                        <div className='col-sm-6'>
                                            <div className='input-group'>
                                                <span className='input-group-addon'><i className='glyphicon glyphicon-user'></i></span>
                                                <input type={'text'} className="form-control fastname" name='fastname' value={fastname} placeholder='Enter Your FastName...' onChange={(e) => {setFastName(e.target.value)}} required/>
                                        </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className='input-group'>
                                                <span className='input-group-addon'><i className='glyphicon glyphicon-user'></i></span>
                                                <input type={'text'} className="form-control lastname" name='lastname' value={lastname} placeholder='Enter Your LastName...' onChange={(e) => {setLastName(e.target.value)}} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div className='col-sm-12'>
                                            <div className='input-group'>
                                                <span className='input-group-addon'><i className='glyphicon glyphicon-envelope'></i></span>
                                                <input type={'email'} className="form-control email" name='email' value={email} placeholder='Enter Your Email...' onChange={(e) => {setEmail(e.target.value)}} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div className='col-sm-12'>
                                            <div className='input-group'>
                                                <span className='input-group-addon'><i className='glyphicon glyphicon-lock'></i></span>
                                                <input type={'text'} className="form-control password" name='password' value={password} placeholder='Enter Your Password...' onChange={(e) => {setPassword(e.target.value)}} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div className='col-sm-6'>
                                            <div className='input-group'>
                                                <h5 className='radio-inline'>Gender : </h5>
                                                <label className='radio-inline'><input className='male' type={'radio'} name='sex' value={'male'} checked={sex === "male"} onChange={(e) => {setSex(e.target.value)}} required/>Male</label>
                                                <label className='radio-inline'><input className='female' type={'radio'} name='sex' value={'female'} checked={sex === "female"} onChange={(e) => {setSex(e.target.value)}} required/>Female</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='form-group'>
                                        <label className='col-sm-3 control-label dateName'>Date of Birth : </label>
                                        <div className='col-sm-6'>
                                            <input className='form-control date' id='date' type={'date'} name='date' value={date} onChange={(e) => {setDate(e.target.value)}} required/>
                                        </div>
                                    </div>

                                    <div className='btnSave'>
                                        <button className='btn btn-success' type='submit'>Save</button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='modal fade' id='mymodal_add' role={'dialog'}>
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Add</h4>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={addData}  className='form-horizontal'>    
                                        <div className='form-group'>
                                            <div className='col-sm-6'>
                                                <div className='input-group'>
                                                    <span className='input-group-addon'><i className='glyphicon glyphicon-user'></i></span>
                                                    <input type={'text'} className="form-control fastname" name='fastname' value={fastname} placeholder='Enter Your FastName...' onChange={(e) => {setFastName(e.target.value)}} required/>
                                            </div>
                                            </div>
                                            <div className='col-sm-6'>
                                                <div className='input-group'>
                                                    <span className='input-group-addon'><i className='glyphicon glyphicon-user'></i></span>
                                                    <input type={'text'} className="form-control lastname" name='lastname' value={lastname} placeholder='Enter Your LastName...' onChange={(e) => {setLastName(e.target.value)}} required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <div className='col-sm-12'>
                                                <div className='input-group'>
                                                    <span className='input-group-addon'><i className='glyphicon glyphicon-envelope'></i></span>
                                                    <input type={'email'} className="form-control email" name='email' value={email} placeholder='Enter Your Email...' onChange={(e) => {setEmail(e.target.value)}} required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <div className='col-sm-12'>
                                                <div className='input-group'>
                                                    <span className='input-group-addon'><i className='glyphicon glyphicon-lock'></i></span>
                                                    <input type={'text'} className="form-control password" name='password' value={password} placeholder='Enter Your Password...' onChange={(e) => {setPassword(e.target.value)}} required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <div className='col-sm-6'>
                                                <div className='input-group'>
                                                    <h5 className='radio-inline'>Gender : </h5>
                                                    <label className='radio-inline'><input className='male' type={'radio'} name='sex' value={'male'} checked={sex === "male"} onChange={(e) => {setSex(e.target.value)}} required/>Male</label>
                                                    <label className='radio-inline'><input className='female' type={'radio'} name='sex' value={'female'} checked={sex === "female"} onChange={(e) => {setSex(e.target.value)}} required/>Female</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='form-group'>
                                            <label className='col-sm-3 control-label dateName'>Date of Birth : </label>
                                            <div className='col-sm-6'>
                                                <input className='form-control date' id='date' type={'date'} name='date' value={date} onChange={(e) => {setDate(e.target.value)}} required/>
                                            </div>
                                        </div>

                                        <div className='btnSave'>
                                            <button className='btn btn-success' type='submit'>Add</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='modal fade' id='mymodal_view' role={'dialog'}>
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">View</h4>
                                </div>
                                <div className="modal-body">
                                    <div className='card'>
                                        <div className='card-body'>
                                            <p className='card-title'>Id No : {v_id}</p>
                                            <p className='card-text'>Name : {v_name}</p>
                                            <p className='card-text'>Email : {v_email}</p>
                                            <p className='card-text'>Gender : {v_sex}</p>
                                            <p className='card-text'>Date of Birth : {v_date}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ToastContainer position='top-center'/>
            </div>
        </div>
    )
}

export default Read;