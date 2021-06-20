import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export const DarkModeSwitch = () => {
  const darkMode = useDarkMode();

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.checked;

    if (value) {
      darkMode.enable();
    } else {
      darkMode.disable();
    }
  };

  return (
    <div>
      <label className="cc-dark-mode-switch">
        <input
          type="checkbox"
          checked={darkMode.value}
          onChange={handleInputChange}
        />
        <span className="cc-dark-mode-slider cc-dark-mode-round"></span>
      </label>
    </div>
  );
};
