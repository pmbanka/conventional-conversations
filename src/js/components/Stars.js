import React from "react";
import { Svg } from "./Svg";
import { useFetchJson } from "../hooks/useFetchJson";
import { GITLAB_HOST, GITLAB_GQL_API } from "../constants";

const SVG_CLASS = "inline-block w-1em h-1em text-purple-700 dark:text-purple-400";

export const Stars = ({ projectPath }) => {
  const { data: response, error } = useFetchJson(GITLAB_GQL_API, {
    method: "POST",
    data: {
      query: `query project { project(fullPath: "${projectPath}") { starCount } }`,
    },
  });
  const href = `${GITLAB_HOST}/${projectPath}`;
  const count = response?.data?.project?.starCount || 0;
  const shouldShow = Boolean(response);

  if (error) {
    console.error("An error occurred while fetching the stars.", error);
  }

  return (
    <div className={["cc-stars", !shouldShow ? "invisible" : ""].join(" ")}>
      <a className="cc-stars-part bg-white dark:bg-gray-900 z-10" href={href} aria-label="Star">
        <Svg className={["inline-block dark:hidden", SVG_CLASS].join(" ")} name="star" />
        <Svg className={["dark:inline-block hidden", SVG_CLASS].join(" ")} name="star-solid" />
      </a>
      <div
        className={[
          "cc-stars-part -ml-1 bg-gray-200 dark:bg-gray-700 transition-transform",
          !shouldShow ? "-translate-x-full" : "",
        ].join(" ")}
      >
        {count}
      </div>
    </div>
  );
};
