import { addRestrictedKeyboardTypingListener } from "./util/keyboardEventHandler.js";

const prevExprDisp = document.querySelector("#previous-expression");
const currExprDisp = document.querySelector("#current-expression");

addRestrictedKeyboardTypingListener(currExprDisp, prevExprDisp);
