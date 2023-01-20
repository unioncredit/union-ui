import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { propsToStyles } from "../spacing";

import "./bar.scss";

export function Bar({
  percentage,
  label,
  size,
  secondaryBar,
  marker,
  color,
  markerLabel,
  className,
  ...props
}) {
  return (
    <div
      className={cn("bar", className, {
        [`bar--${size}`]: size,
        "bar--hasMarkerLabel": !!markerLabel,
      })}
      style={propsToStyles(props)}
    >
      {label && (
        <Text size="small" className="bar-label">
          {label}
        </Text>
      )}
      <div
        className={cn("bar__indicator", {
          [`bar__indicator--${color}`]: color,
        })}
      >
        <div
          className="bar__indicator__progress"
          style={{ width: `${percentage}%` }}
        />
        {secondaryBar && (
          <div className="bar__indicator__progress bar__indicator__progress--secondaryBar" />
        )}
        {marker && (
          <>
            <Text
              size="small"
              className="bar__indicator__markerLabel"
              style={{ left: `${marker}%` }}
              mb={0}
            >
              {markerLabel}
            </Text>
            <div
              className="bar__indicator__marker"
              style={{ left: `${marker}%` }}
            />
          </>
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
