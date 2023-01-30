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

  let prioritySum: number = 0;

  // iterate over rucksacks
  for (const rucksack of inputArray) {
    // find common letters
    const set1: Set<string> = new Set(rucksack.slice(0, rucksack.length / 2));
    const set2: Set<string> = new Set(rucksack.slice(rucksack.length / 2));
    const commonLetters: Set<string> = new Set(
      Array.from(set1).filter((x) => set2.has(x))
    );
    // add priority of common letter to sum
    for (const letter of commonLetters) {
      prioritySum +=
        letter === letter.toLowerCase()
          ? letter.charCodeAt(0) - "a".charCodeAt(0) + 1
          : letter.charCodeAt(0) - "A".charCodeAt(0) + 27;
    }
  }

  return prioritySum;
}

var part1Code = `function solvePart1(input: string){

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\\n')

  let prioritySum: number = 0;

  // iterate over rucksacks
  for (const rucksack of inputArray) {
    // find common letters
    const set1: Set<string> = new Set(rucksack.slice(0, rucksack.length / 2));
    const set2: Set<string> = new Set(rucksack.slice(rucksack.length / 2));
    const commonLetters: Set<string> = new Set(Array.from(set1).filter(x => set2.has(x)));
    // add priority of common letter to sum
    for (const letter of commonLetters) {
      prioritySum += (letter === letter.toLowerCase()) ?
        letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1 :
        letter.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
    }
  }

  return prioritySum

}`;

//Add highlighting to code
part1Code = hljs.highlight(part1Code, { language: "TypeScript" }).value;
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

function solvePart2(input: string) {
  // Create an array with each line of the input
  const inputArray = input.split("\n");

  let prioritySum = 0;

  // Iterate through the input array in groups of 3
  for (let i = 0; i < inputArray.length; i += 3) {
    const [set1, set2, set3] = inputArray.slice(i, i + 3);

    // Find the common letters between set1 and set2 and set3
    const commonLetters = new Set(
      [...set1].filter((x) => set2.includes(x) && set3.includes(x))
    );

    // Add the priority of each common letter to the sum
    for (const letter of commonLetters) {
      prioritySum +=
        letter.toLowerCase() === letter
          ? letter.charCodeAt(0) - "a".charCodeAt(0) + 1
          : letter.charCodeAt(0) - "A".charCodeAt(0) + 27;
    }
  }

  return prioritySum;
}

var part2Code = `function solvePart2(input: string) {
  // Create an array with each line of the input
  const inputArray = input.split("\\n");

  let prioritySum = 0;

  // Iterate through the input array in groups of 3
  for (let i = 0; i < inputArray.length; i += 3) {
    const [set1, set2, set3] = inputArray.slice(i, i + 3);

    // Find the common letters between set1 and set2 and set3
    const commonLetters = new Set(
      [...set1].filter(x => set2.includes(x) && set3.includes(x))
    );

    // Add the priority of each common letter to the sum
    for (const letter of commonLetters) {
      prioritySum += (letter.toLowerCase() === letter)
        ? letter.charCodeAt(0) - "a".charCodeAt(0) + 1
        : letter.charCodeAt(0) - "A".charCodeAt(0) + 27;
    }
  }

  return prioritySum;

}`;

//Add highlighting to code
part2Code = hljs.highlight(part2Code, { language: "TypeScript" }).value;
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

const Day01: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>
          <a href="https://adventofcode.com/2022/day/3">Day 3</a>
        </h1>
      </div>

      <div className="part">
        <h2>Part 1:</h2>
        <p>
          Find the item type that appears in both compartments of each rucksack.
          What is the sum of the priorities of those item types?
        </p>
      </div>

      <div className="input">
        <h3>Input:</h3>

        <pre>
          <code className="TypeScript limit-width-third">{exampleInput}</code>
        </pre>
      </div>

      <div className="part-1-calculation">
        <h3>Calculation:</h3>
        <p>
          p - <strong className="green">16</strong>
        </p>
        <p>
          L - <strong className="green">38</strong>
        </p>
        <p>
          P - <strong className="green">42</strong>
        </p>
        <p>
          v - <strong className="green">22</strong>
        </p>
        <p>
          t - <strong className="green">20</strong>
        </p>
        <p>
          s - <strong className="green">19</strong>
        </p>
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
        <p>
          Find the item type that corresponds to the badges of each three-Elf
          group. What is the sum of the priorities of those item types?
        </p>
      </div>

      <div className="part-2-calculation">
        <h3>Calculation:</h3>
        <p>
          r - <strong className="green">18</strong>
        </p>
        <p>
          Z - <strong className="green">52</strong>
        </p>
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

export default Day01;
