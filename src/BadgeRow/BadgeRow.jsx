import React from "react";
import cn from "classnames";

import { Box } from "../Box";

import "./badge-row.scss";

export function BadgeRow({ children, className, ...props }) {
  return (
    <Box {...props} justify="flex-end" className={cn("badgeRow", className)}>
      {children}
    </Box>
  );
}
