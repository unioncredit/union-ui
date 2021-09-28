import React from "react";
import cn from "classnames";

import { Heading } from "../Heading";

import "./circle-proress.scss";

export function CircleProgress({ complete, percentage, label }) {
  return (
    <div
      className={cn("circle-progress", {
        [`circle-progress--complete`]: complete,
      })}
    >
      <div className="circle-progress__label">
        <Heading as="p" my={0} size="large" color="blue600">
          {label}
        </Heading>
      </div>
      <svg viewBox="0 0 150 150">
        <circle cx="70" cy="70" r="70"></circle>
        <circle
          cx="70"
          cy="70"
          r="70"
          style={{
            strokeDashoffset: `calc(440 - (440 * ${percentage}) / 100)`,
          }}
        ></circle>
      </svg>
    </div>
  );
}
