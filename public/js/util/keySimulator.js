/**
 * Simulates a keypress for a given key.
 * @param {string} keyValue The key that you want to simulate.
 */
const _keySimulator = (keyValue) => {
  if (keyValue === "+/-") _plusMinusKey();
  else window.dispatchEvent(new KeyboardEvent("keydown", { key: keyValue }));
};

/**
 * Simulates / implements the plus/minus key for the calculator.
 */
const _plusMinusKey = () => {
  const currExprDisp = document.querySelector("#current-expression");
  const currentContent = currExprDisp.innerHTML;
  currExprDisp.innerHTML = currentContent.includes("-")
    ? currentContent.substring(1)
    : `-${currentContent}`;
};

/**
 * Adds onclick bindings to the given button keys.
 * @param {NodeListOf<Element>} keys The button keys to add bindings for
 */
export const setupKeySimulator = (keys) => {
  keys.forEach(
    (key) =>
      (key.onclick = () => {
        _keySimulator(key.dataset.keyvalue);
        key.classList.remove("active"); // Ensure that the active class is not stuck on element
      })
  );
};
