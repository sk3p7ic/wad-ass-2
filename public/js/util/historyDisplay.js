const outputDisp = document.querySelector("#output");
const historyDiv = document.querySelector("#history");
const historyBtn = document.querySelector("#history-btn");

let showHistory = false;
let history = {};

const _toggleShowHistory = () => {
  showHistory = !showHistory; // Toggle the history
  const outputHeight = outputDisp.getBoundingClientRect().height;
  outputDisp.classList.toggle("d-none");
  historyDiv.classList.toggle("d-none");
  if (showHistory) historyDiv.style.height = `${outputHeight}px`;
};

export const setupHistoryButton = () => {
  if (!showHistory) historyDiv.classList.add("d-none");
  historyBtn.onclick = _toggleShowHistory;
};
