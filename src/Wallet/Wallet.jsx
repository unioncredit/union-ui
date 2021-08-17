import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Text } from "../Text";

import "./wallet.scss";

export function Wallet({
  onClick,
  avatar,
  indicator,
  ellipse,
  indicatorWarning,
  name,
}) {
  return (
    <Button variant="secondary" className="wallet" onClick={onClick}>
      <span className={cn("ellipse", { "ellipse--hidden": !ellipse })}>
        <span
          className={cn("wallet__transaction-indicator", {
            "wallet__transaction-indicator--warning": indicatorWarning,
          })}
        >
          {indicator}
        </span>
      </span>
      <Text>{name}</Text>
      {avatar || <Avatar />}
    </Button>
  );
}

Wallet.defaultProps = {
  indicator: 0,
  indicatorWarning: false,
  ellipse: false,
};

Wallet.propTypes = {
  name: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string,
  indicator: PropTypes.number,
  indicatorWarning: PropTypes.bool,
  avatar: PropTypes.node,
};
