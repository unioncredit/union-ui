import { Dot } from "./Dot";

export default {
  component: Dot,
  title: "components/Dot",
};

export const Default = () => {
  const colors = ["amber500", "blue200", "blue500"];

  return colors.map(color => (
    <Dot mr="4px" color={color} />
  ))
};

export const Hex = () => {
  const colors = ["#6366f1", "#14b8a6", "#0ea5e9"];

  return colors.map(color => (
    <Dot mr="4px" hex={color} />
  ))
};