import React from "react";
import cn from "classnames";

import "./table.scss";

export function Table({ noPadding, noBorder, children }) {
  return (
    <div
      className={cn("table", {
        "table--noBorder": noBorder,
        "table--noPadding": noPadding,
      })}
    >
      {children}
    </div>
  );
}
