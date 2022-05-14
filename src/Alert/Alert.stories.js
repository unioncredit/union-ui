import React from "react";

import { Alert } from "./Alert";
import { Box } from "../Box";

import WireInfo from "../icons/wireInfo.svg";
import WireCheck from "../icons/wireCheck.svg";

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

export const Small = () => (
  <>
    <Box m="10px">
      <Alert
        size="small"
        variant="warning"
        label="Overdue payment of 1.82 DAI"
        icon={<WireInfo />}
      />
    </Box>
    <Box m="10px">
      <Alert
        size="small"
        icon={<WireInfo />}
        variant="info"
        label="Overdue payment of 1.82 DAI"
      />
    </Box>
    <Box m="10px">
      <Alert
        size="small"
        variant="success"
        icon={<WireCheck />}
        label="Overdue payment of 1.82 DAI"
      />
    </Box>

    <Box m="10px">
      <Alert
        packed
        size="small"
        variant="warning"
        label="Overdue payment of 1.82 DAI"
        icon={<WireInfo />}
      />
    </Box>
    <Box m="10px">
      <Alert
        packed
        size="small"
        icon={<WireInfo />}
        variant="info"
        label="Overdue payment of 1.82 DAI"
      />
    </Box>
    <Box m="10px">
      <Alert
        packed
        size="small"
        variant="success"
        icon={<WireCheck />}
        label="Overdue payment of 1.82 DAI"
      />
    </Box>
  </>
);
