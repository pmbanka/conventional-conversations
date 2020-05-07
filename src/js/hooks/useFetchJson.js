import { useState, useEffect } from "react";

export const useFetchJson = (url, options = {}) => {
  const { method = "GET", data } = options;
  const [state, updateState] = useState({ isLoading: true });

  useEffect(() => {
    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      ...(data ? { body: JSON.stringify(data) } : {}),
    })
      .then((response) => response.json())
      .then(
        (data) => updateState({ data, isLoading: false }),
        (error) => updateState({ error, isLoading: false })
      );
  }, []);

  return state;
};
