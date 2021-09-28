import React, { useState, useRef, createElement } from "react";
import cn from "classnames";

import { useClickOutside } from "../util";

import "./context-menu.scss";

export function ContextMenu({ items, after, position, button }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useClickOutside(ref, () => {
    setOpen(false);
  });

  const toggleOpen = () => setOpen((x) => !x);

  return (
    <div className="context-menu-wrapper" ref={ref}>
      {button ? (
        button(toggleOpen)
      ) : (
        <div className="context-menu-button" onClick={toggleOpen}>
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
          {items.map(({ label, className, as, ...item }) => {
            const props = {
              className: cn("context-menu__item", className),
              ...item,
            };

            return createElement(as || "a", props, label);
          })}
          {after && <div className="context-menu__after">{after}</div>}
        </div>
      )}
    </div>
  );
}
