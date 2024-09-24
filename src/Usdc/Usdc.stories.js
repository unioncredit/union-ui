import React from "react";

import { Text } from "../Text";
import { Heading } from "../Heading";
import { Usdc } from "./Usdc";

export default {
  component: Usdc,
  title: "Components/Usdc",
};

export const Default = () => (
  <>
    <Text>
      100
      <Usdc />
    </Text>
    <Text size="large">
      100
      <Usdc />
    </Text>
    <hr />
    <Text size="large" grey={200}>
      100
      <Usdc />
    </Text>
    <Text size="large" grey={300}>
      100
      <Usdc />
    </Text>
    <Text size="large" grey={400}>
      100
      <Usdc />
    </Text>
    <hr />
    <Heading size="primary">
      100
      <Usdc />
    </Heading>
    <Heading size="large">
      100
      <Usdc />
    </Heading>
    <Heading size="xlarge">
      100
      <Usdc />
    </Heading>
    <hr />
    <Heading size="xlarge" grey={200}>
      100
      <Usdc />
    </Heading>
    <Heading size="xlarge" grey={300}>
      100
      <Usdc />
    </Heading>
    <Heading size="xlarge" grey={400}>
      100
      <Usdc />
    </Heading>
  </>
);

export const Colors = () => (
  <>
    {["blue", "green", "white", "red", "grey", "black", "orange"].map(
      (color) => {
        return (
          <Text
            color={color}
            style={color === "white" && { backgroundColor: "black" }}
          >
            <Usdc />
            100
          </Text>
        );
      }
    )}
  </>
);
