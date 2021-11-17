import React from "react";
import cn from "classnames";
import AnimateHeight from "react-animate-height";

import "./collapse.scss";

export function Collapse({ id, active, children, className }) {
  return (
    <AnimateHeight
      id={id}
      duration={300}
      height={active ? "auto" : 0}
      className={cn("collapse", className)}
    >
      {children}
    </AnimateHeight>
  );
}
