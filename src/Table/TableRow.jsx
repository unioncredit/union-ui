import React from "react";
import cn from "classnames";

import "./table-row.scss";

export function TableRow({
  children,
  onClick,
  clickable,
  className,
  active,
  error,
}) {
  return (
    <>
      <tr
        className={cn("table-row", className, {
          "table-row--clickable": onClick || clickable,
          "table-row--active": active,
          "table-row--error": error,
        })}
        onClick={onClick}
      >
        {children}
      </tr>
      <tr style={{ height: "4px" }} />
    </>
  );
}
