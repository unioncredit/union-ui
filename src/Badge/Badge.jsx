import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./badge.scss";

export function Badge({ color, label }) {
  return (
    <div className={cn("badge", { [`badge--${color}`]: color })}>{label}</div>
  );
}

Badge.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
};
