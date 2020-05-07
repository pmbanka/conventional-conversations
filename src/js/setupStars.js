import ReactDOM from "react-dom";
import React from "react";
import { Stars } from "./components/Stars";
import { STARS_SELECTOR } from "./constants";

export const setupStar = (el) => {
  const { projectPath } = el.dataset;

  if (!projectPath) {
    return;
  }

  ReactDOM.render(<Stars projectPath={projectPath} />, el);
};

export const setupStars = () => {
  document.querySelectorAll(STARS_SELECTOR).forEach(setupStar);
};
