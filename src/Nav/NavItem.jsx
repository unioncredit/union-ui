import React from "react";
import cn from "classnames";

import { NavIcon } from "../Icon";
import { Label } from "../Label";

import "./nav-item.scss";

export function NavItem({ disabled, label, icon, active, description }) {
  return (
    <div
      tabIndex="0"
      className={cn("nav-item", {
        "nav-item--active": active,
        "nav-item--disabled": disabled,
      })}
    >
      <div className="nav-item__icon">
        <NavIcon name={icon} />
      </div>
      <div className="nav-item__content">
        <div className="nav-item__label">{label}</div>
        {active && description && (
          <Label as="p" size="small" className="nav-item__description">
            {description}
          </Label>
        )}
      </div>
    </div>
  );
}
