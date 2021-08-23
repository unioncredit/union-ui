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
      <Dai />
      100
    </Text>
    <Text size="large">
      <Dai />
      100
    </Text>
    <hr />
    <Text size="large" grey={200}>
      <Dai />
      100
    </Text>
    <Text size="large" grey={300}>
      <Dai />
      100
    </Text>
    <Text size="large" grey={400}>
      <Dai />
      100
    </Text>
    <hr />
    <Heading size="primary">
      <Dai />
      100
    </Heading>
    <Heading size="large">
      <Dai />
      100
    </Heading>
    <Heading size="xlarge">
      <Dai />
      100
    </Heading>
    <hr />
    <Heading size="xlarge" grey={200}>
      <Dai />
      100
    </Heading>
    <Heading size="xlarge" grey={300}>
      <Dai />
      100
    </Heading>
    <Heading size="xlarge" grey={400}>
      <Dai />
      100
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
