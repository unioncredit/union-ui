import "./IconBadge.scss";

import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

export const IconBadge = ({
  icon: Icon,
  iconSize,
  size,
  variant,
  color,
  backgroundColor,
  borderColor,
  borderSize,
  className,
  ...props
}) => {
  const styles = propsToStyles(props);

  return (
    <div
      style={{
        color: color,
        borderColor: borderColor,
        borderWidth: borderSize ? `${borderSize}px` : "1px",
        borderStyle: borderColor && "solid",
        backgroundColor: backgroundColor,
        ...styles
      }}
      className={cn(className, "IconBadge", {
        [`IconBadge--icon-size-${iconSize}`]: iconSize,
        [`IconBadge--size-${size}`]: size,
        [`IconBadge--variant-${variant}`]: variant,
        ["IconBadge--no-color"]: color === null,
      })}
    >
      <Icon />
    </div>
  )
}

IconBadge.propTypes = {
  icon: PropTypes.any,
  iconSize: PropTypes.oneOf(["small", "regular", "large"]),
  size: PropTypes.oneOf(["small", "regular", "large", "fill"]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderSize: PropTypes.number,
  className: PropTypes.string,
};

IconBadge.defaultProps = {
  iconSize: "regular",
  size: "regular",
  variant: "filled",
  color: null,
  background: null,
  borderColor: null,
  borderSize: null,
};
