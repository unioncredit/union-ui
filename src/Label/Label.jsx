import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

import "./label.scss";

export function Label({ children, size, className, as, onClick, ...props }) {
  return React.createElement(
    as || "label",
    {
      className: cn("label", className, { [`label--${size}`]: size }),
      style: propsToStyles(props),
      onClick,
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
