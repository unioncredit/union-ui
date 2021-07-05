import React from "react";
import cn from "classnames";

import { NavIcon } from "../Icon";
import { Text } from "../Text";

import "./nav-item.scss";

export function NavItem({ label, icon, active, description }) {
  return (
    <div className={cn("nav-item", { "nav-item--active": active })}>
      <div className="nav-item__icon">
        <NavIcon name={icon} color={active ? "black" : "grey"} />
      </div>
      <div className="nav-item__content">
        <div className="nav-item__label">{label}</div>
        {active && description && (
          <Text className="nav-item__description">{description}</Text>
        )}
      </div>
    </div>
  );
}
