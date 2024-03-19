import React from "react";
import PropTypes from "prop-types";

import { IconBadge } from "../IconBadge";
import {
  ArbitrumIcon,
  DaiIcon,
  EthereumIcon,
  GoerliIcon,
  OptimismIcon,
  UnionLineIcon,
  UsdcIcon,
} from "../Icons";

export const TokenBadge = ({ token, ...props }) => {
  const tokenProps = {
    arbitrum: {
      size: "large",
      iconSize: "large",
      icon: ArbitrumIcon,
      variant: "filled",
      backgroundColor: "white",
      borderColor: "#E7E5E4",
    },
    goerli: {
      size: "large",
      iconSize: "large",
      icon: GoerliIcon,
      variant: "filled",
      backgroundColor: "white",
      borderColor: "#E7E5E4",
    },
    mainnet: {
      size: "large",
      iconSize: "large",
      icon: EthereumIcon,
      variant: "filled",
      backgroundColor: "white",
      borderColor: "#E7E5E4",
    },
    optimism: {
      size: "large",
      iconSize: "large",
      icon: OptimismIcon,
      variant: "filled",
      backgroundColor: "white",
      borderColor: "#E7E5E4",
    },
    union: {
      size: "large",
      iconSize: "large",
      icon: UnionLineIcon,
      variant: "filled",
      color: "white",
      backgroundColor: "#292524",
    },
    dai: {
      size: "large",
      iconSize: "fill",
      icon: DaiIcon,
    },
    usdc: {
      size: "large",
      iconSize: "fill",
      icon: UsdcIcon,
    },
  }[token];

  return <IconBadge {...tokenProps} {...props} />;
};

TokenBadge.propTypes = {
  token: PropTypes.oneOf([
    "arbitrum",
    "goerli",
    "mainnet",
    "optimism",
    "union",
    "dai",
    "usdc",
  ]),
};
