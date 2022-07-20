const outputDisp = document.querySelector("#output");
const historyDiv = document.querySelector("#history");
const historyBtn = document.querySelector("#history-btn");

let showHistory = false;
let history = {};

const _renderHistory = () => {
  const itemsContainer = historyDiv.querySelector("#history-items");
  itemsContainer.innerHTML = ""; // Reset the contents of the container
  for (const [expression, result] of Object.entries(history)) {
    let btn = document.createElement("button");
    btn.onclick = () =>
      (document.querySelector("#current-expression").innerHTML = result);
    btn.classList.add(
      "btn",
      "btn-sm",
      "btn-light",
      "text-dark",
      "d-flex",
      "flex-row",
      "justify-content-between"
    );
    const exprPara = document.createElement("p");
    exprPara.innerHTML = expression;
    btn.appendChild(exprPara);
    const resPara = document.createElement("p");
    resPara.innerHTML = result;
    btn.appendChild(resPara);
    itemsContainer.appendChild(btn);
  }
};

const _toggleShowHistory = () => {
  showHistory = !showHistory; // Toggle the history
  const outputHeight = outputDisp.getBoundingClientRect().height;
  outputDisp.classList.toggle("d-none");
  historyBtn.classList.toggle("active");
  historyDiv.classList.toggle("d-none");
  if (showHistory) historyDiv.style.height = `${outputHeight}px`;
  _renderHistory();
};

export const setupHistoryButton = () => {
  if (!showHistory) historyDiv.classList.add("d-none");
  historyBtn.onclick = _toggleShowHistory;
};

export const updateHistory = (expression, result) => {
  history = { ...history, [expression]: result };
};
