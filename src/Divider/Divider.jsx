import React from "react";
import { propsToStyles } from "../spacing";

import "./divider.scss";
import cn from "classnames";

export function Divider({ className, ...props }) {
  return <div className={cn("divider", className)} style={propsToStyles(props)} />;
}
