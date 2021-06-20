import { setupDarkMode } from "./setupDarkMode";
import { setupStars } from "./setupStars";

const wrap = (fn) =>
  new Promise((resolve) => {
    resolve(fn());
  });

const wrapAndMapErrors = (fn) =>
  wrap(fn).then(
    (value) => ({ value }),
    (error) => ({ error })
  );

const wrapAndLogErrors = (fn) =>
  wrapAndMapErrors(fn).then((result) => {
    if (result.error) {
      console.error(result.error);
    }

    return result;
  });

const run = (...fns) => Promise.all(fns.map(wrapAndLogErrors));

const main = () => run(setupDarkMode, setupStars);

document.addEventListener("DOMContentLoaded", main);
