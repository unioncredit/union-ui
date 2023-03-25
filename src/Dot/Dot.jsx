import "./Dot.scss";

import React from "react";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

export function Dot({ size, color, hex, ...props }) {
  return (
    <span
      className={`Dot Dot--${color}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...(hex && {background: hex}),
        ...(propsToStyles(props)),
      }}
    />
  )
}

Dot.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  hex: PropTypes.string,
};

Dot.defaultProps = {
  size: 10,
};