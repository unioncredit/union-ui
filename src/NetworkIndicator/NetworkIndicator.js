import React from "react";
import cn from "classnames";

import { Box } from "../Box";
import { Label } from "../Label";

import "./network-indicator.scss";

const config = {
  1: { label: "Mainnet" },
  137: { label: "Polygon" },
};

export function NetworkIndicator({ chainId, ...props }) {
  return (
    <Box
      className="network-indicator"
      align="center"
      justify="center"
      {...props}
    >
      <div
        className={cn("network-indicator__indicator", {
          [`network-indicator__indicator--${chainId}`]: !isNaN(chainId),
        })}
      />{" "}
      <Label size="small" m={0}>
        {config[chainId]?.label || "unknown"}
      </Label>
    </Box>
  );
}
