import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { colorHex } from "../colors";
import { Metamask, WalletConnect, Icon as ButtonIcon } from "../Icon";

import "./button.scss";

const variantToIconColor = (variant) => {
  if (["primary", "floating"].includes(variant)) {
    return "white";
  }
  return "black";
};

const brandedIcons = {
  metamask: Metamask,
  walletconnect: WalletConnect,
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
  fontSize = "default",
  ...props
}) => {
  const styles = {
    ...(color ? { color: colorHex(color) } : {}),
  };

  const BrandedIcons = ["metamask", "walletconnect"].includes(icon)
    ? brandedIcons[icon]
    : null;
  const iconColor = color ? colorHex(color) : variantToIconColor(variant);
  const buttonIcon = BrandedIcons ? (
    <BrandedIcons />
  ) : (
    <ButtonIcon name={icon} color={iconColor} />
  );

  return (
    <button
      type="button"
      style={styles}
      className={cn(className, "button", {
        "button--inline": inline,
        "button--rounded": rounded,
        "button--noLabel": !label,
        [`button--${variant}`]: variant,
        [`button--icon-pos-${iconPosition}`]: iconPosition,
        [`button--fontSize-${fontSize}`]: fontSize,
        [`button--icon-${icon}`]: icon,
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
    "metamask",
    "walletconnect",
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
  fontSize: PropTypes.oneOf(["default", "large"]),
};

Button.defaultProps = {
  variant: "primary",
  onClick: undefined,
  iconPosition: "start",
};
