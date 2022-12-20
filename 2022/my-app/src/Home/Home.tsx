import React from "react";
import './Home.css';

import Logo from "./img/AdventOfCode_Logo.png"

const Home: React.FC = () => {
  return(
    <div className="App-body">
      <img
        src={Logo} className="App-logo" alt="logo"/>
      <p>
        Solving <a href="https://adventofcode.com">Advent Of Code</a> problems with React!
      </p>
    </div>
  )
}

export default Home