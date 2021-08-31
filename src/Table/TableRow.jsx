import React from "react";
import cn from "classnames";

import "./table-row.scss";

export function TableRow({ children, onClick, className }) {
  return (
    <div
      className={cn("table-row", className, {
        "table-row--clickable": onClick,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
