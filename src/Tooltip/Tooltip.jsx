import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./Tooltip.scss";

export function Tooltip({
  position,
  title,
  content,
  alwaysShow,
  children,
  className,
}) {
  return (
    <div
      className={cn("Tooltip", className, {
        [`Tooltip--${position}`]: position,
        "Tooltip--alwaysShow": alwaysShow,
      })}
    >
      <div className="Tooltip__content">
        {title && (
          <p className="Tooltip__title">{title}</p>
        )}
        {content}
        <span className="down">
          <span />
        </span>
      </div>
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  alwaysShow: PropTypes.bool,
  className: PropTypes.string,
};

Tooltip.defaultProps = {
  position: "top",
};
