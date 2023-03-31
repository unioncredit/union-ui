import React, { useState, useRef } from "react";
import cn from "classnames";

import { useClickOutside } from "../util";

import "./Popover.scss";

export function Popover({ children, position, button, className }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useClickOutside(ref, () => {
    setOpen(false);
  });

  const toggleOpen = () => setOpen((x) => !x);

  return (
    <div className={cn("Popover__wrapper", className)} ref={ref}>
      {button ? (
        button(toggleOpen)
      ) : (
        <div
          onClick={toggleOpen}
          className={cn("Popover__button", {
            "Popover__button--open": open,
          })}
        >
          <span />
          <span />
          <span />
        </div>
      )}
      {open && (
        <div
          className={cn("Popover", {
            [`Popover--${position}`]: position,
          })}
        >
          {children}
        </div>
      )}
    </div>
  );
}
