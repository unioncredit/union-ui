import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { propsToStyles } from "../spacing";

import "./badge.scss";

export function Badge({ onClick, color, label, className, ...props }) {
  return (
    <div
      className={cn("badge", className, {
        [`badge--${color}`]: color,
        ["badge--clickable"]: !!onClick,
      })}
      onClick={onClick}
      style={propsToStyles(props)}
    >
      {label}
    </div>
  );
}

Badge.propTypes = {
  color: PropTypes.string,
  label: PropTypes.node,
};
