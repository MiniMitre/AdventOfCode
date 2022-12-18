import React from 'react';
import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './Home/Home'
import Topbar from './Topbar/Topbar';
import Day01 from './Days/1/solution';

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/day-1' element={<Day01 />}></Route>
      </Routes>
    </>
  );
}

export default App;
