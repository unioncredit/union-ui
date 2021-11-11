import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./tooltip.scss";

export function Tooltip({ position, children, content, alwaysShow }) {
  return (
    <span
      className={cn("tooltip", {
        [`tooltip--${position}`]: position,
        "tooltip--alwaysShow": alwaysShow,
      })}
    >
      <span className="tooltip__content">
        {content}
        <span className="down">
          <span />
        </span>
      </span>
      {children}
    </span>
  );
}

Tooltip.propTypes = {
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  content: PropTypes.string,
  alwaysShow: PropTypes.bool,
};

Tooltip.defaultProps = {
  position: "top",
};
