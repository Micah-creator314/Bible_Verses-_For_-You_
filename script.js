const verses = [
  {
    text: "I can do all things through Christ who strengthens me.",
    ref: "Philippians 4:13"
  },
  {
    text: "Trust in the Lord with all your heart and lean not on your own understanding.",
    ref: "Proverbs 3:5"
  },
  {
    text: "Be still, and know that I am God.",
    ref: "Psalm 46:10"
  }
];

const random = verses[Math.floor(Math.random() * verses.length)];
document.getElementById("verse").textContent = `“${random.text}”`;
document.querySelector(".reference").textContent = `— ${random.ref}`;
