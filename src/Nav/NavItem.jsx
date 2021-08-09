import React, { forwardRef } from "react";
import cn from "classnames";

import { NavIcon } from "../Icon";
import { Label } from "../Label";

import "./nav-item.scss";

export const NavItem = forwardRef(
  ({ onClick, disabled, label, icon, active, description }, ref) => {
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
        <span className="nav-item__icon">
          <NavIcon name={icon} />
        </span>
        <span className="nav-item__content">
          <span className="nav-item__label">{label}</span>
          {active && description && (
            <Label as="p" size="small" className="nav-item__description">
              {description}
            </Label>
          )}
        </span>
      </a>
    );
  }
);
