import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

import "./skeleton.scss";

export function Skeleton({ variant, width, height, grey, size, ...props }) {
  return (
    <div
      className={cn("skeleton", {
        [`skeleton--${variant}`]: variant,
        [`skeleton--grey${grey}`]: grey,
      })}
      style={{
        ...propsToStyles(props),
        width: size || width + "px",
        height: size || height + "px",
      }}
    ></div>
  );
}

Skeleton.propTypes = {
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  grey: PropTypes.string,
  variant: PropTypes.oneOf(["rectangle", "circle"]),
};

Skeleton.defaultProps = {
  width: 100,
  height: 10,
  variant: "rectangle",
};
