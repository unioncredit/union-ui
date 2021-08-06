import React from "react";
import cn from "classnames";

import { NavIcon } from "../Icon";
import { Label } from "../Label";

import "./nav-item.scss";

export function NavItem({ disabled, label, icon, active, description }) {
  return (
    <a
      tabIndex="0"
      className={cn("nav-item", {
        "nav-item--active": active,
        "nav-item--disabled": disabled,
      })}
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
