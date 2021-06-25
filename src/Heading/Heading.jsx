import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./heading.scss";

export function Heading({ level, size, children, className, ...props }) {
  return React.createElement(
    `h${level}`,
    {
      className: cn(className, "heading", { [`heading--${size}`]: size }),
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
  size: PropTypes.oneOf(["primary", "large", "xlarge"]),
};

Heading.defaultProps = {
  level: 1,
  size: "primary",
};
