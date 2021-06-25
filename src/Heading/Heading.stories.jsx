import React from "react";

import { Heading } from "./Heading";

export default {
  component: Heading,
  title: "Components/Heading",
};

export const All = () => (
  <>
    <Heading>The quick brown fox jumps over a lazy dog.</Heading>
    <Heading size="large">The quick brown fox jumps over a lazy dog.</Heading>
    <Heading size="xlarge">The quick brown fox jumps over a lazy dog.</Heading>
  </>
);

export const Levels = () => (
  <>
    {Array(6)
      .fill(0)
      .map((_, i) => (
        <Heading level={i + 1}>
          The quick brown fox jumps over a lazy dog.
        </Heading>
      ))}
  </>
);
