import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./label.scss";

export function Label({ children, size, className, as }) {
  return React.createElement(
    as || "label",
    {
      className: cn("label", className, { [`label--${size}`]: size }),
    },
    children
  );
}

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["primary", "small"]),
};

Label.defaultProps = {
  size: "primary",
};
