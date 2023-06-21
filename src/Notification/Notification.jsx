import "./Notification.scss";

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Text } from "../Text";
import { LinkOutIcon } from "../Icons";
import CloseIcon from "../Icons/internal/Close.svg";
import error from "../Icons/icons/Failed.svg";
import success from "../Icons/icons/Success.svg";
import info from "../Icons/icons/Info.svg";
import pending from "../Icons/icons/Pending.svg";

export function Notification({ variant, title, content, onClose, link }) {
  const Icon = {
    error,
    success,
    pending,
    info,
  }[variant];

  return (
    <div
      className={cn("Notification", {
        [`Notification--${variant}`]: variant,
      })}
    >
      <div className="Notification__icon">
        <Icon />
      </div>
      <div className="Notification__content">
        <Text m={0} size="medium" grey={800} weight="medium">
          {title}
        </Text>
        {content && (
          <Text m="4px 0 0" grey={500} weight="medium">{content}</Text>
        )}
      </div>
      <div className="Notification__actions">
        <button className="Notification__close" onClick={onClose}>
          <CloseIcon  />
        </button>

        {link && (
          <a href={link} target="_blank" className="Notification__link">
            <LinkOutIcon />
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
