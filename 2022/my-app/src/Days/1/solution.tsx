import React from "react";
import './solution.css';

import * as fs from 'fs';

const Day01: React.FC = () => {

  const maxCalories : number = 0
  const currentCalories : number = 0

  const exampleInput : string = "ahhhhhhhh";

  const initializeVariables = 
`const maxCalories = 0
const currentCalories = 0`
  
  return(
    <div className="container">

      <div className="iframe">
        <h1>Question:</h1>
        <iframe title="Day1" src="https://adventofcode.com/2022/day/1"></iframe>
      </div>
      
      <div className="example">
        <h2>Example:</h2>
      </div>

      <div className="input">

        <h3>Input:</h3>

        <pre className="input-text">
          <p>1000</p>
          <p>2000</p>
          <p>3000</p>
          <br></br>
          <p>4000</p>
          <br></br>
          <p>5000</p>
          <p>6000</p>
          <br></br>
          <p>7000</p>
          <p>8000</p>
          <p>9000</p>
          <br></br>
          <p>10000</p>
        </pre>

      </div>

      <div className="elves">
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Elf 1</th>
            <th>Elf 2</th>
            <th>Elf 3</th>
            <th>Elf 4</th>
            <th>Elf 5</th>
          </tr>
          <tr>
            <td></td>
            <td>1,000</td>
            <td>4,000</td>
            <td>5,000</td>
            <td>7,000</td>
            <td>1,0000</td>
          </tr>
          <tr>
            <td></td>
            <td>2,000</td>
            <td></td>
            <td>6,000</td>
            <td>8,000</td>
          </tr>
          <tr>
            <td></td>
            <td>3,000</td>
            <td></td>
            <td></td>
            <td>9,000</td>
          </tr>
          <tr className="sum">
            <td>Sum</td>
            <td>6,000</td>
            <td>4,000</td>
            <td>11,000</td>
            <td>24,000</td>
            <td>10,000</td>
          </tr>
        </tbody>
      </table>
      </div>

    <div className="explanation">
      <p>The following code is written in TypeScript:</p>
      <p>This problem can be solved by creating a variable to store the max calories, and initialising it to 0.</p>
      <code>const maxCalories = 0</code>
      <p>Also initialise a variable to count the current calories.</p>
      <code>const currentCalories = 0</code>
      <p>Then loop over each line in the input, adding it to the current calories, unless it is a new line <code>\n</code></p>
      <pre>
        <div className="TypeScript">
            {initializeVariables}
        </div>
      </pre>
      <pre>
        <div className="TypeScript">
            {exampleInput}
        </div>
      </pre>
      <p>If it is a new line <code>\n</code>  compare the max calories to the current calories. Replacing the max calories with whichever is larger.</p>
      <p>The final answer is the value of max calories.</p>
    </div>

    </div>
  )
}
  
export default Day01