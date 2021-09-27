import React, { forwardRef } from "react";
import cn from "classnames";

import "./nav-item.scss";

export const NavItem = forwardRef(
  ({ onClick, disabled, label, active }, ref) => {
    return (
      <a
        ref={ref}
        tabIndex="0"
        className={cn("nav-item", {
          "nav-item--active": active,
          "nav-item--disabled": disabled,
        })}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }
);
