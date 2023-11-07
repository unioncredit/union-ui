import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { propsToStyles } from "../spacing";

import "./Badge.scss";

export function Badge({ onClick, color, borderColor, label, className, ...props }) {
  return (
    <div
      className={cn("badge", className, {
        [`badge--${color}`]: color,
        ["badge--clickable"]: !!onClick,
      })}
      onClick={onClick}
      style={{
        borderColor: borderColor,
        ...propsToStyles(props)
      }}
    >
      {label}
    </div>
  );
}

Badge.propTypes = {
  color: PropTypes.string,
  label: PropTypes.node,
};
