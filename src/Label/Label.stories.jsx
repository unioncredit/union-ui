import React from "react";

import { Label } from "./Label";

export default {
  component: Label,
  title: "Components/Label",
};

export const All = () => (
  <>
    <Label size="small">The quick brown fox jumps over a lazy dog.</Label>
    <br />
    <Label>The quick brown fox jumps over a lazy dog.</Label>
  </>
);

export const Weights = () => (
  <>
    <Label weight="regular" grey={700}>
      The quick brown fox jumps over a lazy dog.
    </Label>
    <br />
    <Label weight="medium" grey={700}>
      The quick brown fox jumps over a lazy dog.
    </Label>
  </>
);

export const Greys = () => (
  <>
    {Array(7)
      .fill(100)
      .map((n, i) => (
        <>
          <Label grey={n * (i + 1)}>
            The quick brown fox jumps over a lazy dog.
          </Label>
          <br />
        </>
      ))}
  </>
);

export const Colors = () => (
  <>
    {["blue", "green", "white", "red", "grey", "black", "orange"].map(
      (color) => {
        return (
          <>
            <Label
              color={color}
              style={color === "white" && { backgroundColor: "black" }}
            >
              The quick brown fox jumps over a lazy dog
            </Label>
            <br />
          </>
        );
      }
    )}
  </>
);
