import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import NavBar from './components/NavBar';
import Blog from './pages/Blog';
import Market from './pages/Market';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/market' element={<Market />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
