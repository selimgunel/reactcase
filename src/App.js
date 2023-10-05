
import './App.css';
import React from 'react';
import Login from './pages/Login/Login';
import Title from './pages/Title/Title';
import Home from './pages/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
                    <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/title" element={<Title/>}/>
                    </Routes>
                </BrowserRouter>
    </div>
  );
}

export default App;
