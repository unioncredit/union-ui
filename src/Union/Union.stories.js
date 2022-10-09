import React from "react";

import { Text } from "../Text";
import { Heading } from "../Heading";
import { Union } from "./Union";

export default {
  component: Union,
  title: "Components/Union",
};

export const Default = () => (
  <>
    <Text>
      100
      <Union />
    </Text>
    <Text size="large">
      100
      <Union />
    </Text>
    <hr />
    <Text size="large" grey={200}>
      100
      <Union />
    </Text>
    <Text size="large" grey={300}>
      100
      <Union />
    </Text>
    <Text size="large" grey={400}>
      100
      <Union />
    </Text>
    <hr />
    <Heading size="primary">
      100
      <Union />
    </Heading>
    <Heading size="large">
      100
      <Union />
    </Heading>
    <Heading size="xlarge">
      100
      <Union />
    </Heading>
    <hr />
    <Heading size="xlarge" grey={200}>
      100
      <Union />
    </Heading>
    <Heading size="xlarge" grey={300}>
      100
      <Union />
    </Heading>
    <Heading size="xlarge" grey={400}>
      100
      <Union />
    </Heading>
  </>
);
