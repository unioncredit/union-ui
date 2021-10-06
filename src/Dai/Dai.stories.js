import React from "react";

import { Text } from "../Text";
import { Heading } from "../Heading";
import { Dai } from "./Dai";

export default {
  component: Dai,
  title: "Components/Dai",
};

export const Default = () => (
  <>
    <Text>
      100
      <Dai />
    </Text>
    <Text size="large">
      100
      <Dai />
    </Text>
    <hr />
    <Text size="large" grey={200}>
      100
      <Dai />
    </Text>
    <Text size="large" grey={300}>
      100
      <Dai />
    </Text>
    <Text size="large" grey={400}>
      100
      <Dai />
    </Text>
    <hr />
    <Heading size="primary">
      100
      <Dai />
    </Heading>
    <Heading size="large">
      100
      <Dai />
    </Heading>
    <Heading size="xlarge">
      100
      <Dai />
    </Heading>
    <hr />
    <Heading size="xlarge" grey={200}>
      100
      <Dai />
    </Heading>
    <Heading size="xlarge" grey={300}>
      100
      <Dai />
    </Heading>
    <Heading size="xlarge" grey={400}>
      100
      <Dai />
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
            <Dai />
            100
          </Text>
        );
      }
    )}
  </>
);
