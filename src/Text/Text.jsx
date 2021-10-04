import React, { createElement, forwardRef } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

import "./text.scss";

export const Text = forwardRef(
  (
    {
      as,
      align,
      children,
      size,
      className,
      color,
      grey,
      style,
      weight,
      contentEditable,
      ...props
    },
    ref
  ) => {
    const textProps = {
      ref,
      className: cn("text", className, {
        [`text--${size}`]: size,
        [`text--${align}`]: align,
        [`text--grey${grey}`]: grey,
        [`text--${color}`]: color,
        [`text--weight-${weight}`]: weight,
      }),
      style: {
        ...propsToStyles(props),
        ...style,
      },
      contentEditable,
    };

    return createElement(as || "p", textProps, children);
  }
);

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["primary", "large"]),
  weight: PropTypes.oneOf(["regular", "medium", "bold"]),
  align: PropTypes.oneOf(["center", "left", "right"]),
  as: PropTypes.node,
};

Text.defaultProps = {
  size: "primary",
};
