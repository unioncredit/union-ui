import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Text } from "../Text";

import "./wallet.scss";

export function Wallet({ onClick, avatar, name, networkSrc }) {
  return (
    <Button variant="secondary" className="wallet" onClick={onClick}>
      {avatar || <Avatar />}
      <Text>{name}</Text>
      {networkSrc && (
        <span className="wallet__network">
          <Avatar src={networkSrc} />
        </span>
      )}
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
  avatar: PropTypes.node,
};
