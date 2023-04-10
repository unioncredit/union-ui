import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";

import { useClickOutside } from "../util";

import "./Popover.scss";

export function Popover({ open, children, position, button, className, stickyMobile, onClose }) {
  const ref = useRef(null);
  const [popoverOpen, setPopoverOpen] = useState(open);

  useClickOutside(ref, () => {
    setOpen(false);
  });

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const toggleOpen = () => {
    setOpen(x => !x);
  };

  const setOpen = (x) => {
    setPopoverOpen(x);
    !x && onClose && onClose();
  }

  return (
    <div ref={ref} className={cn("Popover__wrapper", className)}>
      {button ? (
        button(toggleOpen)
      ) : (
        <div
          onClick={toggleOpen}
          className={cn("Popover__button", {
            "Popover__button--open": popoverOpen,
          })}
        >
          <span />
          <span />
          <span />
        </div>
      )}
      {popoverOpen && (
        <div
          className={cn("Popover", {
            "Popover--sticky": stickyMobile,
            [`Popover--${position}`]: position,
          })}
        >
          {children}
        </div>
      )}
    </div>
  );
}
