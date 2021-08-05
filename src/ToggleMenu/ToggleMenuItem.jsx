import { createElement } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

export function ToggleMenuItem({ as, children, className, active, ...props }) {
  return createElement(
    as || "button",
    {
      className: cn("toggle-menu__item", className, {
        "toggle-menu__item--active": active,
        "toggle-menu__item--disabled": disabled,
      }),
      ...props,
    },
    children
  );
}

ToggleMenuItem.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};
