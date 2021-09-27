import React from "react";
import { propsToStyles } from "../spacing";

import "./divider.scss";

export function Divider(props) {
  return <div className="divider" style={propsToStyles(props)} />;
}
