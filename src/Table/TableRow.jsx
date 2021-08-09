import React from "react";
import cn from "classnames";

import "./table-row.scss";

export function TableRow({ children, onClick }) {
  return (
    <div
      className={cn("table-row", { "table-row--clickable": onClick })}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
