const keySimulator = (keyValue) => {
  window.dispatchEvent(new KeyboardEvent("keydown", { key: keyValue }));
};

const plusMinusKey = () => {
  const currExprDisp = document.querySelector("#current-expression");
  const currentContent = currExprDisp.innerHTML;
  currExprDisp.innerHTML = currentContent.includes("-")
    ? currentContent.substring(1)
    : `-${currentContent}`;
};
