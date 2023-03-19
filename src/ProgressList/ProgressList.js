import React from "react";
import { propsToStyles } from "../spacing";

export function ProgressList({ children, ...props }) {
  return <div className="progressList" style={propsToStyles(props)}>{children}</div>;
}
