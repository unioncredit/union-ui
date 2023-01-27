import React, { useState, useRef, createElement } from "react";
import cn from "classnames";

import { useClickOutside } from "../util";

import "./ContextMenu.scss";

export function ContextMenu({ items, after, position, button, className }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useClickOutside(ref, () => {
    setOpen(false);
  });

  const toggleOpen = () => setOpen((x) => !x);

  return (
    <div className={cn("context-menu-wrapper", className)} ref={ref}>
      {button ? (
        button(toggleOpen)
      ) : (
        <div
          onClick={toggleOpen}
          className={cn("context-menu-button", {
            "context-menu-button--open": open,
          })}
        >
          <span />
          <span />
          <span />
        </div>
      )}
      {open && (
        <div
          className={cn("context-menu", {
            [`context-menu--${position}`]: position,
          })}
        >
          {items.map(({ icon: Icon, label, className, as, onClick, ...item }) => {
            const props = {
              fluid: true,
              className: cn("context-menu__item", className),
              onClick: () => {
                onClick && onClick(toggleOpen);
              },
              ...item,
            };

            return createElement(as || "a", props, (
              <>
                {Icon && <Icon className="context-menu__icon" width="20px" height="20px" />}
                {label}
              </>
            ));
          })}
          {after && <div className="context-menu__after">{after}</div>}
        </div>
      )}
    </div>
  );
}
