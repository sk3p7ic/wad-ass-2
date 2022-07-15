const keySimulator = (keyValue) => {
  window.dispatchEvent(new KeyboardEvent("keydown", { key: keyValue }));
};
