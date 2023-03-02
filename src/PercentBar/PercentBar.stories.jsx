import React from "react";

import { PercentBar } from "./PercentBar";
import { Box } from "../Box";

export default {
  component: PercentBar,
  title: "Components/PercentBar",
};

export const Percentages = () => {
  const percentages = [0, 25, 50, 75, 100];

  return percentages.map(percentage => (
    <Box mb="20px">
      <PercentBar
        percentage={percentage}
        label={`${percentage}%`}
      />
    </Box>
  ));
};

export const Markers = () => {
  const positions = [25, 50, 75];

  return positions.map(position => (
    <Box mb="20px">
      <PercentBar
        percentage={10}
        label="10%"
        marker={position}
      />
    </Box>
  ));
};

export const MarkerLabels = () => {
  const positions = [25, 50, 75];

  return positions.map(position => (
    <Box mb="20px">
      <PercentBar
        percentage={10}
        label="10%"
        marker={position}
        markerLabel={`${position}% label`}
      />
    </Box>
  ));
}