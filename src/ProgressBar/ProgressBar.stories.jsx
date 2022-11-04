import React from "react";

import { ProgressBar } from "./ProgressBar";
import { Box } from "../Box";

import WireInfo from "../icons/wireInfo.svg";

export default {
  component: ProgressBar,
  title: "Components/ProgressBar",
};

export const Default = () => (
  <>
    <Box mb="20px">
      <ProgressBar percentage={0} />
    </Box>
    <Box mb="20px">
      <ProgressBar percentage={60} />
    </Box>
    <Box mb="20px">
      <ProgressBar
        percentage={100}
        completeText="Membership Fee Earned"
        completeIcon={WireInfo}
      />
    </Box>
  </>
);
