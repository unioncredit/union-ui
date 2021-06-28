import React from "react";
import { Box } from "../Box";

import { Input } from "./Input";

export default {
  component: Input,
  title: "Components/Input",
};

export const Inputs = () => (
  <>
    <Box mb="20px">
      <Input placeholder="Placeholder" />
    </Box>
    <Box mb="20px">
      <Input placeholder="Placeholder" disabled />
    </Box>
    <Box mb="20px">
      <Input label="Input label" placeholder="Placeholder" />
    </Box>
    <Box mb="20px">
      <Input
        label="Input label"
        caption="382.91 DAI Available"
        placeholder="Placeholder"
      />
    </Box>
  </>
);
