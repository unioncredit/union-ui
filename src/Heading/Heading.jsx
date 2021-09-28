import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

import "./heading.scss";

export function Heading({
  level,
  size,
  children,
  className,
  grey,
  weight,
  color,
  ...props
}) {
  return React.createElement(
    `h${level}`,
    {
      className: cn(className, "heading", {
        [`heading--${size}`]: size,
        [`heading--grey${grey}`]: grey,
        [`heading--weight-${weight}`]: weight,
        [`heading--${color}`]: color,
      }),
      style: propsToStyles(props),
      ...props,
    },
    children
  );
}

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  weight: PropTypes.oneOf(["regular", "medium", "bold"]),
  size: PropTypes.oneOf(["primary", "large", "xlarge", "xxlarge", "xxxlarge"]),
};

Heading.defaultProps = {
  level: 1,
  size: "primary",
};
