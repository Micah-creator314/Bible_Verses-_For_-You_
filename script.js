function fetchRandomVerse() {
  fetch('https://bible-api.com/verses/random')
    .then(response => response.json())
    .then(data => {
      const verseText = data.text;
      const verseRef = data.reference;

      document.getElementById("verse").textContent = `“${verseText}”`;
      document.querySelector(".reference").textContent = `— ${verseRef}`;
    })
    .catch(error => console.error('Error fetching verse:', error));
}

document.addEventListener("DOMContentLoaded", fetchRandomVerse);

function showAnotherVerse() {
  fetchRandomVerse();
}
