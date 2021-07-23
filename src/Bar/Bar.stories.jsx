import React from "react";

import { Bar } from "./Bar";
import { Box } from "../Box";

export default {
  component: Bar,
  title: "Components/Bar",
};

export const Default = () => (
  <>
    <Box mb="20px">
      <Bar percentage={50} label="50%" />
    </Box>
    <Box mb="20px">
      <Bar percentage={75} label="75%" size="large" />
    </Box>
    <Box mb="20px">
      <Bar percentage={80} label="80%" secondaryBar />
    </Box>
    <Box mb="20px">
      <Bar percentage={40} label="40%" size="large" secondaryBar />
    </Box>
    <Box mb="20px">
      <Bar percentage={70} label="70%" color="purple" size="large" />
    </Box>
    <Box mb="20px">
      <Bar percentage={30} label="30%" color="green" marker={40} size="large" />
    </Box>
    <Box mb="20px">
      <Bar
        percentage={20}
        label="20%"
        color="green"
        marker={40}
        markerLabel="40% Quorum"
        size="large"
      />
    </Box>
  </>
);
