import React from "react";

import { Logo } from "../Icon";

import "./nav.scss";

export function Nav({ children }) {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Logo />
      </div>
      {children}
    </nav>
  );
}
