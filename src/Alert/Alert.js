import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { Button } from "../Button";
import { propsToStyles } from "../spacing";

import "./alert.scss";

export function Alert({ label, action, size, variant, ...props }) {
  return (
    <div
      className={cn("alert", {
        [`alert--${variant}`]: variant,
        [`alert--${size}`]: size,
      })}
      style={propsToStyles(props)}
    >
      <Text mb={0}>{label}</Text>
      {action && (
        <div className="alert__action">
          <Button {...action} variant="secondary" mr="16px" />
        </div>
      )}
    </div>
  );
}

Alert.propTypes = {
  size: PropTypes.oneOf(["default", "small"]),
  variant: PropTypes.oneOf(["warning", "info", "success"]),
};

Alert.defaultProps = {
  size: "default",
  variant: "warning",
};
