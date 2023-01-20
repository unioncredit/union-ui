import "./IconBadge.scss";
import cn from "classnames";
import PropTypes from "prop-types";

import { propsToStyles } from "../spacing";

export const IconBadge = ({
  icon: Icon,
  size,
  variant,
  color,
  background,
  className,
  ...props
}) => {
  const styles = propsToStyles(props);

  return (
    <div
      style={{
        color: color,
        borderColor: color,
        backgroundColor: background,
        ...styles
      }}
      className={cn(className, "icon-badge", {
        [`icon-badge--size-${size}`]: size,
        [`icon-badge--variant-${variant}`]: variant,
      })}
    >
      <Icon />
    </div>
  )
}

IconBadge.propTypes = {
  icon: PropTypes.any,
  size: PropTypes.oneOf(["small", "regular", "large"]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
  color: PropTypes.string,
  background: PropTypes.string,
  className: PropTypes.string,
};

IconBadge.defaultProps = {
  size: "regular",
  variant: "filled",
  color: "#ffffff",
  background: "#000000",
};
