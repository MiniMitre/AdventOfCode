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

  const OPPONENT_HAND_SHAPES: { [key: string]: number } = {
    A: 1, // Rock
    B: 2, // Paper
    C: 3, // Scissors
  };

  const YOUR_HAND_SHAPES: { [key: string]: number } = {
    X: 1, // Rock
    Y: 2, // Paper
    Z: 3, // Scissors
  };

  const OUTCOME_SCORES: { [key: string]: number } = {
    win: 6,
    draw: 3,
    lose: 0,
  };

  function getTotalScore(inputArray: string[]): number {
    // Initialize the total score to 0
    let totalScore = 0;

    // Loop through the strategy guide and calculate the total score
    for (const line of inputArray) {
      // Split the line into two columns
      const [opponentShape, yourShape] = line.trim().split(" ");

      // Convert the opponent's hand shape to its corresponding score
      const opponentScore = OPPONENT_HAND_SHAPES[opponentShape];

      // Convert your hand shape to its corresponding score
      const yourScore = YOUR_HAND_SHAPES[yourShape];

      // Calculate the outcome of the round
      let outcome: string;
      if (opponentScore === yourScore) {
        outcome = "draw";
      } else if (yourScore - (opponentScore % 3) === 1) {
        outcome = "win";
      } else {
        outcome = "lose";
      }

      // Add the score for the round to the total score
      totalScore += yourScore + OUTCOME_SCORES[outcome];
    }

    // Return the total score
    return totalScore;
  }

  // Calculate the total score
  const result = getTotalScore(inputArray);
  return result;
}

var part1Code = `function solvePart1(input: string){

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\\n')

  const OPPONENT_HAND_SHAPES: { [key: string]: number } = {
    "A": 1,  // Rock
    "B": 2,  // Paper
    "C": 3   // Scissors
  };
  
  const YOUR_HAND_SHAPES: { [key: string]: number } = {
    "X": 1,  // Rock
    "Y": 2,  // Paper
    "Z": 3   // Scissors
  };
  
  const OUTCOME_SCORES: { [key: string]: number } = {
    "win": 6,
    "draw": 3,
    "lose": 0
  };
  
  function getTotalScore(inputArray: string[]): number {
    // Initialize the total score to 0
    let totalScore = 0;
    
    // Loop through the strategy guide and calculate the total score
    for (const line of inputArray) {
      // Split the line into two columns
      const [opponentShape, yourShape] = line.trim().split(" ");
      
      // Convert the opponent's hand shape to its corresponding score
      const opponentScore = OPPONENT_HAND_SHAPES[opponentShape];
  
      // Convert your hand shape to its corresponding score
      const yourScore = YOUR_HAND_SHAPES[yourShape];
      
      // Calculate the outcome of the round
      let outcome: string;
      if (opponentScore === yourScore) {
        outcome = "draw";
      } else if (yourScore - opponentScore % 3 === 1) {
        outcome = "win";
      } else {
        outcome = "lose";
      }
        
      // Add the score for the round to the total score
      totalScore += yourScore + OUTCOME_SCORES[outcome];
    }
    
    // Return the total score
    return totalScore;
  }
  
  // Calculate the total score
  const result = getTotalScore(inputArray);
  return result

}`;

//Add highlighting to code
part1Code = hljs.highlight(part1Code, { language: "TypeScript" }).value;
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

function solvePart2(input: string) {
  //Create an array with each line of the input
  let inputArray: string[] = input.split("\n");

  const HAND_SHAPES: { [key: string]: number } = {
    A: 1, // Rock
    B: 2, // Paper
    C: 3, // Scissors
  };

  const DESIRED_OUTCOMES: { [key: string]: number } = {
    X: 0, // Lose
    Y: 3, // Draw
    Z: 6, // Win
  };

  function getTotalScore(inputArray: string[]): number {
    // Initialize the total score to 0
    let totalScore = 0;

    // Loop through the input array and calculate the total score
    for (const line of inputArray) {
      // Split the line into two columns
      const [opponentShape, desiredOutcome] = line.trim().split(" ");
      // Convert the opponent's hand shape to its corresponding score
      const opponentScore = HAND_SHAPES[opponentShape];

      // Calculate the score for your hand shape (score ∈ {1,2,3})
      let yourScore: number;
      //We want to win, increase score by 1
      if (desiredOutcome === "Z") {
        yourScore = (opponentScore % 3) + 1;
        //We want to lose, increase score by 2
      } else if (desiredOutcome === "X") {
        yourScore = ((opponentScore + 1) % 3) + 1;
        //We want to draw, same score
      } else {
        yourScore = opponentScore;
      }

      // Add the score for the round to the total score
      totalScore += yourScore + DESIRED_OUTCOMES[desiredOutcome];
    }

    // Return the total score
    return totalScore;
  }

  // Calculate the total score
  const result = getTotalScore(inputArray);
  return result;
}

