import React from "react";
import AnimateHeight from "react-animate-height";

export function Collapse({ id, active, children }) {
  return (
    <AnimateHeight id={id} duration={300} height={active ? "auto" : 0}>
      {children}
    </AnimateHeight>
  );
}
