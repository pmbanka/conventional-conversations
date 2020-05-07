export const getSvg = (name) => {
  const template = document.getElementById(`svg-${name}`);

  return template?.innerHTML;
};
