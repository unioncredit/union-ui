import React, { createElement } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";
import { Metamask, WalletConnect, Icon as ButtonIcon } from "../Icon";
import { LoadingSpinner } from "../LoadingSpinner";

import "./button.scss";

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
  as,
  size = "default",
  ...props
}) => {
  const styles = propsToStyles(props);

  const BrandedIcons = ["metamask", "walletconnect"].includes(icon)
    ? brandedIcons[icon]
    : null;

  const buttonIcon = BrandedIcons ? (
    <BrandedIcons />
  ) : (
    <ButtonIcon name={icon} />
  );

  return createElement(
    as || "button",
    {
      type: "button",
      style: styles,
      className: cn(className, "button", {
        "button--fluid": fluid,
        "button--inline": inline,
        "button--rounded": rounded,
        "button--noLabel": !label && !children,
        "button--loading": loading,
        [`button--${variant}`]: variant,
        [`button--icon-pos-${iconPosition}`]: iconPosition,
        [`button--${size}`]: size,
        [`button--${color}`]: color,
        [`button--icon-${icon}`]: icon,
      }),
      disabled: disabled || loading,
      ...props,
    },
    <>
      {" "}
      {icon && iconPosition === "start" && buttonIcon}
      {label || children}
      {icon && iconPosition === "end" && buttonIcon}
      {loading && (
        <div className="loading-spinner-wrapper">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

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
  ]),
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
    "arrow-left",
    "external",
    "dropdown-arrow",
    "avatar",
  ]),
  rounded: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["start", "end"]),
  label: PropTypes.string,
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
