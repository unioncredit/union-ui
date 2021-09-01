import React, { useState, useRef } from "react";

import { useClickOutside } from "../util";

import "./context-menu.scss";

export function ContextMenu({ items }) {
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
          {items.map(({ label, ...item }) => (
            <a className="context-menu__item" {...item}>
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
