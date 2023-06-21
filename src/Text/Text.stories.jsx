import React from "react";

import { Text } from "./Text";
import { Box } from "../Box";

export default {
  component: Text,
  title: "Components/Text",
};

export const All = () => (
  <>
    <Box mb="30px" direction="vertical">{Weights()}</Box>
    <Box mb="30px" direction="vertical">{Greys()}</Box>
    <Box mb="30px" direction="vertical">{Colors()}</Box>
  </>
);

export const Weights = () => {
  const weights = ["light", "regular", "medium", "bold", "black"];

  return weights.map((weight) => (
    <Text weight={weight} grey={700}>
      The quick brown fox jumps over a lazy dog.
    </Text>
  ));
};

export const Greys = () => (
  <>
    {Array(7)
      .fill(100)
      .map((n, i) => (
        <Text grey={n * (i + 1)}>
          The quick brown fox jumps over a lazy dog.
        </Text>
      ))}
  </>
);

export const Colors = () => (
  <>
    {[
      "blue50",
      "blue100",
      "blue200",
      "blue300",
      "blue400",
      "blue500",
      "blue600",
      "blue700",
      "green100",
      "green200",
      "green300",
      "green500",
      "green600",
      "red50",
      "red100",
      "red200",
      "red400",
      "red500",
      "red600",
      "purple100",
      "purple600",
      "amber100",
      "amber600",
    ].map((color) => {
      return (
        <Text
          color={color}
          style={color === "white" && { backgroundColor: "black" }}
        >
          The quick brown fox jumps over a lazy dog
        </Text>
      );
    })}
  </>
);
