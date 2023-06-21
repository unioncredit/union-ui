import React from "react";

import { Badge } from "./Badge";
import { Box } from "../Box";

export default {
  component: Badge,
  title: "Components/Badge",
};

const colors = ["blue", "purple", "green", "yellow", "red", "dark-grey", "grey", "white"];

export const Default = () => (
  <>
    {colors.map((color) => (
      <Box mb="20px">
        <Badge label={color} color={color} onClick={() => alert(color)} />
      </Box>
    ))}
  </>
);
