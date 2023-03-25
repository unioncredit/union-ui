import React from "react";
import cn from "classnames";

import { propsToStyles } from "../spacing";

import "./Table.scss";

export function Table({
  noPadding,
  noBorder,
  children,
  disableCondensed,
  className,
  ...props
}) {
  return (
    <table style={propsToStyles(props)} className={cn("table", className)}>
      <tbody>{children}</tbody>
    </table>
  );
}
