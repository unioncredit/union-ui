import React, { useState, useRef } from "react";
import cn from "classnames";

import { useClickOutside } from "../util";

import "./context-menu.scss";

export function ContextMenu({ items, after }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useClickOutside(ref, () => {
    setOpen(false);
  });

  const toggleOpen = () => setOpen((x) => !x);

  return (
    <div className="context-menu-wrapper" ref={ref}>
      <div className="context-menu-button" onClick={toggleOpen}>
        <span />
        <span />
        <span />
      </div>
      {open && (
        <div className="context-menu">
          {items.map(({ label, className, ...item }) => (
            <a className={cn("context-menu__item", className)} {...item}>
              {label}
            </a>
          ))}
          {after && <div className="context-menu__after">{after}</div>}
        </div>
      )}
    </div>
  );
}
