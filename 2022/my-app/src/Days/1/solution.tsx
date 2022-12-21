import React from "react";
import './solution.css';
import { exampleInput } from './example-input';
import { myInput } from "./input";

function solvePart1(input: string){

  let maxCalories : number = 0
  let currentCalories : number = 0

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\n')

  for (let i = 0; i < inputArray.length; i++) {

    //We have reached a new line
    if (inputArray[i] === ""){
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
`function solvePart1(input: string){

  let maxCalories : number = 0
  let currentCalories : number = 0

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\n')

  for (let i = 0; i < inputArray.length; i++) {

    //We have reached a new line
    if (inputArray[i] === ""){
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

function solvePart2(input: string){

  let currentCalories : number = 0

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\n')
  
  //Create an array with each elf's calories
  let caloriesArray: number[] = []

  for (let i = 0; i < inputArray.length; i++) {

    //We have reached a new line
    if (inputArray[i] === ""){
      caloriesArray.push(currentCalories)
      currentCalories = 0
    }
    else{
      //We are still on the same elf
      currentCalories += parseInt(inputArray[i])
    }

  }

  //Sort calories in descending order
  caloriesArray.sort((a, b) => b - a)

  //Sum top 3 calories
  const output : number = caloriesArray[0] + caloriesArray[1] + caloriesArray[2]

  //Convert result to string with comma seperated thousands
  const result = output.toLocaleString('en', {useGrouping:true})
  return result

}

var part2code = 
`function solvePart2(input: string){

  let currentCalories : number = 0

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\n')
  
  //Create an array with each elf's calories
  let caloriesArray: number[] = []

  for (let i = 0; i < inputArray.length; i++) {

    //We have reached a new line
    if (inputArray[i] === ""){
      caloriesArray.push(currentCalories)
      currentCalories = 0
    }
    else{
      //We are still on the same elf
      currentCalories += parseInt(inputArray[i])
    }

  }

  //Sort calories in descending order
  caloriesArray.sort((a, b) => b - a)

  //Sum top 3 calories
  const output : number = caloriesArray[0] + caloriesArray[1] + caloriesArray[2]

  //Convert result to string with comma seperated thousands
  const result = output.toLocaleString('en', {useGrouping:true})
  return result

}`

const toggleExpand = (part : string) => {

  const buttonId = "button" + part
  const button = document.getElementById(buttonId)

  if (button === null){
    console.error("ButtonId: " + buttonId + " is null")
    return
  }
  if(button.innerHTML.includes("View")){
    button.innerHTML = "Hide Part " + part + " Code"
  }else{
    button.innerHTML = "View Part " + part + " Code"
  }

  const solutionId = "solution" + part
  const solution = document.getElementById(solutionId);

  if (solution === null){
    console.error("SolutionId " + solutionId + " is null")
    return
  }
  if (solution.style.display !== "none") {
      solution.style.display = "none";
  } else {
    solution.style.display = "block";
  }
}

const Day01: React.FC = () => {

  return(
    <div className="container">

      <div className="iframe">
        <h1>Question:</h1>
        <iframe title="Day1" src="https://adventofcode.com/2022/day/1"></iframe>
        <p>From <a href="https://adventofcode.com">Advent Of Code</a></p>
      </div>
      
      <div className="part">
        <h2>Part 1:</h2>
        <p>Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?</p>
      </div>

      <div className="input">

        <h3>Input:</h3>

        <pre>
          <div className="TypeScript">
            {exampleInput}
          </div>
        </pre>

      </div>

      <div className="part-1-solution">
        <h3>Example:</h3>
        <table>
          <tbody>
            <tr>
              <th>Elf 1</th>
              <th>Elf 2</th>
              <th>Elf 3</th>
              <th>Elf 4</th>
              <th>Elf 5</th>
            </tr>
            <tr>
              <td>1,000</td>
              <td>4,000</td>
              <td>5,000</td>
              <td>7,000</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>2,000</td>
              <td></td>
              <td>6,000</td>
              <td>8,000</td>
            </tr>
            <tr>
              <td>3,000</td>
              <td></td>
              <td></td>
              <td>9,000</td>  
            </tr>
            <tr className="sum">
              <td>6,000</td>
              <td>4,000</td>
              <td>11,000</td>
              <td className="green">24,000</td>
              <td>10,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="example-results">
        <p>
          Example:
        </p>
        <pre>
          <div className="TypeScript">
            {solvePart1(exampleInput)}
          </div>
        </pre>
      </div>

      <div className="button">
        <button onClick={()=>toggleExpand("1")} id="button1">
          View Code
        </button>
      </div>

      <div className="my-results">
        <p>Using my puzzle input</p>
        <pre>
          <div className="TypeScript centred">
            {solvePart1(myInput)}
          </div>
        </pre>
      </div>

      <div className="explanation">
        <pre>
          <div className="TypeScript" id="solution1" style={{ display: "none" }}>
            {part1Code}
          </div>
        </pre>
      </div>

      <div className="part">
        <h2>Part 2:</h2>
        <p>Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?</p>
      </div>

      <div className="part-2-solution">
        <h3>Using the same input as before:</h3>
        <table>
          <tbody>
            <tr>
              <th>Elf 1</th>
              <th>Elf 2</th>
              <th>Elf 3</th>
              <th>Elf 4</th>
              <th>Elf 5</th>
            </tr>
            <tr>
              <td>1,000</td>
              <td>4,000</td>
              <td>5,000</td>
              <td>7,000</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>2,000</td>
              <td></td>
              <td>6,000</td>
              <td>8,000</td>
            </tr>
            <tr>
              <td>3,000</td>
              <td></td>
              <td></td>
              <td>9,000</td>  
            </tr>
            <tr className="sum">
              <td>6,000</td>
              <td>4,000</td>
              <td className="green">11,000</td>
              <td className="green">24,000</td>
              <td className="green">10,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="example-results">
        <p>
          Example:
        </p>
        <pre>
          <div className="TypeScript">
            {solvePart2(exampleInput)}
          </div>
        </pre>
      </div>

      <div className="button">
        <button onClick={()=>toggleExpand("2")} id="button2">
          View Code
        </button>
      </div>

      <div className="my-results">
        <p>Using my puzzle input</p>
        <pre>
          <div className="TypeScript centred">
            {solvePart2(myInput)}
          </div>
        </pre>
      </div>

      <div className="explanation">
        <pre>
          <div className="TypeScript" id="solution2" style={{ display: "none" }}>
            {part2code}
          </div>
        </pre>
      </div>

    </div>
  )
}

export default Day01