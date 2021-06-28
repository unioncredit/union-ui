import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { ButtonIcon } from "./ButtonIcon";
import { colorHex } from "../colors";

import "./button.scss";

const variantToIconColor = (variant) => {
  if (["primary", "floating"].includes(variant)) {
    return "white";
  }
  return "black";
};

export const Button = ({
  icon,
  iconPosition,
  label,
  variant,
  background,
  color,
  ...props
}) => {
  const styles = {
    ...(background ? { background: colorHex(background) } : {}),
    ...(color ? { color: colorHex(color) } : {}),
  };

  const iconColor = color || variantToIconColor(variant);

  const buttonIcon = <ButtonIcon name={icon} color={iconColor} />;

  return (
    <button
      type="button"
      style={styles}
      className={cn("button", {
        [`button--${variant}`]: variant,
        [`button--icon-pos-${iconPosition}`]: iconPosition,
      })}
      {...props}
    >
      {icon && iconPosition === "start" && buttonIcon}
      {label}
      {icon && iconPosition === "end" && buttonIcon}
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
  background: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  onClick: undefined,
  iconPosition: "start",
};
