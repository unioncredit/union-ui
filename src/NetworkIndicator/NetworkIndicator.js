import React from "react";
import cn from "classnames";

import { Text } from "../Text";
import { Box } from "../Box";

import "./network-indicator.scss";

const config = {
  1: { label: "Mainnet" },
  137: { label: "Polygon" },
  42: { label: "Kovan" },
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
      <Text as="label" size="small" m={0}>
        {config[chainId]?.label || "unknown"}
      </Text>
    </Box>
  );
}
