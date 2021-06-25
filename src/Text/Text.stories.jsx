import React from "react";

import { Text } from "./Text";

export default {
  component: Text,
  title: "Components/Text",
};

export const All = () => (
  <>
    <Text>The quick brown fox jumps over a lazy dog.</Text>
    <Text size="large">The quick brown fox jumps over a lazy dog.</Text>
  </>
);
