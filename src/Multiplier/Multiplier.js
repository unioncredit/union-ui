import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Label } from "../Label";

import "./multiplier.scss";

export function Multiplier({ multiplier }) {
  const n = Math.floor((multiplier - 0.5) / 0.25);

  console.log(n);

  return (
    <div className="multiplier">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("multiplier__tick", {
              "multiplier__tick--active": i < n,
            })}
          />
        ))}
      <Label size="small" className="multiplier__label">
        {multiplier <= 0 ? "Off" : `${multiplier}x`}
      </Label>
    </div>
  );
}

Multiplier.propTypes = {
  multiplier: PropTypes.number.isRequired,
};
