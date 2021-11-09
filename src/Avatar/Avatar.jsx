import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

import "./avatar.scss";

export function Avatar({ src, icon: Icon, size, variant, onError, ...props }) {
  const sizeStyles = {
    width: size + "px",
    height: size + "px",
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
  size: PropTypes.number,
  variant: PropTypes.string,
};
