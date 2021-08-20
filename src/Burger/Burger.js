import React from "react";
import cn from "classnames";

import "./burger.scss";

export function Burger({ isOpen, onClick, className }) {
  return (
    <div
      onClick={onClick}
      className={cn("burger", className, {
        "burger--open": isOpen,
        "burger--close": !isOpen,
      })}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
