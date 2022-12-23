import React from "react";
import './solution.css';
import '../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css'
import { exampleInput } from './example-input';
import { myInput } from "./input";

import hljs from 'highlight.js'

class Rock {
  shape: string[];
  position: { x: number, y: number };
  direction: "left" | "right";
  falling: boolean;

  constructor(shape: string[], position: { x: number, y: number }, direction: "left" | "right", falling: boolean) {
    this.shape = shape;
    this.position = position;
    this.direction = direction;
    this.falling = falling;
  }

  move(game: Game) {
    // If the rock is not falling, don't do anything
    if (!this.falling) {
      console.log('Rock is not falling, returning');
      return;
    }
  
    // Move the rock one unit in the direction indicated by the direction property
    if (this.direction === "left") {
      this.position.x--;
    } else {
      this.position.x++;
    }
  
    console.log(`Rock moved to position: ${this.position.x}, ${this.position.y}`);
  
    // Check if the rock has moved into the walls or a stopped rock
    if (this.position.x < 0 || this.position.x + this.shape[0].length > game.width) {
      // If the rock has moved into the walls, move it back to the previous position
      if (this.direction === "left") {
        this.position.x++;
      } else {
        this.position.x--;
      }
  
      console.log(`Rock moved into wall, moved back to position: ${this.position.x}, ${this.position.y}`);
    } else {
      // Otherwise, check if the rock has moved into a stopped rock
      for (const otherRock of game.rocks) {
        if (otherRock !== this && this.collidesWith(otherRock)) {
          // If the rock has moved into a stopped rock, move it back to the previous position
          if (this.direction === "left") {
            this.position.x++;
          } else {
            this.position.x--;
          }
          console.log(`Rock moved into stopped rock, moved back to position: ${this.position.x}, ${this.position.y}`);
          break;
        }
      }
    }
  
    // Move the rock one unit down
    this.position.y++;
  
    console.log(`Rock moved down to position: ${this.position.x}, ${this.position.y}`);
  
    // Check if the rock has moved into the floor or a stopped rock
    if (this.position.y + this.shape.length > game.rocks.length) {
      // If the rock has moved into the floor, stop it from falling
      this.falling = false;
      console.log('Rock has moved into floor, stopped falling');
    } else {
      // Otherwise, check if the rock has moved into a stopped rock
      for (const otherRock of game.rocks) {
        if (otherRock !== this && this.collidesWith(otherRock)) {
          // If the rock has moved into a stopped rock, stop it from falling
          this.falling = false;
          console.log('Rock has moved into stopped rock, stopped falling');
          break;
        }
      }
    }
  }
  
  setDirection(jetDirection: "left" | "right") {
    this.direction = jetDirection;
    console.log(`Rock direction set to: ${this.direction}`);
  }
  

  // A helper method to check if this rock collides with another rock
  collidesWith(otherRock: Rock): boolean {
    // Check if the two rocks overlap horizontally
    if (this.position.x + this.shape[0].length > otherRock.position.x &&
        otherRock.position.x + otherRock.shape[0].length > this.position.x) {
      console.log('Rocks overlap horizontally');
      // If the two rocks overlap horizontally, check if they also overlap vertically
      if (this.position.y < otherRock.position.y + otherRock.shape.length &&
          otherRock.position.y < this.position.y + this.shape.length) {
        console.log('Rocks also overlap vertically');
        // If the two rocks overlap both horizontally and vertically, they are colliding
        return true;
      }
    }
    // If the two rocks do not overlap horizontally or vertically, they are not colliding
    console.log('Rocks do not overlap');
    return false;
  }
  
}

class Game {
  width: number;
  rockShapes: string[][];
  jetPattern: string;
  rocks: Rock[];

  constructor(width: number, rockShapes: string[][], jetPattern: string) {
    this.width = width;
    this.rockShapes = rockShapes;
    this.jetPattern = jetPattern;
    this.rocks = [];
  }

  addRock() {
    // Get the next shape in the rockShapes array
    const shape = this.rockShapes[this.rocks.length % this.rockShapes.length];
    // Calculate the position of the new rock
    const position = {
      x: 2,
      y: 3 - this.rocks.length
    };
    // Get the direction that the rock should be pushed by the jets of hot gas
    const direction = this.jetPattern[this.rocks.length % this.jetPattern.length] === ">" ? "right" : "left";
    console.log(`Adding new rock with shape: ${shape}, position: ${position}, direction: ${direction}`);
    // Create a new Rock object and add it to the rocks array
    this.rocks.push(new Rock(shape, position, direction, true));
  }
  
  moveRocks() {
    console.log(`moveRocks called: on ${this.rocks}`)
    // Iterate through the rocks array and call the move() method of each rock
    for (const rock of this.rocks) {
      rock.move(this);
    }
    // Filter the rocks array to only include rocks that are still falling
    this.rocks = this.rocks.filter(rock => rock.falling);
  }
  
  simulate() {
    console.log(`simulate called: on ${this.rocks}`)
    // Add a new rock if there are no falling rocks
    if (this.rocks.length === 0 || !this.rocks[this.rocks.length - 1].falling) {
      this.addRock();
    }
  
    // Move all the rocks
    this.moveRocks();
  }
  

    // A helper method to draw the current state of the game
  draw(): string {
    // Initialize an array to store the lines of the drawing
    const lines: string[] = [];
    console.log(`Drawing chamber with width: ${this.width}, height: ${this.rocks.length + 2}`);
    // Iterate through each row of the chamber
    for (let y = 0; y < this.rocks.length + 2; y++) {
      // Initialize a string to store the characters for this row
      let line = "|";
      // Iterate through each column of the chamber
      for (let x = 0; x < this.width; x++) {
        // Check if there is a rock at this position
        let rockFound = false;
        for (const rock of this.rocks) {
          if (rock.shape[y - rock.position.y][x - rock.position.x] === "#") {
            // If there is a rock at this position, add a "#" character to the line
            line += "#";
            rockFound = true;
            break;
          }
        }
        if (!rockFound) {
          // If there is no rock at this position, add a "." character to the line
          line += ".";
        }
      }
      line += "|";
      // Add the line to the lines array
      lines.push(line);
    }
    // Add the bottom border of the chamber to the lines array
    lines.push("+" + "-".repeat(this.width) + "+");
    console.log(`Finished drawing chamber: ${lines.join("\n")}`);
    // Return the lines array joined into a single string
    return lines.join("\n");
  }

}

const rockShapes = [ 
  ["####",
   ".#..",
   "###.",
   ".#.." ],

  ["..#",
   "..#",
  "###",],

  ["#",
   "#",
   "#",
   "#",],

  ["##",
   "##",]
];


function solvePart1(input: string){

  const game = new Game(7, rockShapes, input);

  game.simulate();
  
  return game.draw();

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
    solution.style.display = "flex";
  }
}

const Day: React.FC = () => {

  return(
    
    <div className="container">
      <div className="iframe">
        <h1>Question:</h1>
        <iframe title="Day" src="https://adventofcode.com/2022/"></iframe>
        <p>From <a href="https://adventofcode.com">Advent Of Code</a></p>
      </div>
      
      <div className="part">
        <h2>Part 1:</h2>
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

      <div className="part-1-calculation">
        <h3>Calculation:</h3>
        <p>...</p>
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

      <div className="part">
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
      </div>

    </div>
  )
}

export default Day