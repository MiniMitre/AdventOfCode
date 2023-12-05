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
  const myInput = await readFileContent(`day`);
}
