import React from "react";

import { Text } from "./Text";
import { Label } from "../Label";

export default {
  component: Text,
  title: "Components/Text",
};

export const All = () => (
  <>
    <Text>The quick brown fox jumps over a lazy dog.</Text>
    <Text size="large">The quick brown fox jumps over a lazy dog.</Text>
    <Label>Label: The quick brown fox jumps over a lazy dog.</Label>
    <Label size="small">
      Label: The quick brown fox jumps over a lazy dog.
    </Label>
  </>
);
