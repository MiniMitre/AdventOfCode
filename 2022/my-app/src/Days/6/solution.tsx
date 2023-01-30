import React from "react";
import "./solution.css";
import "../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css";
import { exampleInput } from "./example-input";
import { myInput } from "./input";
import { toggleExpand } from "../Functions/functions";

import hljs from "highlight.js";

function solvePart1(input: string) {
  // initialize the marker string, position counter, and marker length
  let marker: string = "";
  let position: number = 0;
  const markerLength: number = 4;

  // iterate over the characters in the datastream buffer
  for (const ch of input) {
    // append the character to the marker string
    marker += ch;
    // increment the position counter
    position++;

    // if the length of the marker string is greater than the marker length, remove the first character
    if (marker.length > markerLength) {
      marker = marker.slice(1);
    }

    // if the length of the marker string is the marker length, check if all the characters are different
    if (marker.length === markerLength) {
      // use a set to check if all the characters are different
      if (new Set(marker).size === markerLength) {
        // We are done!
        break;
      }
    }
  }

  return position;
}

var part1Code = `function solvePart1(input: string){

  // initialize the marker string, position counter, and marker length
  let marker: string = "";
  let position: number = 0;
  const markerLength: number = 4;

  // iterate over the characters in the datastream buffer
  for (const ch of input) {
      // append the character to the marker string
      marker += ch;
      // increment the position counter
      position++;

      // if the length of the marker string is greater than the marker length, remove the first character
      if (marker.length > markerLength) {
          marker = marker.slice(1);
      }

      // if the length of the marker string is the marker length, check if all the characters are different
      if (marker.length === markerLength) {
          // use a set to check if all the characters are different
          if (new Set(marker).size === markerLength) {
              // We are done!
              break;
          }
      }
  }

  return position;

}`;

//Add highlighting to code
part1Code = hljs.highlight(part1Code, { language: "TypeScript" }).value;
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

function solvePart2(input: string) {
  // initialize the marker string, position counter, and marker length
  let marker: string = "";
  let position: number = 0;
  const markerLength: number = 14;

  // iterate over the characters in the datastream buffer
  for (const ch of input) {
    // append the character to the marker string
    marker += ch;
    // increment the position counter
    position++;

    // if the length of the marker string is greater than the marker length, remove the first character
    if (marker.length > markerLength) {
      marker = marker.slice(1);
    }

    // if the length of the marker string is the marker length, check if all the characters are different
    if (marker.length === markerLength) {
      // use a set to check if all the characters are different
      if (new Set(marker).size === markerLength) {
        // We are done!
        break;
      }
    }
  }

  return position;
}

var part2Code = `function solvePart2(input: string){

  // initialize the marker string, position counter, and marker length
  let marker: string = "";
  let position: number = 0;
  const markerLength: number = 14;

  // iterate over the characters in the datastream buffer
  for (const ch of input) {
      // append the character to the marker string
      marker += ch;
      // increment the position counter
      position++;

      // if the length of the marker string is greater than the marker length, remove the first character
      if (marker.length > markerLength) {
          marker = marker.slice(1);
      }

      // if the length of the marker string is the marker length, check if all the characters are different
      if (marker.length === markerLength) {
          // use a set to check if all the characters are different
          if (new Set(marker).size === markerLength) {
              // We are done!
              break;
          }
      }
  }

  return position;

}`;

//Add highlighting to code
part2Code = hljs.highlight(part2Code, { language: "TypeScript" }).value;
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

const Day06: React.FC = () => {
  return (
    <div className="container">
      <div className="iframe">
        <h1>Day 6:</h1>
        <iframe title="Day" src="https://adventofcode.com/2022/day/6"></iframe>
      </div>

      <div className="part">
        <h2>Part 1:</h2>
        <p>
          How many characters need to be processed before the first
          start-of-packet marker is detected?
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
        <pre className="no-space">
          <span className="red">mjq</span>
          <span className="green">jpqm</span>gbl...
        </pre>
        <pre className="no-space grey">1234567</pre>
        <p>4 unique characters at position 7 in string.</p>
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
          How many characters need to be processed before the first
          start-of-message marker is detected?
        </p>
      </div>

      <div className="part-2-calculation">
        <h3>Calculation:</h3>
        <pre className="no-space limit-width-half">
          <span className="red">mjqjpq</span>
          <span className="green">mgbljsphdztnvjfqwrcgsmlb</span>
          <br></br>
          <span className="grey">123456789...................19</span>
        </pre>
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

export default Day06;
