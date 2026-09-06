// 1. Array containing content items
const quotes = [
  "Simplicity is the soul of efficiency.",
  "Make it work, make it right, make it fast.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Fix the cause, not the symptom.",
  "Optimism is an occupational hazard of programming."
];

// 2. Select the list container element
const listContainer = document.getElementById("content-list");

// 3. Iterate using forEach to dynamically build and append list items
quotes.forEach((quote) => {
  const listItem = document.createElement("li");
  listItem.textContent = quote;
  listContainer.appendChild(listItem);
});
