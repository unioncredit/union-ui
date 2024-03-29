import React, { forwardRef } from "react";
import cn from "classnames";

import { Text } from "../Text";

import "./NavItem.scss";

export const NavItem = forwardRef(
  ({ onClick, disabled, label, active, as }, ref) => {
    return (
      <Text
        mx="4px"
        as={as || "a"}
        ref={ref}
        tabIndex="0"
        weight="medium"
        className={cn("NavItem", {
          "NavItem--active": active,
          "NavItem--disabled": disabled,
        })}
        onClick={onClick}
      >
        {label}
      </Text>
    );
  }
);
