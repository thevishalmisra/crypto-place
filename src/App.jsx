import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/footer/footer';

import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Features from './pages/features/features';
import Blog from './pages/Blog/Blog'; 
import Pricing from './pages/pricing/pricing';

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/features' element={<Features />} />
        <Route path='/blog' element={<Blog />} /> 
        <Route path='/pricing' element={<Pricing />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;


