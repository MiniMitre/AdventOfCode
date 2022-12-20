import React from "react";
import './solution.css';
import { exampleInput } from './example-input';
import { myInput } from "./input";

function solveDay01Part01(input: string){

  let maxCalories : number = 0
  let currentCalories : number = 0

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\n')

  for (let i = 0; i < inputArray.length; i++) {

    //We have reached a new line
    if (inputArray[i] == ""){
      maxCalories = Math.max(currentCalories, maxCalories)
      currentCalories = 0
    }
    else{
      //We are still on the same elf
      currentCalories += parseInt(inputArray[i])
    }

  }

  //Convert result to string with comma seperated thousands
  const result = maxCalories.toLocaleString('en', {useGrouping:true})
  return result

}

var part1Code = 
`function solveDay01Part01(input: string){

  let maxCalories : number = 0
  let currentCalories : number = 0

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\\n')

  for (let i = 0; i < inputArray.length; i++) {

    //We have reached a new line
    if (inputArray[i] == ""){
      maxCalories = Math.max(currentCalories, maxCalories)
      currentCalories = 0
    }
    else{
      //We are still on the same elf
      currentCalories += parseInt(inputArray[i])
    }

  }

  //Convert result to string with comma seperated thousands
  const result = maxCalories.toLocaleString('en', {useGrouping:true})
  return result

}`

const Day01: React.FC = () => {

  return(
    <div className="container">

      <div className="iframe">
        <h1>Question:</h1>
        <iframe title="Day1" src="https://adventofcode.com/2022/day/1"></iframe>
        <p>From <a href="https://adventofcode.com">Advent Of Code</a></p>
      </div>
      
      <div className="example">
        <h2>Example:</h2>
      </div>

      <div className="input">

        <h3>Input:</h3>

        <pre>
          <div className="TypeScript">
            {exampleInput}
          </div>
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
              <td className="red">24,000</td>
              <td>10,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="example-results">
        <p>
          Example
        </p>
        <pre>
          <div className="TypeScript">
            {solveDay01Part01(exampleInput)}
          </div>
        </pre>
      </div>

      <div className="my-results">
        <p>Using my puzzle input</p>
        <pre>
          <div className="TypeScript">
            {solveDay01Part01(myInput)}
          </div>
        </pre>
      </div>

      <div className="explanation">
        <p>The following code is written in TypeScript</p>
        <pre>
          <div className="TypeScript">
            {part1Code}
          </div>
        </pre>
      </div>

    </div>
  )
}
  
export default Day01