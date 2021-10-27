import React from "react";
import cn from "classnames";

import { Logo, LogoMobile } from "../Logo";

import "./nav.scss";

export function Nav({ children, mobile, onLogoClick }) {
  return (
    <nav className={cn("nav", { "nav--mobile": mobile })}>
      <div className="nav__logo">
        <Logo width="50px" withTextAside onClick={onLogoClick} />
        <LogoMobile width="77px" onClick={onLogoClick} />
      </div>
      {children}
    </nav>
  );
}
