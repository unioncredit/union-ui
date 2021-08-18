import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { colorHex } from "../colors";
import { propsToStyles } from "../spacing";
import { Metamask, WalletConnect, Icon as ButtonIcon } from "../Icon";
import { LoadingSpinner } from "./LoadingSpinner.svg";

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
  fluid,
  loading,
  disabled,
  fontSize = "default",
  ...props
}) => {
  const styles = {
    ...(color ? { color: colorHex(color) } : {}),
    ...propsToStyles(props),
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
        "button--fluid": fluid,
        "button--inline": inline,
        "button--rounded": rounded,
        "button--noLabel": !label,
        "button--loading": loading,
        [`button--${variant}`]: variant,
        [`button--icon-pos-${iconPosition}`]: iconPosition,
        [`button--fontSize-${fontSize}`]: fontSize,
        [`button--icon-${icon}`]: icon,
      })}
      disabled={disabled || loading}
      {...props}
    >
      {icon && iconPosition === "start" && buttonIcon}
      {label || children}
      {icon && iconPosition === "end" && buttonIcon}
      {loading && <LoadingSpinner />}
    </button>
  );
};

Button.propTypes = {
  fluid: PropTypes.bool,
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
  label: PropTypes.string,
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOf(["default", "large"]),
  loading: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  onClick: undefined,
  iconPosition: "start",
  loading: false,
};
