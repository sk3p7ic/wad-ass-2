import {
  addEqualsKeyboardEventListener,
  addRestrictedKeyboardTypingListener,
} from "./util/keyboardEventHandler.js";

const prevExprDisp = document.querySelector("#previous-expression");
const currExprDisp = document.querySelector("#current-expression");

const _startEvaluation = (expr) => {
  console.log(expr);
};

addRestrictedKeyboardTypingListener(currExprDisp, prevExprDisp);
addEqualsKeyboardEventListener(currExprDisp, prevExprDisp, _startEvaluation);
