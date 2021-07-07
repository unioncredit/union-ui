import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";
import { colorHex } from "../colors";

import "./text.scss";

export function Text({ children, size, className, color, ...props }) {
  return (
    <p
      className={cn("text", className, { [`text--${size}`]: size })}
      style={{
        ...propsToStyles(props),
        ...(color ? { color: colorHex(color) } : {}),
      }}
    >
      {children}
    </p>
  );
}

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["primary", "large"]),
};

Text.defaultProps = {
  size: "primary",
};
