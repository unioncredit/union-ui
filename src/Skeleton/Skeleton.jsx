import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

import "./skeleton.scss";

export function Skeleton({
  variant,
  width: inputWidth,
  height: inputHeight,
  grey,
  shimmer,
  size,
  color,
  ...props
}) {
  const width = size || inputWidth;
  const height = size || inputHeight;

  return (
    <div
      className={cn("skeleton", {
        [`skeleton--${variant}`]: variant,
        [`skeleton--grey${grey}`]: grey,
        [`skeleton--${color}`]: color,
        "skeleton--shimmer": shimmer,
      })}
      style={{
        width: width + "px",
        height: height + "px",
        ...propsToStyles(props),
      }}
    >
      {color && (
        <div
          className="inner"
          style={{
            width: width * 0.5 + "px",
            height: height * 0.5 + "px",
          }}
        ></div>
      )}
    </div>
  );
}

Skeleton.propTypes = {
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  grey: PropTypes.number,
  variant: PropTypes.oneOf(["rectangle", "circle"]),
};

Skeleton.defaultProps = {
  width: 100,
  height: 10,
  variant: "rectangle",
};
