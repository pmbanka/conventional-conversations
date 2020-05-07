import React from "react";
import { Svg } from "./Svg";
import { useFetchJson } from "../hooks/useFetchJson";
import { GITLAB_HOST, GITLAB_GQL_API } from "../constants";

export const Stars = ({ projectPath }) => {
  const { data: response, error } = useFetchJson(GITLAB_GQL_API, {
    method: "POST",
    data: {
      query: `query project { project(fullPath: "${projectPath}") { starCount } }`,
    },
  });
  const href = `${GITLAB_HOST}/${projectPath}`;
  const count = response?.data?.project?.starCount || 0;

  if (error) {
    console.error("An error occurred while fetching the stars.", error);
  }

  return (
    <div className={["cc-stars", !response ? "invisible" : ""].join(" ")}>
      <a className="cc-stars-part bg-white z-10" href={href}>
        <Svg className="inline-block w-1em h-1em text-purple-700" name="star" />
      </a>
      <div className="cc-stars-part -ml-1 bg-gray-200">{count}</div>
    </div>
  );
};
