import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { ButtonIcon } from "./ButtonIcon";

import "./button.scss";

const variantToIconColor = (variant) => {
  if (["primary", "floating"].includes(variant)) {
    return "white";
  }
  return "black";
};

export const Button = ({ icon, iconPosition, label, variant, ...props }) => {
  return (
    <button
      type="button"
      className={cn("button", { [`button--${variant}`]: variant })}
      {...props}
    >
      {icon && iconPosition === "start" && (
        <ButtonIcon name={icon} color={variantToIconColor(variant)} />
      )}
      {label}
      {icon && iconPosition === "end" && (
        <ButtonIcon name="chevron" color={variantToIconColor(variant)} />
      )}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "rounded",
    "pill",
    "floating",
  ]),
  icon: PropTypes.oneOf([]),
  iconPosition: PropTypes.oneOf(["start", "end"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "primary",
  onClick: undefined,
  iconPosition: "start",
};
