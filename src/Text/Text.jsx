import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./text.scss";

export function Text({ children, size }) {
  return <p className={cn("text", { [`text--${size}`]: size })}>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  size: PropTypes.oneOf(["primary", "large"]),
};

Text.defaultProps = {
  size: "primary",
};
