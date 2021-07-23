import React from "react";
import cn from "classnames";

import "./card.scss";

export function Card({ children, className }) {
  return <div className={cn("card", className)}>{children}</div>;
}
