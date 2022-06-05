import React, { createElement, forwardRef } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";
import { LoadingSpinner } from "../LoadingSpinner";

import "./button.scss";

export const Button = forwardRef(
  (
    {
      icon: Icon,
      iconPosition,
      label,
      variant,
      background,
      color,
      className,
      inline,
      children,
      rounded,
      fluid,
      loading,
      disabled,
      packed,
      as,
      size = "default",
      ...props
    },
    ref
  ) => {
    const styles = propsToStyles(props);

    return createElement(
      as || "button",
      {
        ref,
        type: "button",
        style: styles,
        className: cn(className, "button", {
          "button--fluid": fluid,
          "button--inline": inline,
          "button--rounded": rounded,
          "button--noLabel": !label && !children,
          "button--loading": loading,
          "button--withIcon": !!Icon,
          "button--packed": packed,
          [`button--${variant}`]: variant,
          [`button--icon-pos-${iconPosition}`]: iconPosition,
          [`button--${size}`]: size,
          [`button--${color}`]: color,
        }),
        disabled: disabled || loading,
        ...props,
      },
      <>
        {" "}
        {Icon && iconPosition === "start" && <Icon />}
        {label || children}
        {Icon && iconPosition === "end" && <Icon />}
        {loading && (
          <div className="loading-spinner-wrapper">
            <LoadingSpinner />
          </div>
        )}
      </>
    );
  }
);

Button.propTypes = {
  as: PropTypes.node,
  fluid: PropTypes.bool,
  variant: PropTypes.oneOf([
    "primary",
    "ethereum",
    "polygon",
    "secondary",
    "pill",
    "floating",
    "lite",
  ]),
  icon: PropTypes.any,
  rounded: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["start", "end"]),
  label: PropTypes.node,
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.oneOf(["red", "green", "blue"]),
  size: PropTypes.oneOf(["default", "small"]),
  loading: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  onClick: undefined,
  iconPosition: "start",
  loading: false,
};
