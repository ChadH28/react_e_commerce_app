import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Homepage from './pages/home/homepage';
import ShopPage from './pages/shop/shop-page';
import NotFound from './pages/404/404-page';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* updated Routes instead of switch */}
      <div className='section'>
      <Routes>
        {/* used element instead of component */}
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/shop' element={<ShopPage/>} />
        <Route path='*' element={<NotFound/>} />
        {/* <Route exact path='/' element={<Homepage/>} /> */}
      </Routes>
      </div>
    </div>
  );
}

export default App;