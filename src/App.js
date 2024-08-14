import './App.css';
import React, {useEffect, useState} from 'react';
import Product from './components/Product';
import Navigation from './components/Nav';
import Detail from './components/Detail';
import data from './components/data';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Cart from './components/Cart';
import Latest from './components/Latest';
function App() {
  
  const [storedData, setStoredData] = useState([]);
  // useEffect(() => {
  //   localStorage.setItem('watched', JSON.stringify([]));
  //   let getLocalData = JSON.parse(localStorage.getItem("watched"));
  //   setStoredData(
  //     getLocalData.map((item, i) => {
  //       return(
  //         <div key={i}>
  //           {item}
  //         </div>
  //       )
  //     })
  //   )
  // }, [useNavigate()]);

  

  const [shoes, setShoes] = useState(data);

   
 

  const commu = () => {
    axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
      const newShoes = result.data.filter(x => !shoes.some(item => item.id === x.id));
      setShoes([...shoes, ...newShoes]);
    }).catch(() => {
      console.log('실패');
    })
  }

  return (
    <div className="App position_r">      
      <Navigation/>
      <Latest storedData={storedData} setStoredData={setStoredData}/>
      <Routes>
        <Route path='/' element={
          <>        
            <div className='main_bg'></div> 
            <Product shoes = {shoes}/>
            <button onClick={commu} style={{display: 'block', margin : '0 auto'}}>더보기</button>
          </>
        }/>
        <Route path='/product' element={<Product shoes = {shoes}/>}/>
        <Route path='/detail/:id' element={<Detail shoes = {shoes} />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<div><img src={process.env.PUBLIC_URL + `/images/404.jpg`} alt='' className='notFound'/></div>}/>
      </Routes>
      
    </div>
  );
}


export default App;
