import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { Button } from "../Button";
import { propsToStyles } from "../spacing";

import "./alert.scss";

export function Alert({
  packed,
  label,
  action,
  size,
  variant,
  icon,
  ...props
}) {
  return (
    <div
      className={cn("alert", {
        [`alert--${variant}`]: variant,
        [`alert--${size}`]: size,
        "alert--packed": packed,
      })}
      style={propsToStyles(props)}
    >
      {icon && <div className="alert__icon">{icon}</div>}
      <Text mb={0}>{label}</Text>
      {action && (
        <div className="alert__action">
          <Button {...action} variant="secondary" />
        </div>
      )}
    </div>
  );
}

Alert.propTypes = {
  size: PropTypes.oneOf(["default", "small"]),
  variant: PropTypes.oneOf(["warning", "info", "success"]),
  icon: PropTypes.node,
  packed: PropTypes.bool,
};

Alert.defaultProps = {
  size: "default",
  variant: "warning",
};
