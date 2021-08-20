import React from "react";
import cn from "classnames";
import { useMeasure } from "react-use";

import { propsToStyles } from "../spacing";

import "./table.scss";

export function Table({
  noPadding,
  noBorder,
  children,
  disableCondensed,
  ...props
}) {
  const [ref, { width }] = useMeasure();

  return (
    <div
      ref={ref}
      style={propsToStyles(props)}
      className={cn("table", {
        "table--noBorder": noBorder,
        "table--noPadding": noPadding,
        "table--condensed": width < 400 && !disableCondensed,
      })}
    >
      {children}
    </div>
  );
}
