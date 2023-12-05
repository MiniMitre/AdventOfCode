// Function to fetch and display file content
async function readFileContent() {
  try {
    const response = await fetch("http://localhost:3000/readfile/1");
    if (!response.ok) {
      throw new Error("Failed to fetch file");
    }

    const fileContent = await response.text();
    console.log(fileContent);
  } catch (error) {
    console.error(error.message);
  }
}

// Call the function when the page is loaded
window.onload = readFileContent;

if (document.body.classList.contains("page-1")) {
  console.log(".");
}
