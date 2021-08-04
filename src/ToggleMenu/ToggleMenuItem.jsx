import React, { createElement } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

export function ToggleMenuItem({ as, children, className, active, ...props }) {
  return createElement(
    as || "button",
    {
      className: cn("toggle-menu__item", className, {
        "toggle-menu__item--active": active,
      }),
      ...props,
    },
    children
  );
}
