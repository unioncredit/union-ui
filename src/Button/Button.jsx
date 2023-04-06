import "./Button.scss";
import React, { createElement, forwardRef } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";
import { LoadingSpinner } from "../LoadingSpinner";

export const Button = forwardRef(
  (
    {
      as,
      color,
      variant,
      label,
      size,
      icon: Icon,
      iconProps,
      iconPosition,
      loading,
      disabled,
      inline,
      rounded,
      fluid,
      children,
      className,
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
          [`button--variant-${variant}`]: variant,
          [`button--icon-pos-${iconPosition}`]: iconPosition,
          [`button--size-${size}`]: size,
          [`button--color-${color}`]: color,
        }),
        disabled: disabled || loading,
        ...props,
      },
      <>
        {" "}
        {Icon && iconPosition === "start" && <Icon {...iconProps} />}
        {label || children}
        {Icon && iconPosition === "end" && <Icon {...iconProps} />}
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
  color: PropTypes.oneOf(["primary", "secondary", "red", "blue"]),
  variant: PropTypes.oneOf(["light", "regular", "dark"]),
  label: PropTypes.node,
  size: PropTypes.oneOf(["pill", "small", "regular", "large"]),
  icon: PropTypes.any,
  iconProps: PropTypes.object,
  iconPosition: PropTypes.oneOf(["start", "end"]),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  rounded: PropTypes.bool,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "primary",
  variant: "regular",
  size: "regular",
  rounded: true,
  onClick: undefined,
  iconPosition: "start",
  loading: false,
};
