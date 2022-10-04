
import './App.css';
import React from "react";
import Contact from './Contact';
import About from './About';
import Home from './Home';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App(){
  return <Router>
    
    <div className='up'><p className='up-white'>Скидка 40% на все товары после 19.00</p></div>
    <nav>
      
<div className='l'>
      <Link to="/" className='link' id="logo">Корица<img src="https://img.icons8.com/color/344/wheat.png" width="40px" alt="man"/></Link>
     <h6>Булочная</h6>
      </div>
    <div className='p'>
     <Link to="/about" className='link' id ="pages">О нас</Link>
       <Link to="/contact" className='link' id ="pages">Контакты</Link>
       
       
       </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
    </Router> 
    
}

export default App;
