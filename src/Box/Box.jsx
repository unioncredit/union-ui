import React, { createElement } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./box.scss";
import { propsToStyles } from "../spacing";

const directionMap = {
  vertical: "column",
  horizontal: "row",
};

export function Box({
  children,
  align,
  justify,
  className,
  direction,
  as,
  fluid,
  wrap = "nowrap",
  ...props
}) {
  return createElement(
    as || "div",
    {
      ...props,
      className: cn("box", className, {
        [`box--direction-${direction}`]: direction,
        "box--fluid": fluid,
      }),
      style: {
        alignItems: align,
        justifyContent: justify,
        flexDirection: directionMap[direction],
        flexWrap: wrap,
        ...propsToStyles(props),
      },
    },
    children
  );
}

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  align: PropTypes.oneOf(["start", "end", "center", "baseline"]),
  justify: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "space-between",
    "space-around",
  ]),
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  wrap: PropTypes.bool,
  className: PropTypes.string,
};

Box.defaultProps = {
  align: "start",
  direction: "horizontal",
  wrap: false,
};
