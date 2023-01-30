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

  return inputArray.slice(0, 3);
}
var part1Code = `function solvePart2(input: string){

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\\n')

  return inputArray.slice(0,3);

}`;

//Add highlighting to code
part1Code = hljs.highlight(part1Code, { language: "TypeScript" }).value;
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

function solvePart2(input: string) {
  //Create an array with each line of the input
  let inputArray: string[] = input.split("\n");

  return inputArray.slice(0, 3);
}

var part2Code = `function solvePart2(input: string){

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\\n')

  return inputArray.slice(0,3);

}`;

//Add highlighting to code
part2Code = hljs.highlight(part2Code, { language: "TypeScript" }).value;
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

const Day: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>
          <a href="https://adventofcode.com/2022/day/0">Day 0</a>
        </h1>
      </div>

      <div className="part">
        <h2>Part 1:</h2>
        <p>...</p>
      </div>

      <div className="input">
        <h3>Input:</h3>

        <pre>
          <code className="TypeScript limit-width-third">{exampleInput}</code>
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
            style={{ display: "none" }}>
            <div dangerouslySetInnerHTML={{ __html: part1Code }} />
          </code>
        </pre>
      </div>

      <div className="part">
        <h2>Part 2:</h2>
        <p>...</p>
      </div>

      <div className="part-2-calculation">
        <h3>Calculation:</h3>
        <p>...</p>
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
            style={{ display: "none" }}>
            <div dangerouslySetInnerHTML={{ __html: part2Code }} />
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Day;
