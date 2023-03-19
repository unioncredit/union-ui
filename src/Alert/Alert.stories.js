import React from "react";

import { Alert } from "./Alert";
import { Box } from "../Box";

import { WarningIcon } from "../Icons";

export default {
  component: Alert,
  title: "Components/Alert",
};

export const Default = () => (
  <>
    <Box m="10px">
      <Alert
        align="left"
        icon={WarningIcon}
        variant="warning"
        label="Overdue payment of 1.82 DAI"
      />
    </Box>
    <Box m="10px">
      <Alert
        align="center"
        variant="info"
        label="Overdue payment of 1.82 DAI"
      />
    </Box>
    <Box m="10px">
      <Alert
        align="right"
        variant="success"
        label="Overdue payment of 1.82 DAI"
      />
    </Box>
  </>
);
