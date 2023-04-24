const poemContainer = document.getElementById('poem');
const generateButton = document.getElementById('generate');

async function generatePoem() {
  try {
    const response = await fetch('https://poetrydb.org/title/Ozymandias/lines.json');
    const data = await response.json();
    const poem = data[0];
    poemContainer.innerHTML = `
      <h2>${poem.title}</h2>
      <p>${poem.lines.join("<br>")}</p>
      <p>By ${poem.author}</p>
    `;
  } catch (error) {
    console.error(error);
    poemContainer.innerHTML = '<p>Failed to generate poem.</p>';
  }
}

generateButton.addEventListener('click', generatePoem);