import React, { forwardRef } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

import "./text.scss";

export const Text = forwardRef(
  (
    {
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
    return (
      <p
        ref={ref}
        className={cn("text", className, {
          [`text--${size}`]: size,
          [`text--${align}`]: align,
          [`text--grey${grey}`]: grey,
          [`text--${color}`]: color,
          [`text--weight-${weight}`]: weight,
        })}
        style={{
          ...propsToStyles(props),
          ...style,
        }}
        contentEditable={contentEditable}
      >
        {children}
      </p>
    );
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
};

Text.defaultProps = {
  size: "primary",
};
