import React, { Children } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Icon as ButtonIcon } from "../Icon";
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
  className,
  inline,
  children,
  rounded,
  ...props
}) => {
  const styles = {
    ...(color ? { color: colorHex(color) } : {}),
  };

  const iconColor = color ? colorHex(color) : variantToIconColor(variant);
  const buttonIcon = <ButtonIcon name={icon} color={iconColor} />;

  return (
    <button
      type="button"
      style={styles}
      className={cn(className, "button", {
        "button--rounded": rounded,
        [`button--${variant}`]: variant,
        [`button--icon-pos-${iconPosition}`]: iconPosition,
        "button--inline": inline,
      })}
      {...props}
    >
      {icon && iconPosition === "start" && buttonIcon}
      {label || children}
      {icon && iconPosition === "end" && buttonIcon}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "pill", "floating"]),
  icon: PropTypes.oneOf([
    "telegram",
    "twitter",
    "link",
    "manage",
    "vouch",
    "proposal",
    "repayment",
    "borrow",
    "stats",
    "icons",
    "locked",
    "check",
    "no",
    "chevron",
    "repayment",
    "borrow",
  ]),
  rounded: PropTypes.bool,
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
