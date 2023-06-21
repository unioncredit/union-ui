import { createElement } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

export function SegmentedControlItem({
  disabled,
  as,
  children,
  className,
  active,
  ...props
}) {
  return createElement(
    as || "button",
    {
      className: cn("SegmentedControl__item", className, {
        "SegmentedControl__item--active": active,
        "SegmentedControl__item--disabled": disabled,
      }),
      disabled,
      ...props,
    },
    children
  );
}

SegmentedControlItem.propTypes = {
  as: PropTypes.any,
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};
