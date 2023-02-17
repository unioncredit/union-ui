import "./IconBadge.scss";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

export const IconBadge = ({
  icon: Icon,
  iconSize,
  size,
  variant,
  color,
  background,
  borderColor,
  className,
  ...props
}) => {
  const styles = propsToStyles(props);

  return (
    <div
      style={{
        color: color,
        borderColor: borderColor,
        borderWidth: borderColor ? "1px" : null,
        borderStyle: borderColor ? "solid" : null,
        backgroundColor: background,
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
  size: PropTypes.oneOf(["small", "regular", "large"]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
  color: PropTypes.string,
  background: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string,
};

IconBadge.defaultProps = {
  iconSize: "regular",
  size: "regular",
  variant: "filled",
  color: null,
  background: null,
  borderColor: null,
};
