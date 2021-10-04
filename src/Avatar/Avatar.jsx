import React from "react";
import PropTypes from "prop-types";

import "./avatar.scss";
import { propsToStyles } from "../spacing";

export function Avatar({ src, size, ...props }) {
  const Component = src;

  const sizeStyles = {
    width: size + "px",
    height: size + "px",
  };

  return (
    <div
      className="avatar"
      style={{
        ...sizeStyles,
        ...propsToStyles(props),
      }}
    >
      {src && Component.displayName?.includes("UnionIcon") ? (
        <Component />
      ) : (
        <img src={src} style={sizeStyles} />
      )}
    </div>
  );
}

Avatar.defaultProps = {
  size: 24,
};

Avatar.propTypes = {
  size: PropTypes.number,
};
