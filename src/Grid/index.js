import React from "react";
import cn from "classnames";
import { Container, Row as GridRow, Col as GridCol } from "react-grid-system";

import "./grid.scss";

export const Grid = ({ className, ...props }) => {
  return <Container {...props} className={cn(className, "grid")} />;
};
export const Row = GridRow;
export const Col = GridCol;
