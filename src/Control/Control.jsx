import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Icon } from "../Icon";

import "./control.scss";

export function Control({ label, type, disabled, checked, indeterminate }) {
  const iconName = checked
    ? "control-check"
    : indeterminate
    ? "control-indeterminate"
    : null;

  return (
    <div className="control-wrapper">
      <div
        className={cn("control", {
          [`control--${type}`]: type,
          "control--checked": checked,
          "control--disabled": disabled,
          "control--indeterminate": indeterminate,
        })}
      >
        {(checked || indeterminate) && type === "checkbox" && (
          <Icon name={iconName} color="white" />
        )}
      </div>
      {label && <p className="control-label">{label}</p>}
    </div>
  );
}

Control.defaultProps = {
  type: "checkbox",
};

Control.propTypes = {
  type: PropTypes.oneOf(["checkbox", "radio"]),
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
};
