import {
  addEqualsKeyboardEventListener,
  addRestrictedKeyboardTypingListener,
} from "./util/keyboardEventHandler.js";

const prevExprDisp = document.querySelector("#previous-expression");
const currExprDisp = document.querySelector("#current-expression");

const _startEvaluation = (expr) => {
  console.log(expr);
  const exprArr = expr.split(" ");
  const value1 = exprArr[0];
  const operand = exprArr[1];
  const value2 = exprArr[2];
  console.log(value1, value2);
  let result;
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
  console.log(result);
};

addRestrictedKeyboardTypingListener(currExprDisp, prevExprDisp);
addEqualsKeyboardEventListener(currExprDisp, prevExprDisp, _startEvaluation);
