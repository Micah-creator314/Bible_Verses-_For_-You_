const bibleVerses = [
  "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. – Jeremiah 29:11",
  "I can do all things through him who strengthens me. – Philippians 4:13",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. – John 3:16",
  "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. – Galatians 5:22-23"
];

function getBibleVerse() {
  const randomIndex = Math.floor(Math.random() * bibleVerses.length);
  const randomVerse = bibleVerses[randomIndex];
  document.getElementById("quote").innerText = randomVerse;
}
