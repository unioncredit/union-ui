import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Text } from "../Text";

import "./Toggle.scss";

export function Toggle({ active, label, labelPosition, onChange, color, disabled }) {
  const handleChange = () => {
    if (!disabled) {
      onChange && onChange(!active);
    }
  };

  const ToggleLabel = () => (
    <Text className={cn("toggle-label", {
      [`toggle-label--pos-${labelPosition}`]: true,
      [`toggle-label--color-${color}`]: true,
    })}
    >
      {label}
    </Text>
  );

  return (
    <div className={cn("toggle-wrapper", { "toggle-wrapper--disabled": disabled })}>
      {label && labelPosition === "start" && <ToggleLabel />}
      <div
        className={cn("toggle", { "toggle--active": active })}
        onClick={handleChange}
      >
        <div className="toggle__switch" />
      </div>
      {label && labelPosition === "end" && <ToggleLabel />}
    </div>
  );
}

Toggle.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["start", "end"]),
  onChange: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
};

Toggle.defaultProps = {
  labelPosition: "end",
  initialState: false,
  color: "secondary",
  disabled: false,
};
