import React from "react";
import cn from "classnames";

import "./nav.scss";

export function Nav({ children, mobile }) {
  return <nav className={cn("nav", { "nav--mobile": mobile })}>{children}</nav>;
}

Nav.defaultProps = {
  logoComponent: LogoSvg,
};
