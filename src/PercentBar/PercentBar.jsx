import "./PercentBar.scss";

import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { propsToStyles } from "../spacing";

export function PercentBar({
  percentage,
  label,
  marker,
  color,
  markerLabel,
  className,
  ...props
}) {
  return (
    <div
      className={cn("PercentBar", className, {
        "PercentBar--max": percentage >= 100,
        "PercentBar--hasMarkerLabel": !!markerLabel,
      })}
      style={propsToStyles(props)}
    >
      {label && (
        <Text size="small" className="PercentBar__label">
          {label}
        </Text>
      )}
      <div className="PercentBar__indicator">
        <div
          className="PercentBar__indicator__progress"
          style={{ width: `${percentage}%` }}
        />
        {marker && (
          <>
            <Text
              size="small"
              className="PercentBar__indicator__markerLabel"
              style={{ left: `${marker}%` }}
              mb={0}
            >
              {markerLabel}
            </Text>
            <div
              className="PercentBar__indicator__marker"
              style={{ left: `${marker}%` }}
            />
          </>
        )}
      </div>
    </div>
  );
}

PercentBar.propTypes = {
  percentage: PropTypes.number,
  label: PropTypes.string,
  secondaryBar: PropTypes.bool,
  marker: PropTypes.number,
};
