const _blankValue = "0";
const _allowedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const _operatorKeys = ["+", "-", "*", "/", "%", "^"];

const _standardKeydownHandler = (key, display) => {
  const currentContent = display.innerHTML;
  if (
    _allowedKeys.includes(key.key) ||
    (key.key === "." && !currentContent.includes("."))
  ) {
    display.innerHTML =
      currentContent != "0" ? `${currentContent}${key.key}` : `${key.key}`;
  } else if (key.key.toLowerCase() === "c") {
    display.innerHTML = _blankValue;
  }
};

const _operatorKeydownHandler = (key, prevDisplay, currDisplay) => {
  if (_operatorKeys.includes(key.key)) {
    prevDisplay.innerHTML = `${currDisplay.innerHTML} ${key.key}`;
    currDisplay.innerHTML = _blankValue;
  } else if (key.key.toLowerCase() === "c") {
    prevDisplay.innerHTML = _blankValue;
  }
};

export const addRestrictedKeyboardTypingListener = (
  currentDisplay,
  prevDisplay
) => {
  window.addEventListener("keydown", (key) =>
    _standardKeydownHandler(key, currentDisplay)
  );
  window.addEventListener("keydown", (key) =>
    _operatorKeydownHandler(key, prevDisplay, currentDisplay)
  );
};