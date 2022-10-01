import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
