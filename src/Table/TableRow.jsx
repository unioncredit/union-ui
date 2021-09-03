import React from "react";
import cn from "classnames";

import "./table-row.scss";

export function TableRow({ children, onClick, className, active }) {
  return (
    <div
      className={cn("table-row", className, {
        "table-row--clickable": onClick,
        "table-row--active": active,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
