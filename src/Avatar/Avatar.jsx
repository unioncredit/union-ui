import React from "react";
import PropTypes from "prop-types";

import "./avatar.scss";
import { propsToStyles } from "../spacing";

export function Avatar({ src, size, ...props }) {
  const Component = src;

  return (
    <div
      className="avatar"
      style={{
        width: size + "px",
        height: size + "px",
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
};
