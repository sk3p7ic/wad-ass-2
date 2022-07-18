import {
  addEqualsKeyboardEventListener,
  addRestrictedKeyboardTypingListener,
} from "./util/keyboardEventHandler.js";

// Define constants for display elements
const prevExprDisp = document.querySelector("#previous-expression");
const currExprDisp = document.querySelector("#current-expression");

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
};

// Add the listeners for the keyboard events
addRestrictedKeyboardTypingListener(currExprDisp, prevExprDisp);
addEqualsKeyboardEventListener(currExprDisp, prevExprDisp, _startEvaluation);
