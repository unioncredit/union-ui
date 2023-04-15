import React from "react";
import cn from "classnames";

import "./table-head.scss";

export function TableHead({ align, className, children, span, ...props }) {
  return (
    <th
      className={cn(className, "table-head", {
        [`table-head--align-${align}`]: align,
      })}
      colSpan={span}
      {...props}
    >
      {children}
    </th>
  );
}
