import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

import "./avatar.scss";

export function Avatar({ src, icon: Icon, size, variant, onError, ...props }) {
  const sizes = {
    "x-small": 16,
    "small": 24,
    "medium": 40,
    "large": 64,
  };

  const sizeStyles = {
    width: (sizes[size] ?? size) + "px",
    height: (sizes[size] ?? size) + "px",
  };

  return (
    <div
      className={cn("avatar", {
        [`avatar--${variant}`]: variant,
      })}
      style={{
        ...sizeStyles,
        ...propsToStyles(props),
      }}
    >
      {src && <img src={src} onError={onError} />}
      {Icon && <Icon />}
    </div>
  );
}

Avatar.defaultProps = {
  size: 24,
};

Avatar.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["x-small", "small", "medium", "large"])
  ]),
};
