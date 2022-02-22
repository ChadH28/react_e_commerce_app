import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/home/homepage';
import NotFound from './pages/404/404-page';

function App() {
  return (
    <div className="App">
      {/* updated Routes instead of switch */}
      <Routes>
        {/* used element instead of component */}
        <Route exact path='/' element={<Homepage/>} />
        <Route path='*' element={<NotFound/>} />
        {/* <Route exact path='/' element={<Homepage/>} /> */}
      </Routes>
    </div>
  );
}

export default App;