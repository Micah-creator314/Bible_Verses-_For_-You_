const verses = [
  {
    text: "Be still, and know that I am God.",
    ref: "Psalm 46:10"
  },
  {
    text: "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.",
    ref: "Jeremiah 29:11"
  },
  {
    text: "I can do all things through Christ who strengthens me.",
    ref: "Philippians 4:13"
  },
  {
    text: "The Lord is my shepherd; I shall not want.",
    ref: "Psalm 23:1"
  }
];

// Use the current date to choose a verse
const today = new Date();
const verseIndex = today.getDate() % verses.length; // Wrap around if more than 4 verses
const verse = verses[verseIndex];

document.getElementById("verse").textContent = `“${verse.text}”`;
document.querySelector(".reference").textContent = `— ${verse.ref}`;
