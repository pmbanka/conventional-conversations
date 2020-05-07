import React from "react";
import { getSvg } from "../svgs";

export const Svg = ({ name, className }) => {
  const html = getSvg(name);

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    ></span>
  );
};
