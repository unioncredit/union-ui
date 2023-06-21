import React from "react";

import { InfoBanner } from "./InfoBanner";
import { Box } from "../Box";

import { WarningIcon } from "../Icons";

export default {
  component: InfoBanner,
  title: "Components/InfoBanner",
};

export const Default = () => (
  <>
    <Box m="10px">
      <InfoBanner
        align="left"
        icon={WarningIcon}
        variant="warning"
        label="Overdue payment of 1.82 DAI"
      />
    </Box>
    <Box m="10px">
      <InfoBanner
        align="left"
        icon={WarningIcon}
        iconPosition="right"
        variant="warning"
        label="Overdue payment of 1.82 DAI"
      />
    </Box>
    <Box m="10px">
      <InfoBanner
        justify="space-between"
        align="left"
        icon={WarningIcon}
        iconPosition="right"
        variant="warning"
        label="Overdue payment of 1.82 DAI"
      />
    </Box>
    {/*<Box m="10px">*/}
    {/*  <InfoBanner*/}
    {/*    align="center"*/}
    {/*    variant="info"*/}
    {/*    label="Overdue payment of 1.82 DAI"*/}
    {/*  />*/}
    {/*</Box>*/}
    {/*<Box m="10px">*/}
    {/*  <InfoBanner*/}
    {/*    align="right"*/}
    {/*    variant="success"*/}
    {/*    label="Overdue payment of 1.82 DAI"*/}
    {/*  />*/}
    {/*</Box>*/}
  </>
);
