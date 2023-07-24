import './App.css';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const arr = [1,2,3,4];

/*
  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      const resp = await fetch('http://127.0.0.1:8000/read');
      const dt = await resp.json();
      setLoading(false);
      setData(dt);
    }, 2000);
}, []);
*/

/*
useEffect(() => {
  setLoading(true);
  axios.get('http://127.0.0.1:8000/read').then(function(response){
      setLoading(false);
      setData(response.data);
  }).catch(function(err){
      throw err;
  });
}, []);
*/

const loadData = () => {
  setLoading(true);
  fetch('https://fakestoreapi.com/products/category/electronics')
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      setData(data);
    });
}

console.log(data);


  return (
    <div className="App">
      <div className='container'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <button className='btn btn-primary' onClick={loadData}>fetch data</button>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <div className='container'>
            {!loading ? (data.map(item => (
                <div key={item.id} className='card'>
                  <img src={item.image} alt=''/>
                  <p key={item.id}>{item.title}</p>
                </div>
              ))) : (
                arr.map( i => (
                  <div className='container' key={i}>
                    <div  className='sk-card' >
                      <div className='sk-img'>
                        <Skeleton width={100} height={100} borderRadius={5}/>
                      </div>
                      <div className='sk-title'>
                        <Skeleton count={2}/>
                      </div>
                    </div>
                </div>
                ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
