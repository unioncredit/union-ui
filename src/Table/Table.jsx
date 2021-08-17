import React from "react";
import cn from "classnames";

import { propsToStyles } from "../spacing";

import "./table.scss";

export function Table({ noPadding, noBorder, children, ...props }) {
  return (
    <div
      style={propsToStyles(props)}
      className={cn("table", {
        "table--noBorder": noBorder,
        "table--noPadding": noPadding,
      })}
    >
      {children}
    </div>
  );
}
