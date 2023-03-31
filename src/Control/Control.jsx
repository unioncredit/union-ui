import "./Control.scss";

import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { propsToStyles } from "../spacing";
import { CheckAlternativeIcon } from "../Icons";

export function Control({
  type,
  label,
  content,
  disabled,
  checked,
  onClick,
  className,
  ...props
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn("Control__wrapper", className)}
      style={propsToStyles(props)}
      onClick={onClick}
    >
      <div
        className={cn("Control", {
          [`Control--${type}`]: type,
          "Control--hovered": hovered,
          "Control--checked": checked,
          "Control--disabled": disabled,
        })}
      >
        {type === "checkbox" && (checked || hovered) && <CheckAlternativeIcon />}
      </div>
      {label && (
        <Text className="Control__label" my={0} ml="6px">
          {label}
        </Text>
      )}
      {content && (
        <Text className="Control__content" my={0} ml="6px">
          {content}
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
  label: PropTypes.string,
};
