import React from "react";

import { Alert } from "./Alert";
import { Box } from "../Box";

export default {
  component: Alert,
  title: "Components/Alert",
};

export const Default = () => (
  <>
    <Box m="10px">
      <Alert
        variant="warning"
        label="Overdue payment of 1.82 DAI"
        action={{ label: "Make payment" }}
      />
    </Box>
    <Box m="10px">
      <Alert
        variant="info"
        label="Overdue payment of 1.82 DAI"
        action={{ label: "Make payment" }}
      />
    </Box>
    <Box m="10px">
      <Alert
        variant="success"
        label="Overdue payment of 1.82 DAI"
        action={{ label: "Make payment" }}
      />
    </Box>
  </>
);
