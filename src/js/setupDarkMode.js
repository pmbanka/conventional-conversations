import ReactDOM from "react-dom";
import React from "react";
import { DarkModeSwitch } from "./components/DarkModeSwitch";
import { DARK_MODE_SELECTOR } from "./constants";

export const setupDarkModeSwitch = (el) => {
  ReactDOM.render(<DarkModeSwitch />, el);
};

export const setupDarkMode = () => {
  document.querySelectorAll(DARK_MODE_SELECTOR).forEach(setupDarkModeSwitch);
};
