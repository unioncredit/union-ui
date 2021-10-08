import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { propsToStyles } from "../spacing";

import "./badge.scss";

export function Badge({ color, label, ...props }) {
  return (
    <div
      className={cn("badge", { [`badge--${color}`]: color })}
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
