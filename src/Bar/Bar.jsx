import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Label } from "../Label";

import "./bar.scss";

export function Bar({ percentage, label, size, secondaryBar, marker, color }) {
  return (
    <div className="bar-wrapper">
      <Label size="small" className="bar-label" as="p">
        {label}
      </Label>
      <div
        className={cn("bar", {
          [`bar--${size}`]: size,
          [`bar--${color}`]: color,
        })}
      >
        <div className="bar__progress" style={{ width: `${percentage}%` }} />
        {secondaryBar && (
          <div className="bar__progress bar__progress--secondaryBar" />
        )}
        {marker && (
          <div className="bar__marker" style={{ left: `${marker}%` }} />
        )}
      </div>
    </div>
  );
}

Bar.propTypes = {
  percentage: PropTypes.number,
  label: PropTypes.string,
  size: PropTypes.oneOf(["large", "primary"]),
  secondaryBar: PropTypes.bool,
  marker: PropTypes.number,
  color: PropTypes.string,
};

Bar.defaultProps = {
  size: "primary",
};
