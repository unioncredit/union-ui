import React from "react";
import cn from "classnames";

import LogoSvg from "../icons/logo.svg";

import "./nav.scss";

export function Nav({ children, mobile, onLogoClick, logoComponent: Logo }) {
  return (
    <nav className={cn("nav", { "nav--mobile": mobile })}>
      <div className="nav__logo">
        <Logo width="32" onClick={onLogoClick} />
      </div>
      {children}
    </nav>
  );
}

Nav.defaultProps = {
  logoComponent: LogoSvg,
};
