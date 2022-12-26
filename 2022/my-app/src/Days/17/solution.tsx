import React, {useState} from "react";
import './solution.css';
import '../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css'
import { exampleInput } from './example-input';
import { myInput } from "./input";

import hljs from 'highlight.js'
import { finished } from "stream";

const chamberWidth = 7
const leftPadding = 2; // number of tiles to spawn away from the left hand side
const bottomPadding = 3;

const rockShapes: String[][] = [ 
  ["1111"],

  ["010",
   "111",
   "010" ],

  ["001",
   "001",
   "111",],

  ["1",
   "1",
   "1",
   "1",],

  ["11",
   "11",]
];

const rockSpawnShapes = rockShapes.map(shape => {
  // add leftPadding zeroes to the left of each line
  const leftPaddingString = "0".repeat(leftPadding);
  const paddedShape = [...shape.map(line => `${leftPaddingString}${line}`)].map(line => {
    // pad the line with zeroes until it is chamberWidth characters wide
    while (line.length < chamberWidth) {
      line += "0";
    }
    return line;
  });

  // add three lines of zeroes to the bottom of the shape
  for (let i = 0; i < bottomPadding; i++) {
    paddedShape.push("0".repeat(chamberWidth));
  }

  return paddedShape;
});

function convertRockShapes(rockShapes: string[]): string[] {
  const result: string[] = [];
  for (const shape of rockShapes) {
    let shapeString = '';
    for (const char of shape) {

      if (char === '0') {
        shapeString += '.';
      } else {
        shapeString += char;
      }
    }
    result.push(shapeString + '\n');
  }
  return result;
}


function printRockShapes (rockShape: string[]) {
  
  let gameplayField =  convertRockShapes(rockShape);

  //Add | before each line
  gameplayField = gameplayField.map(line => `|${line}`);

  //Add | after each line (but before \n)
  gameplayField = gameplayField.map(line => line.replace('\n', '|\n'));

  // Add the bottom border of the chamber to the lines array
  gameplayField.push( "+" + "-".repeat(chamberWidth) + "+");

  return gameplayField

}

function solvePart1(input: string){

  return input;

}

var part1Code = 
`function solvePart2(input: string){

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\\n')

  return inputArray

}`

//Add highlighting to code
part1Code = hljs.highlight(part1Code,{language: 'TypeScript'}).value
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

function solvePart2(input: string){

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\n')

  return inputArray

}

var part2Code = 
`function solvePart2(input: string){

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\\n')

  return inputArray

}`

//Add highlighting to code
part2Code = hljs.highlight(part1Code,{language: 'TypeScript'}).value
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

function toggleExpand (part : string) {

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
    solution.style.display = "flex";
  }
}

function toggleSimulation(){
  const buttonId = "simulation";
  const button = document.getElementById(buttonId)

  if (button === null){
    console.error("ButtonId: " + buttonId + " is null")
    return
  }
  if(button.innerHTML.includes("Start")){
    button.innerHTML = "Stop Simulation";
    button.classList.add("red");
    button.classList.remove("green")
  }else{
    button.innerHTML = "Start Simulation";
    button.classList.remove("red");
    button.classList.add("green")
  }
  stop = !stop;
}

//Do not run the calculation by default
let stop = true;

const Day: React.FC = () => {

  const waitTime = 1000;
  let rockShapeNum = 0;
  const [gameField, setGameField] = useState<string[]>([]);

  function useRockSimulation(){
    React.useEffect(() => {
      const interval = setInterval(() => {

        if(!stop){
          spawnRock();
          setTimeout(() => {
            dropRock();
          }, waitTime);
        }  
       
      }, 2*waitTime);
      return () => clearInterval(interval);
    }, []);
  }

  function spawnRock(){
    setGameField((prevGameField) => {
      const newGameField = [...(rockSpawnShapes[rockShapeNum % 5]),
        ...prevGameField];
      newGameField.push();
      return newGameField;
    });
  }

  function dropRock(){
    let collided: boolean = false
    let count : number = 0;
    setGameField((prevGameField) => {
      let updatedGameField: string[] = prevGameField;
      //Find the bottom line of the current falling shape
      let lineIndex = 
      updatedGameField.length  - 
      updatedGameField
          .slice()
          .reverse()
          .findIndex(line => line.includes('1')) - 
        1;
        
      while(!collided && !stop){

        // We are at the bottom and cannot fall any further, stop the rock
        if(lineIndex === updatedGameField.length - 1){
          collided = true;
        }

        count = count + 1
        // replaces the line below with the current line
        updatedGameField[lineIndex + 1] = updatedGameField[lineIndex];
        updatedGameField.splice(lineIndex,1)

      }

      // Create a new array with all 1's changed to 2's
      const finishedGameField = updatedGameField.map(line => {
        // Split the string into an array of characters
        let chars = line.split('');
        // Transform the characters
        let transformedChars = chars.map(value => (value === '1' ? '2' : value));
        // Join the transformed characters back into a single string
        return transformedChars.join('');
      });

      //The rock has finished falling, so set up next shape to spawn
      rockShapeNum = rockShapeNum + 1
      finishedGameField.push();
      return finishedGameField;
    });
    //Move all 1's down a line
    //Repeat moving all 1's down a line until the end of the array
    //If there was a collision with any non zero element of the array, cancel all movements and return 'collided'
  }

  useRockSimulation();

  return(
    
    <div className="container">
      <div className="iframe">
        <h1>Question:</h1>
        <iframe title="Day17" src="https://adventofcode.com/2022/day/17"></iframe>
        <p>From <a href="https://adventofcode.com">Advent Of Code</a></p>
      </div>
      
      <div className="part">
        <h2>Part 1:</h2>
        <p>How many units tall will the tower of rocks be after 2022 rocks have stopped falling?</p>
      </div>

      <div className="input">

        <h3>Input:</h3>

        <pre>
          <code className="TypeScript">
            {exampleInput}
          </code>
        </pre>

      </div>

      <div className="part-1-calculation">
        <h3>Calculation:</h3>
        <div className="buttons">
          <button
            onClick={toggleSimulation}
            className="green no-background"
            id = "simulation"
          >Start Simulation</button>
        </div>
        <pre>
          <code className="TypeScript center max-height-300px">
            {printRockShapes(gameField)}
          </code>
        </pre>
      </div>

      <div className="part-1-solution">
      <h3>Solution:</h3>
        <p>Example:</p>
        <pre>
          <code className="TypeScript">
            .
          </code>
        </pre>
        <p>Using my puzzle input:</p>
        <pre>
          <code className="TypeScript">
            {//solvePart1(myInput)
            }
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

      {/* <div className="part">
        <h2>Part 2:</h2>
        <p>...</p>
      </div>

      <div className="input">

        <h3>Input:</h3>

        <pre>
          <code className="TypeScript">
            {exampleInput}
          </code>
        </pre>

      </div>

      <div className="part-2-calculation">
        <h3>Calculation:</h3>
        <p>...</p>
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
      </div> */}

    </div>
  )
}

export default Day