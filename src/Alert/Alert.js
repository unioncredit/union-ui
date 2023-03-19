import "./Alert.scss";

import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { propsToStyles } from "../spacing";

export function Alert({
  label,
  variant,
  icon: Icon,
  align,
  ...props
}) {
  return (
    <div
      className={cn("Alert", {
        [`Alert--${variant}`]: variant,
        [`Alert--align-${align}`]: align,
      })}
      style={propsToStyles(props)}
    >
      {Icon && <Icon className="Alert__icon" />}
      <Text mb={0} size="small">{label}</Text>
    </div>
  );
}

Alert.propTypes = {
  variant: PropTypes.oneOf(["warning", "info", "success"]),
  icon: PropTypes.node,
  packed: PropTypes.bool,
  align: PropTypes.oneOf(["left", "center", "right"])
};

Alert.defaultProps = {
  variant: "warning",
  align: "left",
};
