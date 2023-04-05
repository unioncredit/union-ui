import "./ProgressBar.scss";

import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { propsToStyles } from "../spacing";

export function ProgressBar({ percentage, label, icon: Icon, paused, ...props }) {
  const isComplete = percentage >= 100;

  return (
    <div
      style={propsToStyles(props)}
      className={cn("ProgressBar", {
        "ProgressBar--paused": paused,
        "ProgressBar--complete": isComplete,
        "ProgressBar--noProgress": percentage <= 0,
      })}
    >
      <div className="ProgressBar__inner">
        <div
          className="ProgressBar__progress"
          style={{ width: `${percentage}%` }}
        ></div>
        <div className="ProgressBar__label">
          {Icon && <Icon width="24px" />} {label}
        </div>
      </div>
    </div>
  );
}

ProgressBar.defaultProps = {
  percentage: 0,
  paused: false,
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
  label: PropTypes.string,
  icon: PropTypes.node,
  paused: PropTypes.bool,
};
