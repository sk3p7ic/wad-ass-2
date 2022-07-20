import {
  addEqualsKeyboardEventListener,
  addRestrictedKeyboardTypingListener,
  addButtonKeyEventListener,
} from "./util/keyboardEventHandler.js";
import { setupHistoryButton, updateHistory } from "./util/historyDisplay.js";

// Define constants for elements
const prevExprDisp = document.querySelector("#previous-expression");
const currExprDisp = document.querySelector("#current-expression");
const calcButtons = document.querySelectorAll("#calc-keys div button"); // Stores the buttons for all keys

/**
 * Evaluates a given expression and displays the output.
 * @param {string} expr The expression, in the form `A [operand] B` to evaluate.
 */
const _startEvaluation = (expr) => {
  // Get the values and operand to evaluate
  const exprArr = expr.split(" "); // Split the input into an array
  const value1 = exprArr[0];
  const operand = exprArr[1];
  const value2 = exprArr[2];
  let result; // Used to calculate the result and display it
  // Calculate and display the result
  switch (operand) {
    case "+":
      result = parseFloat(value1) + parseFloat(value2);
      currExprDisp.innerHTML = result;
      break;
    case "-":
      result = parseFloat(value1) - parseFloat(value2);
      currExprDisp.innerHTML = result;
      break;
    case "*":
      result = parseFloat(value1) * parseFloat(value2);
      currExprDisp.innerHTML = result;
      break;
    case "/":
      result = parseFloat(value1) / parseFloat(value2);
      currExprDisp.innerHTML = result;
      break;
    case "%":
      result = parseFloat(value1) % parseFloat(value2);
      currExprDisp.innerHTML = result;
      break;
    case "^":
      result = Math.pow(parseFloat(value1), parseFloat(value2));
      currExprDisp.innerHTML = result;
      break;
  }
  updateHistory(expr, result);
};

/**
 * Checks if a key matching a given button was pressed and toggles the `active` class on the relevant button if it was.
 * @param {string} char The character / key that was pressed
 */
const _toggleButtonActiveState = (char) => {
  if (char === "enter") char = "="; // Replace Enter key with equals key
  calcButtons.forEach((elem) => {
    if (elem.dataset.keyvalue === char) elem.classList.toggle("active");
  });
};

// Add the listeners for the keyboard events
addRestrictedKeyboardTypingListener(currExprDisp, prevExprDisp);
addEqualsKeyboardEventListener(currExprDisp, prevExprDisp, _startEvaluation);
addButtonKeyEventListener(_toggleButtonActiveState);
setupHistoryButton();