var part2Code = `function solvePart2(input: string){

  //Create an array with each line of the input
  let inputArray: string[] = input.split('\\n')
  
  const HAND_SHAPES: { [key: string]: number } = {
  "A": 1,  // Rock
  "B": 2,  // Paper
  "C": 3   // Scissors
};

const DESIRED_OUTCOMES: { [key: string]: number } = {
  "X": 0,  // Lose
  "Y": 3,  // Draw
  "Z": 6   // Win
};

function getTotalScore(inputArray: string[]): number {
  // Initialize the total score to 0
  let totalScore = 0;
  
  // Loop through the input array and calculate the total score
  for (const line of inputArray) {

    
    // Split the line into two columns
    const [opponentShape, desiredOutcome] = line.trim().split(" ");
    // Convert the opponent's hand shape to its corresponding score
    const opponentScore = HAND_SHAPES[opponentShape];

    // Calculate the score for your hand shape (score ∈ {1,2,3})
    let yourScore: number;
    //We want to win, increase score by 1
    if (desiredOutcome === "Z") {
      yourScore = opponentScore % 3 + 1;
    //We want to lose, increase score by 2
    } else if (desiredOutcome === "X") {
      yourScore = (opponentScore + 1) % 3 + 1
    //We want to draw, same score
    } else {
      yourScore = opponentScore;
    }
    
    // Add the score for the round to the total score
    totalScore += yourScore + DESIRED_OUTCOMES[desiredOutcome];
  }
  
  // Return the total score
  return totalScore;
}

// Calculate the total score
const result = getTotalScore(inputArray)
return result

}`;

//Add highlighting to code
part2Code = hljs.highlight(part2Code, { language: "TypeScript" }).value;
//Will need to use dangerouslySetInnerHTML but that is okay because I am not allowing user input strings

const Day01: React.FC = () => {
  return (
    <div className="container">
      <div className="iframe">
        <h1>Day 2:</h1>
        <iframe title="Day2" src="https://adventofcode.com/2022/day/2"></iframe>
        <p>
          From <a href="https://adventofcode.com">Advent Of Code</a>
        </p>
      </div>

      <div className="part">
        <h2>Part 1:</h2>
        <p>
          What would your total score be if everything goes exactly according to
          your strategy guide?
        </p>
      </div>

      <div className="input">
        <h3>Input:</h3>

        <pre>
          <code className="TypeScript limit-width-33">{exampleInput}</code>
        </pre>
      </div>

      <div className="part-1-calculation">
        <h3>Calculation:</h3>
        <p>
          <strong>1{`)`}</strong> Paper beats Rock
        </p>
        <p>
          2 + 6 = <strong className="green">8</strong>
        </p>
        <p>
          <strong>2{`)`}</strong> Rock loses to Paper
        </p>
        <p>
          1 + 0 = <strong className="green">1</strong>
        </p>
        <p>
          <strong>3{`)`}</strong> Scissors draw
        </p>
        <p>
          3 + 3 = <strong className="green">6</strong>
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
          Following the Elf's instructions for the second column, what would
          your total score be if everything goes exactly according to your
          strategy guide?
        </p>
      </div>

      <div className="part-2-calculation">
        <h3>Calculation:</h3>
        <p>
          <strong>1{`)`}</strong> Rock draw
        </p>
        <p>
          1 + 3 = <strong className="green">4</strong>
        </p>
        <p>
          <strong>2{`)`}</strong> Rock loses to Paper
        </p>
        <p>
          1 + 0 = <strong className="green">1</strong>
        </p>
        <p>
          <strong>3{`)`}</strong> Rock bests Scissors
        </p>
        <p>
          1 + 6 = <strong className="green">7</strong>
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
