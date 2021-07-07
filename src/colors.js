export const colors = {
  blue: "#3A64F0",
  green: "#2F9F63",
  white: "#ffffff",
  red: "#C84042",
  grey: "#726F7E",
  black: "#000000",
  orange: "#C77B00",
};

export const colorHex = (color) => {
  if (!Object.keys(colors).includes(color)) {
    throw Error("color not found");
  }
  return colors[color];
};
