import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home/Home'
import Topbar from './Topbar/Topbar';

import Unsolved from './Blank/Coming-Soon';
import Day01 from './Days/1/solution';
import Day02 from './Days/2/solution';
import Day03 from './Days/3/solution';
import Day06 from './Days/6/solution';

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/day-1' element={<Day01 />}></Route>
        <Route path='/day-2' element={<Day02 />}></Route>
        <Route path='/day-3' element={<Day03 />}></Route>
        <Route path='/day-4' element={<Unsolved />}></Route>
        <Route path='/day-5' element={<Unsolved />}></Route>
        <Route path='/day-6' element={<Day06 />}></Route>
        <Route path='/day-7' element={<Unsolved />}></Route>
        <Route path='/day-8' element={<Unsolved />}></Route>
        <Route path='/day-9' element={<Unsolved />}></Route>
        <Route path='/day-10' element={<Unsolved />}></Route>
        <Route path='/day-11' element={<Unsolved />}></Route>
        <Route path='/day-12' element={<Unsolved />}></Route>
        <Route path='/day-13' element={<Unsolved />}></Route>
        <Route path='/day-14' element={<Unsolved />}></Route>
        <Route path='/day-15' element={<Unsolved />}></Route>
        <Route path='/day-16' element={<Unsolved />}></Route>
        <Route path='/day-17' element={<Unsolved />}></Route>
        <Route path='/day-18' element={<Unsolved />}></Route>
        <Route path='/day-19' element={<Unsolved />}></Route>
        <Route path='/day-20' element={<Unsolved />}></Route>
        <Route path='/day-21' element={<Unsolved />}></Route>
        <Route path='/day-22' element={<Unsolved />}></Route>
        <Route path='/day-23' element={<Unsolved />}></Route>
        <Route path='/day-24' element={<Unsolved />}></Route>
        <Route path='/day-25' element={<Unsolved />}></Route>
      </Routes>
    </>
  );
}

export default App;
