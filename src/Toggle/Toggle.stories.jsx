import React from "react";
import { Box } from "../Box";

import { Toggle } from "./Toggle";

export default {
  component: Toggle,
  title: "Components/Toggle",
};

export const Default = () => (
  <>
    <Box mb="20px">
      <Toggle />
    </Box>
    <Box mb="20px">
      <Toggle label="Enable contract spending" />
    </Box>
  </>
);
