import React from "react";
import cn from "classnames";

import Logo from "../icons/logo.svg";

import "./nav.scss";

export function Nav({ children, mobile, onLogoClick }) {
  return (
    <nav className={cn("nav", { "nav--mobile": mobile })}>
      <div className="nav__logo">
        <Logo width="24px" onClick={onLogoClick} />
      </div>
      {children}
    </nav>
  );
}
