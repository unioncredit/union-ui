import React from "react";

import { ProgressBar } from "./ProgressBar";
import { Box } from "../Box";

import WireInfo from "../Icons/icons/wireInfo.svg";
import { CheckFilledIcon, PauseFilledIcon, PlayFilledIcon, WarningIcon } from "../Icons";

export default {
  component: ProgressBar,
  title: "Components/ProgressBar",
};

export const Default = () => (
  <>
    <Box mb="20px">
      <ProgressBar
        percentage={0}
        icon={WarningIcon}
        label="Deposit DAI to start earning"
      />
    </Box>
    <Box mb="20px">
      <ProgressBar
        percentage={56.3}
        icon={PlayFilledIcon}
        label="56.3% Earned"
      />
    </Box>
    <Box mb="20px">
      <ProgressBar
        percentage={58.4}
        icon={PauseFilledIcon}
        label="Paused · 58.4%"
        paused={true}
      />
    </Box>
    <Box mb="20px">
      <ProgressBar
        percentage={100}
        icon={CheckFilledIcon}
        label="Membership fee earned"
      />
    </Box>
  </>
);
