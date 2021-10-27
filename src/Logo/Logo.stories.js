import React from "react";

import { Logo } from "./Logo";
import { Box } from "../Box";

export default {
  component: Logo,
  title: "Components/Logo",
};

export const Default = () => (
  <>
    <Box mb="24px">
      <Logo width="80px" />
    </Box>
    <Box>
      <Logo width="80px" withText />
    </Box>
  </>
);
