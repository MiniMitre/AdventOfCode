import React from "react";
import './solution.css';
import '../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css'
import { exampleInput } from './example-input';
import { myInput } from "./input";
import { toggleExpand } from "../Functions/functions";

import hljs from 'highlight.js'

function solvePart1(input: string){

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\n')

  let maxCalories : number = 0
  let currentCalories : number = 0

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
  let inputArray: string[] = input.split('\\n')

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

//Add highlighting to code
part1Code = hljs.highlight(part1Code,{language: 'TypeScript'}).value

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

var part2Code = 
`function solvePart2(input: string){

  let currentCalories : number = 0

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\\n')
  
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

//Add highlighting to code
part2Code = hljs.highlight(part2Code,{language: 'TypeScript'}).value
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

const Day01: React.FC = () => {

  return(
    
    <div className="container">
      <div className="iframe">
        <h1>Day 1:</h1>
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
          <code className="TypeScript">
            {exampleInput}
          </code>
        </pre>

      </div>

      <div className="part-1-calculation day1">
        <h3>Calculation:</h3>
        <p><strong>Elf 1:</strong> 6,000</p>
        <p><strong>Elf 2:</strong> 4,000</p>
        <p><strong>Elf 3:</strong> 11,000</p>
        <p><strong>Elf 4:</strong> <span className="green" >24,000</span></p>
        <p><strong>Elf 5:</strong> 10,000</p>
      </div>

      <div className="part-1-solution">
        <h3>Solution:</h3>
        <p>Example:</p>
        <pre>
          <code className="TypeScript">
            {solvePart1(exampleInput)}
          </code>
        </pre>
        <p>Using my puzzle input:</p>
        <pre>
          <code className="TypeScript">
            {solvePart1(myInput)}
          </code>
        </pre>
        <div className="button">
          <button onClick={()=>toggleExpand("1")} id="button1">
            View Part 1 Code
          </button>
        </div>
      </div>

      <div className="explanation">
        <pre>
          <code className="TypeScript" id="solution1" style={{ display: "none" }}>
            <div dangerouslySetInnerHTML={{ __html: part1Code }} />
          </code>
        </pre>
      </div>

      <div className="part">
        <h2>Part 2:</h2>
        <p>Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?</p>
      </div>

      <div className="input">

        <h3>Input:</h3>

        <pre>
          <code className="TypeScript">
            {exampleInput}
          </code>
        </pre>

      </div>

      <div className="part-2-calculation day1">
        <h3>Calculation:</h3>
        <p><strong>Elf 1:</strong> 6,000</p>
        <p><strong>Elf 2:</strong> 4,000</p>
        <p><strong>Elf 3:</strong> <span className="green" >11,000</span></p>
        <p><strong>Elf 4:</strong> <span className="green" >24,000</span></p>
        <p><strong>Elf 5:</strong> <span className="green" >10,000</span></p>
      </div>

      <div className="part-2-solution">
        <h3>Solution:</h3>
        <p>Example:</p>
        <pre>
          <code className="TypeScript">
            {solvePart2(exampleInput)}
          </code>
        </pre>
        <p>Using my puzzle input:</p>
        <pre>
          <code className="TypeScript">
            {solvePart2(myInput)}
          </code>
        </pre>
        <div className="button">
          <button onClick={()=>toggleExpand("2")} id="button2">
            View Part 2 Code
          </button>
        </div>
      </div>

      <div className="explanation">
        <pre>
          <code className="TypeScript" id="solution2" style={{ display: "none" }}>
          <div dangerouslySetInnerHTML={{ __html: part2Code }} />
          </code>
        </pre>
      </div>

    </div>
  )
}

export default Day01