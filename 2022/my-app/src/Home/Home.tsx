import React from "react";
import './Home.css';

const Home: React.FC = () => {
  return(
    <div className="App-body">
      <img src={"https://cdn.thenewstack.io/media/2021/12/521cd034-advent-of-code-2021.jpg"} className="App-logo" alt="logo" />
      <p>
        Solving <a href="https://adventofcode.com">Advent Of Code</a> problems with React!
      </p>
    </div>
  )
}

export default Home