import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home/Home'
import Topbar from './Topbar/Topbar';

import Day from './Days/Template/solution';
import Day01 from './Days/1/solution';

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/day-1' element={<Day01 />}></Route>
        <Route path='/day-2' element={<Day />}></Route>
        <Route path='/day-3' element={<Day />}></Route>
        <Route path='/day-4' element={<Day />}></Route>
        <Route path='/day-5' element={<Day />}></Route>
        <Route path='/day-6' element={<Day />}></Route>
        <Route path='/day-7' element={<Day />}></Route>
        <Route path='/day-8' element={<Day />}></Route>
        <Route path='/day-9' element={<Day />}></Route>
        <Route path='/day-10' element={<Day />}></Route>
        <Route path='/day-11' element={<Day />}></Route>
        <Route path='/day-12' element={<Day />}></Route>
        <Route path='/day-13' element={<Day />}></Route>
        <Route path='/day-14' element={<Day />}></Route>
        <Route path='/day-15' element={<Day />}></Route>
        <Route path='/day-16' element={<Day />}></Route>
        <Route path='/day-17' element={<Day />}></Route>
        <Route path='/day-18' element={<Day />}></Route>
        <Route path='/day-19' element={<Day />}></Route>
        <Route path='/day-20' element={<Day />}></Route>
        <Route path='/day-21' element={<Day />}></Route>
        <Route path='/day-22' element={<Day />}></Route>
        <Route path='/day-23' element={<Day />}></Route>
        <Route path='/day-24' element={<Day />}></Route>
        <Route path='/day-25' element={<Day />}></Route>

      </Routes>
    </>
  );
}

export default App;
