// Function to fetch and display file content
async function readFileContent(filename) {
  try {
    const response = await fetch(`http://localhost:3000/readfile/${filename}`);
    if (!response.ok) {
      throw new Error("Failed to fetch file");
    }

    const fileContent = await response.text();
    return fileContent;
  } catch (error) {
    console.error(error.message);
  }
}

async function loadInputs(day) {
  const exampleInput = await readFileContent(`${day}-example`);
  const myInput = await readFileContent(`${day}`);

  return [exampleInput, myInput];
}

if (document.body.classList.length > 1) {
  throw console.error("Multiple classes added to body");
}

const classPrefix = "page-";
const dayString = document.body.classList[0];
const dayNumber = Number(dayString.substring(classPrefix.length));

// Load the text of each input as a multi line string
loadInputs(dayNumber)
  .then(([exampleInput, myInput]) => {
    // Dynamically import the solving logic for the specified day
    import(`./solutions/day-${dayNumber}.js`)
      .then((solutionModule) => {
        // Call the solve function from the imported module
        solutionModule.solve(exampleInput, myInput);
      })
      .catch((importError) => {
        console.error("Error importing solution:", importError.message);
      });
  })
  .catch((error) => {
    // Handle any errors that occurred during the process
    console.error("Error:", error.message);
  });
