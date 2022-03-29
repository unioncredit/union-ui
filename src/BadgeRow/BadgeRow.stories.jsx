import React from "react";

import { BadgeRow } from "./BadgeRow";
import { Badge } from "../Badge";
import { Box } from "../Box";

export default {
  component: BadgeRow,
  title: "Components/BadgeRow",
};

const colors = ["blue", "purple", "green", "yellow", "red", "grey"];

export const Default = () => (
  <BadgeRow>
    {colors.map((color) => (
      <Badge label={color} color={color} />
    ))}
  </BadgeRow>
);
