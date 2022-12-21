import React from "react";
import './Home.css';

import Logo from "./img/AdventOfCode_Logo.png"

const Home: React.FC = () => {
  return(
    <div className="container">
      <div className="home-logo">
      <img
        src={Logo} className="App-logo" alt="logo"/>
      </div>
      <div className="home-text">
      <p>
        Solving <a href="https://adventofcode.com">Advent Of Code</a> problems with React!
      </p>
      </div>
    </div>
  )
}

export default Home