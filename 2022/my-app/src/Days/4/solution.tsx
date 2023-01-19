import React from "react";
import "./solution.css";
import "../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css";
import { exampleInput } from "./example-input";
import { myInput } from "./input";
import { toggleExpand } from "../Functions/functions";

import hljs from "highlight.js";

function solvePart1(input: string) {
  //Create an array with each line of the input
  let inputArray: string[] = input.split("\n");

  let fullyContans: number = 0;

  for (const pair of inputArray) {
    const [firstElf, secondElf] = pair.split(",");
    const firstElfArray = firstElf.split("-");
    const secondElfArray = secondElf.split("-");

    const firstElfNumberArray = firstElfArray.map((string) =>
      parseInt(string, 10)
    );
    const secondElfNumberArray = secondElfArray.map((string) =>
      parseInt(string, 10)
    );

    //Check second ∈ first
    if (
      firstElfNumberArray[0] <= secondElfNumberArray[0] &&
      firstElfNumberArray[1] >= secondElfNumberArray[1]
    ) {
      fullyContans++;

      //Check first ∈ second
    } else if (
      firstElfNumberArray[0] >= secondElfNumberArray[0] &&
      firstElfNumberArray[1] <= secondElfNumberArray[1]
    ) {
      fullyContans++;
    }
  }

  return fullyContans;
}
var part1Code = `//Create an array with each line of the input
let inputArray: string[] = input.split('\\n')

let fullyContans: number = 0;

for (const pair of inputArray) {
  const [firstElf, secondElf] = pair.split(',');
  const firstElfArray = firstElf.split('-');
  const secondElfArray = secondElf.split('-');
  
  const firstElfNumberArray = firstElfArray.map(string => parseInt(string, 10));
  const secondElfNumberArray = secondElfArray.map(string => parseInt(string, 10));

  //Check second ∈ first
  if ((firstElfNumberArray[0] <= secondElfNumberArray[0]) &&
    (firstElfNumberArray[1] >= secondElfNumberArray[1])) {
    fullyContans++;
    
  //Check first ∈ second
  } else if (firstElfNumberArray[0] >= secondElfNumberArray[0] &&
    firstElfNumberArray[1] <= secondElfNumberArray[1]) {
    fullyContans++;
  }
  
}

return fullyContans;`;

//Add highlighting to code
part1Code = hljs.highlight(part1Code, { language: "TypeScript" }).value;
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

function solvePart2(input: string) {
  //Create an array with each line of the input
  let inputArray: string[] = input.split("\n");

  let partiallyContains: number = 0;

  for (const pair of inputArray) {
    const [firstElf, secondElf] = pair.split(",");
    const firstElfArray = firstElf.split("-");
    const secondElfArray = secondElf.split("-");

    const firstElfNumberArray = firstElfArray.map((string) =>
      parseInt(string, 10)
    );
    const secondElfNumberArray = secondElfArray.map((string) =>
      parseInt(string, 10)
    );

    if (firstElfNumberArray[1] < secondElfNumberArray[0]) {
      continue;
    }

    if (firstElfNumberArray[0] > secondElfNumberArray[1]) {
      continue;
    }
    partiallyContains++;
  }

  return partiallyContains;
}

var part2Code = `function solvePart2(input: string){

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\\n')

  let partiallyContains: number = 0;

  for (const pair of inputArray) {
    const [firstElf, secondElf] = pair.split(',');
    const firstElfArray = firstElf.split('-');
    const secondElfArray = secondElf.split('-');
    
    const firstElfNumberArray = firstElfArray.map(string => parseInt(string, 10));
    const secondElfNumberArray = secondElfArray.map(string => parseInt(string, 10));

    if (firstElfNumberArray[1] < secondElfNumberArray[0]) {
      continue;
    }

    if (firstElfNumberArray[0] > secondElfNumberArray[1]) {
      continue;
    }
    partiallyContains++
    
  }

  return partiallyContains;

}`;

//Add highlighting to code
part2Code = hljs.highlight(part2Code, { language: "TypeScript" }).value;
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

const Day04: React.FC = () => {
  return (
    <div className="container">
      <div className="iframe">
        <h1>Day 4:</h1>
        <iframe title="Day" src="https://adventofcode.com/2022/day/4"></iframe>
        <p>
          From <a href="https://adventofcode.com">Advent Of Code</a>
        </p>
      </div>

      <div className="part">
        <h2>Part 1:</h2>
        <p>
          In how many assignment pairs does one range fully contain the other?
        </p>
      </div>

      <div className="input">
        <h3>Input:</h3>

        <pre>
          <code className="TypeScript limit-width">{exampleInput}</code>
        </pre>
      </div>

      <div className="part-1-calculation">
        <h3>Calculation:</h3>
        <p>
          First check if the second set is entirely contained within the first
        </p>
        <p>
          Then check if the first set is entirely contained within the second
        </p>
        <p>If either case is true, increment the counter.</p>
      </div>

      <div className="part-1-solution">
        <h3>Solution:</h3>
        <p>Example:</p>
        <pre>
          <code className="TypeScript">{solvePart1(exampleInput)}</code>
        </pre>
        <p>Using my puzzle input:</p>
        <pre>
          <code className="TypeScript">{solvePart1(myInput)}</code>
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
            className="TypeScript"
            id="solution1"
            style={{ display: "none" }}
          >
            <div dangerouslySetInnerHTML={{ __html: part1Code }} />
          </code>
        </pre>
      </div>

      <div className="part">
        <h2>Part 2:</h2>
        <p>In how many assignment pairs do the ranges overlap?</p>
      </div>

      <div className="input">
        <h3>Input:</h3>

        <pre>
          <code className="TypeScript limit-width">{exampleInput}</code>
        </pre>
      </div>

      <div className="part-2-calculation">
        <h3>Calculation:</h3>
        <p>
          If the first elf's values are strictly less than the second elf's
          values, there is no overlap.
        </p>
        <p>
          Similarly, if second elf's values are strictly less than the first
          elf's values, there is no overlap.
        </p>
        <p>Otherwise, there is an overlap, so increment the counter.</p>
      </div>

      <div className="part-2-solution">
        <h3>Solution:</h3>
        <p>Example:</p>
        <pre>
          <code className="TypeScript">{solvePart2(exampleInput)}</code>
        </pre>
        <p>Using my puzzle input:</p>
        <pre>
          <code className="TypeScript">{solvePart2(myInput)}</code>
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
            style={{ display: "none" }}
          >
            <div dangerouslySetInnerHTML={{ __html: part2Code }} />
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Day04;
