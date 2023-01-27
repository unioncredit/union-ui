import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Text } from "../Text";

import "./Wallet.scss";

export function Wallet({ onClick, avatar, name, networkSrc }) {
  return (
    <Button color="secondary" variant="light" className="wallet" onClick={onClick}>
      {avatar || <Avatar size={24} />}
      <Text grey={600} weight="medium">{name}</Text>
      {networkSrc && (
        <span className="wallet__network">
          <Avatar src={networkSrc} size={24} />
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
