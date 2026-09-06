const container = document.getElementById("box-container");
const horizontalBtn = document.getElementById("horizontal-btn");
const verticalBtn = document.getElementById("vertical-btn");

horizontalBtn.addEventListener("click", () => {
  container.classList.remove("column");
  container.classList.add("row");
});

verticalBtn.addEventListener("click", () => {
  container.classList.remove("row");
  container.classList.add("column");
});
