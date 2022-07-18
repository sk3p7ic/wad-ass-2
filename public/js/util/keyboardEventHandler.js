const _blankValue = "0"; // The default value to display when the screen is cleared
const _allowedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; // Valid basic inputs
const _operatorKeys = ["+", "-", "*", "/", "%", "^"]; // Valid operand inputs

/**
 * Handles KeyboardEvents for numbers.
 * @param {KeyboardEvent} key The event for a key press.
 * @param {Element} display The display for the user's currently-typed text.
 */
const _standardKeydownHandler = (key, display) => {
  const currentContent = display.innerHTML; // The content currently displayed to the user
  if (
    _allowedKeys.includes(key.key) ||
    (key.key === "." && !currentContent.includes("."))
  ) {
    // If the user enters a number or hits the decimal key and there is not already a decimal
    display.innerHTML =
      currentContent != "0" ? `${currentContent}${key.key}` : `${key.key}`;
  } else if (key.key === "Backspace") {
    // If the user attempts to delete the last-entered character
    const currentContent = display.innerHTML;
    var newContent = currentContent.substr(0, currentContent.length - 1);
    if (newContent.length == 0) {
      newContent = _blankValue;
    }
    display.innerHTML = newContent;
  }
};

/**
 * Handles KeyboardEvents for operators.
 * @param {KeyboardEvent} key The event for a key press.
 * @param {Element} prevDisplay The display for the user's last-entered expression.
 * @param {Element} currDisplay The display for the user's currently-typed text.
 */
const _operatorKeydownHandler = (key, prevDisplay, currDisplay) => {
  if (_operatorKeys.includes(key.key)) {
    // If the user entered an operator
    // Check if the user is attempting to add a negative sign
    if (currDisplay.innerHTML === _blankValue && key.key === "-") {
      currDisplay.innerHTML = "-";
    } else {
      prevDisplay.innerHTML = `${currDisplay.innerHTML} ${key.key}`;
      currDisplay.innerHTML = _blankValue;
    }
  }
};

/**
 * Handles the KeyboardEvent for clearing the screen when the clear key, '`c`', is pressed.
 * @param {KeyboardEvent} key The event for a key press.
 * @param {Element} prevDisplay The display for the user's last-entered expression.
 * @param {Element} currDisplay The display for the user's currently-typed text.
 */
const _clearScreenKeydownHandler = (key, prevDisplay, currDisplay) => {
  if (key.key.toLowerCase() === "c") {
    prevDisplay.innerHTML = _blankValue;
    currDisplay.innerHTML = _blankValue;
  }
};

/**
 * Sets up the event listeners for KeyboardEvents to handle the user entering numbers, decimals, operators, and clearing the screen.
 * @param {Element} currentDisplay The display for the user's currently-typed text.
 * @param {Element} prevDisplay The display for the user's last-entered expression.
 */
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
  window.addEventListener("keydown", (key) =>
    _clearScreenKeydownHandler(key, prevDisplay, currentDisplay)
  );
};

/**
 * Sets up the event listeners for KeyboardEvents when the user hits `Enter` or `=`.
 * @param {Element} currDisplay The display for the user's currently-typed text.
 * @param {Element} prevDisplay The display for the user's last-entered expression.
 * @param {(string) => void} callback A callback function that takes in an expression of the form `A [operand] B` called when the user hits `Enter` or `=`.
 */
export const addEqualsKeyboardEventListener = (
  currDisplay,
  prevDisplay,
  callback
) => {
  window.addEventListener("keydown", (key) => {
    // If the user is attempting to get an answer and both displays are not blank
    if (
      (key.key === "=" || key.key === "Enter") &&
      prevDisplay.innerHTML != _blankValue &&
      currDisplay.innerHTML != _blankValue
    ) {
      const expr = `${prevDisplay.innerHTML} ${currDisplay.innerHTML}`; // Get the expression
      // Clear the displays
      currDisplay.innerHTML = _blankValue;
      prevDisplay.innerHTML = _blankValue;
      callback(expr); // Calculate and display the answer
    }
  });
};
