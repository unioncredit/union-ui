import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Text } from "../Text";

import success from "./icons/success.svg";
import error from "./icons/error.svg";
import info from "./icons/info.svg";
import pending from "./icons/pending.svg";
import external from "./icons/external.svg";
import close from "./icons/close.svg";

import "./notification.scss";

export function Notification({ variant, title, children, onClose, link }) {
  const icon = {
    error,
    success,
    pending,
    info,
  }[variant];

  return (
    <div
      className={cn("notification", {
        [`notification--${variant}`]: variant,
      })}
    >
      <div className="notification__icon">
        <img src={icon} />
      </div>
      <div className="notification__content">
        <Text grey={700} mb="6px">
          {title}
        </Text>
        {children}
      </div>
      <div className="notification__actions">
        <img src={close} onClick={onClose} />
        {link && (
          <a href={link} target="_blank">
            <img src={external} />
          </a>
        )}
      </div>
    </div>
  );
}

Notification.propTypes = {
  variant: PropTypes.oneOf(["error", "success", "pending"]),
  text: PropTypes.string,
  link: PropTypes.string,
};

Notification.defaultProps = {};
