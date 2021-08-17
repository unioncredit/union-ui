import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";
import { colorHex } from "../colors";

import "./text.scss";

export function Text({
  align,
  children,
  size,
  className,
  color,
  grey,
  ...props
}) {
  return (
    <p
      className={cn("text", className, {
        [`text--${size}`]: size,
        [`text--${align}`]: align,
        [`text--grey${grey}`]: grey,
      })}
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
  align: PropTypes.oneOf(["center", "left", "right"]),
};

Text.defaultProps = {
  size: "primary",
};
