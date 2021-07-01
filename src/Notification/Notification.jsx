import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { StatusIcon } from "../Icon";

import "./notification.scss";

export function Notification({ variant, children }) {
  return (
    <div
      className={cn("notification", {
        [`notification--${variant}`]: variant,
      })}
    >
      <div className="notification__icon">
        <StatusIcon name={variant} />
      </div>
      <div className="notification__content">{children}</div>
      <div className="notification__close">
        <div />
      </div>
    </div>
  );
}

Notification.propTypes = {
  variant: PropTypes.oneOf(["error", "success", "pending"]),
  text: PropTypes.string,
};

Notification.defaultProps = {};
