import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

import "./skeleton.scss";

export function Skeleton({ variant, size, ...props }) {
  return (
    <div
      className={cn("skeleton", {
        [`skeleton--${variant}`]: variant,
        [`skeleton--${size}`]: size,
      })}
      style={propsToStyles(props)}
    ></div>
  );
}

Skeleton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

Skeleton.defaultProps = {
  size: "medium",
  variant: "primary",
};
