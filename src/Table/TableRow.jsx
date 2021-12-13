import React, { forwardRef } from "react";
import cn from "classnames";

import "./table-row.scss";

export const TableRow = forwardRef(
  ({ children, onClick, clickable, className, active, error }, ref) => {
    return (
      <>
        <tr
          ref={ref}
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
);
