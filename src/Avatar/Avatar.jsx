import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./avatar.scss";
import { propsToStyles } from "../spacing";

export function Avatar({ src, size, variant, ...props }) {
  const Component = src;

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
      {src && Component.displayName?.includes("UnionIcon") ? (
        <Component />
      ) : (
        <img src={src} />
      )}
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
