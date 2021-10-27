import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import Intermediate from "../icons/intermediate.svg";
import Check from "../icons/check.svg";

import { Text } from "../Text";
import { propsToStyles } from "../spacing";

import "./control.scss";

export function Control({
  label,
  type,
  disabled,
  checked,
  indeterminate,
  onClick,
  ...props
}) {
  const Icon = checked ? Check : indeterminate ? Intermediate : null;

  return (
    <div
      className="control-wrapper"
      style={propsToStyles(props)}
      onClick={onClick}
    >
      <div
        className={cn("control", {
          [`control--${type}`]: type,
          "control--checked": checked,
          "control--disabled": disabled,
          "control--indeterminate": indeterminate,
        })}
      >
        {(checked || indeterminate) && type === "checkbox" && <Icon />}
      </div>
      {label && (
        <Text className="control-label" my={0} ml="6px">
          {label}
        </Text>
      )}
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
  label: PropTypes.string,
};
