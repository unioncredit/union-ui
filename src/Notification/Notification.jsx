import "./Notification.scss";

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Text } from "../Text";
import success from "../Icons/icons/success.svg";
import error from "../Icons/icons/failed.svg";
import info from "../Icons/icons/info.svg";
import pending from "../Icons/icons/pending.svg";
import External from "../Icons/icons/external.svg";
import Close from "../Icons/icons/close.svg";

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
        <Text size="medium" grey={800} weight="medium" mb="4px">
          {title}
        </Text>
        <Text grey={500} weight="medium">{content}</Text>
      </div>
      <div className="Notification__actions">
        <Close className="Notification__close" onClick={onClose} />
        {link && (
          <a href={link} target="_blank" className="Notification__link">
            <External />
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
