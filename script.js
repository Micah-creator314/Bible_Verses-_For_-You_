const bibleVerses = [
  "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. – Jeremiah 29:11",
  "I can do all things through him who strengthens me. – Philippians 4:13",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. – John 3:16",
  "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. – Galatians 5:22-23"
  "Be strong and courageous. Do not be afraid... – Joshua 1:9",
  "Cast all your anxiety on him because he cares for you. – 1 Peter 5:7",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "Trust in the Lord with all your heart... – Proverbs 3:5-6",
  "Come to me, all you who are weary and burdened, and I will give you rest. – Matthew 11:28",
  "And we know that in all things God works for the good... – Romans 8:28",
  "Even though I walk through the valley of the shadow of death... – Psalm 23:4",
  "The name of the Lord is a strong tower... – Proverbs 18:10",
  "Do not grieve, for the joy of the Lord is your strength. – Nehemiah 8:10",
  "The Lord will fight for you; you need only to be still. – Exodus 14:14"
];

const today = new Date();
const verseIndex = today.getDate() % verses.length;
const verse = verses[verseIndex];

document.getElementById("verse").textContent = `“${verse.text}”`;
document.querySelector(".reference").textContent = `— ${verse.ref}`;
