import React, { useState, useRef, createElement } from "react";
import cn from "classnames";

import { useClickOutside } from "../util";

import "./PopoverMenu.scss";

export function PopoverMenu({ items, after, position, button, className }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useClickOutside(ref, () => {
    setOpen(false);
  });

  const toggleOpen = () => setOpen((x) => !x);

  return (
    <div className={cn("PopoverMenu__wrapper", className)} ref={ref}>
      {button ? (
        button(toggleOpen)
      ) : (
        <div
          onClick={toggleOpen}
          className={cn("PopoverMenu__button", {
            "PopoverMenu__button--open": open,
          })}
        >
          <span />
          <span />
          <span />
        </div>
      )}
      {open && (
        <div
          className={cn("PopoverMenu", {
            [`PopoverMenu--${position}`]: position,
          })}
        >
          {items.map(({ icon: Icon, label, className, as, onClick, ...item }) => {
            const props = {
              fluid: true,
              className: cn("PopoverMenu__item", className),
              onClick: () => {
                onClick && onClick(toggleOpen);
              },
              ...item,
            };

            return createElement(as || "a", props, (
              <>
                {Icon && <Icon className="PopoverMenu__icon" width="24px" height="24px" />}
                {label}
              </>
            ));
          })}
          {after && <div className="PopoverMenu__after">{after}</div>}
        </div>
      )}
    </div>
  );
}
