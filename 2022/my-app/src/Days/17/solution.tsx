import React, { useState } from "react";
import "./solution.css";
import "../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css";
import { exampleInput } from "./example-input";
import { myInput } from "./input";
import { toggleExpand } from "../Functions/functions";

import hljs from "highlight.js";

const chamberWidth = 7;
const leftPadding = 2; // number of tiles to spawn away from the left hand side
const bottomPadding = 3;

const rockShapes: String[][] = [
  ["1111"],

  ["010", "111", "010"],

  ["001", "001", "111"],

  ["1", "1", "1", "1"],

  ["11", "11"],
];

const rockSpawnShapes = rockShapes.map((shape) => {
  // add leftPadding zeroes to the left of each line
  const leftPaddingString = "0".repeat(leftPadding);
  const paddedShape = [
    ...shape.map((line) => `${leftPaddingString}${line}`),
  ].map((line) => {
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
    let shapeString = "";
    for (const char of shape) {
      if (char === "0") {
        shapeString += ".";
      } else if (char === "1") {
        shapeString += "@";
      } else if (char === "2") {
        shapeString += "#";
      } else {
        shapeString += char;
      }
    }
    result.push(shapeString + "\n");
  }
  return result;
}

function printRockShapes(rockShape: string[]) {
  let gameplayField = convertRockShapes(rockShape.slice(0, 11));

  //Add | before each line
  gameplayField = gameplayField.map((line) => `|${line}`);

  //Add | after each line (but before \n)
  gameplayField = gameplayField.map((line) => line.replace("\n", "|\n"));

  // Add the bottom border of the chamber to the lines array
  gameplayField.push("+" + "-".repeat(chamberWidth) + "+");

  return gameplayField;
}

var part1Code = `const chamberWidth = 7
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
  const paddedShape = [...shape.map(line => \`\${leftPaddingString}\${line}\`)].map(line => {
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

//Do not run the calculation by default
let stop = true;
const rockStopNum = 2022;

const Day: React.FC = () => {

  let rockShapeNum: number = 0;
  const [gameField, setGameField] = useState<string[]>([]);
  let count: number = 0;
  let topOfRock: number = 0

  function useRockSimulation(inputString: string){
    React.useEffect(() => {
      const interval = setInterval(() => {
        if(!stop){
          spawnRock();
          dropRock(inputString);
        }  
      },);
      return () => clearInterval(interval);
    }, [inputString]);
  }

  function spawnRock(){
    setGameField((prevGameField) => {
      if(rockShapeNum === rockStopNum){
        stop = true;
        return prevGameField;
      }
      const newGameField = [...(rockSpawnShapes[rockShapeNum % 5]),
        ...prevGameField];
      newGameField.push();
      return newGameField;
    });
  }

  function dropRockOneLayer(inputArray: string[], lineIndex: number, collided: boolean): [string[], boolean]{
    let outputArray: string[] = inputArray.slice();
    while (lineIndex >= topOfRock) {
      // Split the string into an array of characters
      const fallingRockChars: string[] = inputArray[lineIndex].split('');
      let lineBelowChars: string[] = inputArray[lineIndex + 1].split('');
      //Keep the landed rocks where they are
      let outputLine: string[] = lineBelowChars.map(char => char === '2' ? '2' : '0');
        
      for (let i = 0; i < fallingRockChars.length; i++) {

        const fallingChar = fallingRockChars[i];
        const belowChar = lineBelowChars[i]
        if (fallingChar !== '1') {
          //No rock is falling
          continue
        }
        if (belowChar === '2') {
          //We are falling into an already existing rock
          collided = true;
          return [inputArray, collided];
        }
        //Drop the rock at this character
        outputLine[i] = '1';
      }
      const finalStr = outputLine.join('');
      outputArray[lineIndex + 1] = finalStr;
      lineIndex--
    }
    outputArray[topOfRock] = outputArray[topOfRock].replace(/1/g, '0');
    topOfRock++;
    return [outputArray,collided];
  }

  function blowRock(inputArray: string[], lineIndex: number, direction: string): string[]{
    let outputArray: string[] = inputArray.slice();

    while (lineIndex >= 0) {
      // Split the string into an array of characters
      let fallingRockChars: string[] = inputArray[lineIndex].split('');
      //Pre-fill the output with the landed rocks already added (as they cannot be move)
      let outputChars: string[] = fallingRockChars.map(char => char === '2' ? '2' : '0');
      for (let i = 0; i < fallingRockChars.length; i++) {
        if (direction === ">") {
          //We need to go from right to left
          const index = fallingRockChars.length - 1 - i;
          const fallRightChar = fallingRockChars[index];
          //Right most element in array
          if (fallRightChar === '1') {
            if (i === 0) {
              //We cannot move into the wall
              return inputArray
            }
            if (fallingRockChars[index + 1] === '2') {
              //We cannot move into a landed rock
              return inputArray
            }
            
            outputChars[index + 1] = '1';
          }
              
        } else {
          const fallLeftChar = fallingRockChars[i];
          //Left most element in array
          if (fallLeftChar === '1') {
            if (i === 0) {
              //We cannot move into the wall
              return inputArray
            }
            if (fallingRockChars[i - 1] === '2') {
              //We cannot move into a landed rock
              return inputArray
            }
            
            outputChars[i - 1] = '1';
          }
        }
      }
      outputArray[lineIndex] = outputChars.join('');
      lineIndex--
    }

    return outputArray
  }

  function dropRock(inputString: string) {
    topOfRock = 0;
    let collided: boolean = false
    setGameField((prevGameField) => {
      let updatedGameField: string[] = prevGameField.slice();
      //Find the bottom line of the current falling shape
      let lineIndex = 
      updatedGameField.length  - 
      updatedGameField
          .slice()
          .reverse()
          .findIndex(line => line.includes('1')) - 
        1;

      if(lineIndex === prevGameField.length){
        //We have finished
        return prevGameField;
      }
        
      while (!collided) {
        
        lineIndex = 
          updatedGameField.length  - 
          updatedGameField
              .slice()
              .reverse()
              .findIndex(line => line.includes('1')) - 
            1;

        const direction: string = inputString[count % inputString.length]
        const blowResult = blowRock(updatedGameField,lineIndex,direction);
        updatedGameField = blowResult;
        count++

        // We are at the bottom and cannot fall any further, stop the rock
        if(lineIndex === updatedGameField.length - 1){
          collided = true;
          continue
        }

        const dropResult = dropRockOneLayer(updatedGameField, lineIndex, collided);
        collided = dropResult[1];
        updatedGameField = dropResult[0];
        if(!collided && updatedGameField[0] === '0'.repeat(chamberWidth)){
          //delete top row if blank
          updatedGameField.splice(0, 1);
          topOfRock--;
        }
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
      return finishedGameField;
    });
  }

  useRockSimulation(myInput);
`;

//Add highlighting to code
part1Code = hljs.highlight(part1Code, { language: "TypeScript" }).value;
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

var part2Code = `const gradient = 1750;
const gradientHeight = 2781;
const remainderHeight = 1219;
const partTwoQuotient = Math.floor((1000000000000 - 3) / gradient);
const partTwoAnswer = gradientHeight * partTwoQuotient + remainderHeight + 13;
`;

//Add highlighting to code
part2Code = hljs.highlight(part2Code, { language: "TypeScript" }).value;
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

function getButtonById(id: string): HTMLElement | null {
  const button = document.getElementById(id);
  if (button === null) {
    console.error(`Button with id ${id} is null`);
  }

  return button;
}

function setButtonProperties(
  button: HTMLElement,
  innerHTML: string,
  addClass: string,
  removeClasses: string[]
) {
  button.innerHTML = innerHTML;

  button.classList.add(addClass);

  if (removeClasses) {
    removeClasses.forEach((className) => {
      button.classList.remove(className);
    });
  }
}

function setStartButton(button: HTMLElement) {
  setButtonProperties(button, "Start Simulation", "green", ["red"]);
}

function setStopButton(button: HTMLElement) {
  setButtonProperties(button, "Stop Simulation", "red", ["green"]);
}

function toggleSimulation() {
  const button = getButtonById("simulation");

  if (!button) return;

  button.innerHTML.includes("Start")
    ? setStopButton(button)
    : setStartButton(button);
  stop = !stop;
}

function disableButton() {
  const button = getButtonById("simulation");
  if (!button) return;

  setButtonProperties(button, "Complete!", "disabled", ["red"]);
}

const rockStopNum: number = 2022;
const gradient: number = 1750;
const gradientHeight: number = 2781;
const remainderHeight: number = 1219;
const partTwoQuotient: number = Math.floor((1000000000000 - 3) / gradient);
const partTwoAnswer: number =
  gradientHeight * partTwoQuotient + remainderHeight + 13;

//Do not run the calculation by default
let stop = true;
let rockShapeNum: number = 0;
let count: number = 0;
let topOfRock: number = 0;

const Day: React.FC = () => {
  function resetSimulation() {
    stop = true;
    rockShapeNum = 0;
    count = 0;
    topOfRock = 0;

    const button = getButtonById("simulation");
    if (!button) return;

    if (button.innerHTML.includes("Stop")) {
      setStartButton(button);
    } else if (button.innerHTML.includes("Complete!")) {
      setButtonProperties(button, "Start Simulation", "green", [
        "disabled",
        "red",
      ]);
    }

    setGameField([]);
  }

  const [gameField, setGameField] = useState<string[]>([]);

  function useRockSimulation(inputString: string) {
    React.useEffect(() => {
      const interval = setInterval(() => {
        if (!stop) {
          spawnRock();
          dropRock(inputString);
        }
      });
      return () => clearInterval(interval);
    }, [inputString]);
  }

  function spawnRock() {
    setGameField((prevGameField) => {
      if (rockShapeNum === rockStopNum) {
        disableButton();
        stop = true;
        return prevGameField;
      }
      const newGameField = [
        ...rockSpawnShapes[rockShapeNum % 5],
        ...prevGameField,
      ];
      newGameField.push();
      return newGameField;
    });
  }

  function dropRockOneLayer(
    inputArray: string[],
    lineIndex: number,
    collided: boolean
  ): [string[], boolean] {
    let outputArray: string[] = inputArray.slice();
    while (lineIndex >= topOfRock) {
      // Split the string into an array of characters
      const fallingRockChars: string[] = inputArray[lineIndex].split("");
      let lineBelowChars: string[] = inputArray[lineIndex + 1].split("");
      //Keep the landed rocks where they are
      let outputLine: string[] = lineBelowChars.map((char) =>
        char === "2" ? "2" : "0"
      );

      for (let i = 0; i < fallingRockChars.length; i++) {
        const fallingChar = fallingRockChars[i];
        const belowChar = lineBelowChars[i];
        if (fallingChar !== "1") {
          //No rock is falling
          continue;
        }
        if (belowChar === "2") {
          //We are falling into an already existing rock
          collided = true;
          return [inputArray, collided];
        }
        //Drop the rock at this character
        outputLine[i] = "1";
      }
      const finalStr = outputLine.join("");
      outputArray[lineIndex + 1] = finalStr;
      lineIndex--;
    }
    outputArray[topOfRock] = outputArray[topOfRock].replace(/1/g, "0");
    topOfRock++;
    return [outputArray, collided];
  }

  function blowRock(
    inputArray: string[],
    lineIndex: number,
    direction: string
  ): string[] {
    let outputArray: string[] = inputArray.slice();

    while (lineIndex >= 0) {
      // Split the string into an array of characters
      let fallingRockChars: string[] = inputArray[lineIndex].split("");
      //Pre-fill the output with the landed rocks already added (as they cannot be move)
      let outputChars: string[] = fallingRockChars.map((char) =>
        char === "2" ? "2" : "0"
      );
      for (let i = 0; i < fallingRockChars.length; i++) {
        if (direction === ">") {
          //We need to go from right to left
          const index = fallingRockChars.length - 1 - i;
          const fallRightChar = fallingRockChars[index];
          //Right most element in array
          if (fallRightChar === "1") {
            if (i === 0) {
              //We cannot move into the wall
              return inputArray;
            }
            if (fallingRockChars[index + 1] === "2") {
              //We cannot move into a landed rock
              return inputArray;
            }

            outputChars[index + 1] = "1";
          }
        } else {
          const fallLeftChar = fallingRockChars[i];
          //Left most element in array
          if (fallLeftChar === "1") {
            if (i === 0) {
              //We cannot move into the wall
              return inputArray;
            }
            if (fallingRockChars[i - 1] === "2") {
              //We cannot move into a landed rock
              return inputArray;
            }

            outputChars[i - 1] = "1";
          }
        }
      }
      outputArray[lineIndex] = outputChars.join("");
      lineIndex--;
    }

    return outputArray;
  }

  function dropRock(inputString: string) {
    topOfRock = 0;
    let collided: boolean = false;
    setGameField((prevGameField) => {
      let updatedGameField: string[] = prevGameField.slice();
      //Find the bottom line of the current falling shape
      let lineIndex =
        updatedGameField.length -
        updatedGameField
          .slice()
          .reverse()
          .findIndex((line) => line.includes("1")) -
        1;

      if (lineIndex === prevGameField.length) {
        //We have finished
        return prevGameField;
      }

      while (!collided) {
        lineIndex =
          updatedGameField.length -
          updatedGameField
            .slice()
            .reverse()
            .findIndex((line) => line.includes("1")) -
          1;

        const direction: string = inputString[count % inputString.length];
        const blowResult = blowRock(updatedGameField, lineIndex, direction);
        updatedGameField = blowResult;
        count++;

        // We are at the bottom and cannot fall any further, stop the rock
        if (lineIndex === updatedGameField.length - 1) {
          collided = true;
        } else {
          const dropResult = dropRockOneLayer(
            updatedGameField,
            lineIndex,
            collided
          );
          collided = dropResult[1];
          updatedGameField = dropResult[0];
          if (!collided && updatedGameField[0] === "0".repeat(chamberWidth)) {
            //delete top row if blank
            updatedGameField.splice(0, 1);
            topOfRock--;
          }
        }
      }

      // Create a new array with all 1's changed to 2's
      const finishedGameField = updatedGameField.map((line) => {
        // Split the string into an array of characters
        let chars = line.split("");
        // Transform the characters
        let transformedChars = chars.map((value) =>
          value === "1" ? "2" : value
        );
        // Join the transformed characters back into a single string
        return transformedChars.join("");
      });

      //The rock has finished falling, so set up next shape to spawn
      rockShapeNum = rockShapeNum + 1;
      return finishedGameField;
    });
  }

  useRockSimulation(myInput);

  return (
    <div className="container">
      <div className="iframe">
        <h1>Day 17:</h1>
        <iframe
          title="Day17"
          src="https://adventofcode.com/2022/day/17"></iframe>
        <p>
          From <a href="https://adventofcode.com">Advent Of Code</a>
        </p>
      </div>

      <div className="part">
        <h2>Part 1:</h2>
        <p>
          How many units tall will the tower of rocks be after 2022 rocks have
          stopped falling?
        </p>
      </div>

      <div className="input">
        <h3>Input:</h3>

        <pre>
          <code className="TypeScript limit-width-33">{exampleInput}</code>
        </pre>

        <div className="flex-center">
          <button
            onClick={toggleSimulation}
            className="green no-background outline"
            id="simulation">
            Start Simulation
          </button>
          <button
            onClick={resetSimulation}
            className="no-background"
            id="reset">
            Reset
          </button>
        </div>
      </div>

      <div className="part-1-calculation">
        <h3>Calculation:</h3>
        <div className="buttons"></div>

        <pre>
          <code className="TypeScript center calculation">
            {printRockShapes(gameField)}
          </code>
        </pre>
      </div>

      <div className="part-1-solution">
        <h3>Solution:</h3>
        <p>Example:</p>
        <pre>
          <code className="TypeScript">3068</code>
        </pre>
        <p>Using my puzzle input:</p>
        <pre>
          <code className="TypeScript">{gameField.length}</code>
        </pre>
        <div className="view-code-button">
          <button onClick={() => toggleExpand("1")} id="button1">
            View Part 1 Code
          </button>
        </div>
      </div>

      <div className="explanation">
        <pre>
          <code
            className="TypeScript code"
            id="solution1"
            style={{ display: "none" }}>
            <div dangerouslySetInnerHTML={{ __html: part1Code }} />
          </code>
        </pre>
      </div>

      <div className="part">
        <h2>Part 2:</h2>
        <p>
          How many units tall will the tower of rocks be after 1000000000000
          rocks have stopped falling?
        </p>
      </div>

      <div className="part-2-calculation">
        <h3>Calculation:</h3>
        <p>
          Using the values from part 1 sumulation. We see that the pattern of
          fallen rocks repeats every 1750 rocks (starting after rock #3)
        </p>
        <p>
          The height after 1750 * <i>n</i> + 3 rocks is:{" "}
          <i>
            a<sub>n</sub>
          </i>{" "}
          = 2781 * <i>n</i> + 13 (for <i>n</i> ≥ 1)
        </p>
        <p>
          So, all we need to do is calculate the quotient <i>q</i> and remainder{" "}
          <i>r</i> after dividing (1000000000000 - 3) by 1750
        </p>
        <p>
          <i>q</i> = 57142857
        </p>
        <p> r = 247</p>
        <p>
          Then we caclulate the height at 247: <i>h</i> = 1219
        </p>
        <p>
          So the answer is 2781 * <i>q</i> + <i>h</i> + 13
        </p>
      </div>

      <div className="part-2-solution">
        <h3>Solution:</h3>
        <p>Example:</p>
        <pre>
          <code className="TypeScript">{1514285714288}</code>
        </pre>
        <p>Using my puzzle input:</p>
        <pre>
          <code className="TypeScript">{partTwoAnswer}</code>
        </pre>
        <div className="view-code-button">
          <button onClick={() => toggleExpand("2")} id="button2">
            View Part 2 Code
          </button>
        </div>
      </div>

      <div className="explanation">
        <pre>
          <code
            className="TypeScript"
            id="solution2"
            style={{ display: "none" }}>
            <div dangerouslySetInnerHTML={{ __html: part2Code }} />
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Day;
