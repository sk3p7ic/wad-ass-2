/**
 * Simulates a keypress for a given key.
 * @param {string} keyValue The key that you want to simulate.
 */
const keySimulator = (keyValue) => {
  window.dispatchEvent(new KeyboardEvent("keydown", { key: keyValue }));
};

/**
 * Simulates / implements the plus/minus key for the calculator.
 */
const plusMinusKey = () => {
  const currExprDisp = document.querySelector("#current-expression");
  const currentContent = currExprDisp.innerHTML;
  currExprDisp.innerHTML = currentContent.includes("-")
    ? currentContent.substring(1)
    : `-${currentContent}`;
};
