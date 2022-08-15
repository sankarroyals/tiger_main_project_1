import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './pages/home/Home'
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Saved from './components/saved/Saved'
import Validation from './components/validation/Validation';
import { useEffect } from 'react';


//added comment
function App() {
  const data = [{id:'1',col:'id',exp:'Expectation 1'},{id:'2',col:'id',exp:'Expectation 2'}]
  
  return (
    <BrowserRouter>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
        <Navbar />
          

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path='/saved' element={<Saved />} />
            <Route path='/validation/:exp/:col' element={<Validation />} />
           
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
