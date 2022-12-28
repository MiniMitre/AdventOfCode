import React from 'react';
import { NavLink } from 'react-router-dom';
import './Topbar.css';

const Topbar: React.FC = () => {

  return (
    <div className="topbar">
      <NavLink to= '/' className='home'>Home</NavLink>
      <ul className='navigation'>
        <li><NavLink className='day solved' to='day-1'>Day 1</NavLink></li>
        <li><NavLink className='day solved' to= 'day-2'>Day 2</NavLink></li>
        <li><NavLink className='day solved' to= 'day-3'>Day 3</NavLink></li>
        <li><NavLink className='day solved' to= 'day-4'>Day 4</NavLink></li>
        <li><NavLink className='day' to= 'day-5'>Day 5</NavLink></li>
        <li><NavLink className='day solved' to= 'day-6'>Day 6</NavLink></li>
        <li><NavLink className='day' to= 'day-7'>Day 7</NavLink></li>
        <li><NavLink className='day' to= 'day-8'>Day 8</NavLink></li>
        <li><NavLink className='day' to= 'day-9'>Day 9</NavLink></li>
        <li><NavLink className='day' to= 'day-10'>Day 10</NavLink></li>
        <li><NavLink className='day' to= 'day-11'>Day 11</NavLink></li>
        <li><NavLink className='day' to= 'day-12'>Day 12</NavLink></li>
        <li><NavLink className='day' to= 'day-13'>Day 13</NavLink></li>
        <li><NavLink className='day' to= 'day-14'>Day 14</NavLink></li>
        <li><NavLink className='day' to= 'day-15'>Day 15</NavLink></li>
        <li><NavLink className='day' to= 'day-16'>Day 16</NavLink></li>
        <li><NavLink className='day solved' to= 'day-17'>Day 17</NavLink></li>
        <li><NavLink className='day' to= 'day-18'>Day 18</NavLink></li>
        <li><NavLink className='day' to= 'day-19'>Day 19</NavLink></li>
        <li><NavLink className='day' to= 'day-20'>Day 20</NavLink></li>
        <li><NavLink className='day' to= 'day-21'>Day 21</NavLink></li>
        <li><NavLink className='day' to= 'day-22'>Day 22</NavLink></li>
        <li><NavLink className='day' to= 'day-23'>Day 23</NavLink></li>
        <li><NavLink className='day' to= 'day-24'>Day 24</NavLink></li>
        <li><NavLink className='day' to= 'day-25'>Day 25</NavLink></li>
      </ul>        
    </div>
  );
};

export default Topbar;