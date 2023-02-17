import "./IconBadgeRow.scss";

import React from "react";
import cn from "classnames";

import { Box } from "../Box";

export function IconBadgeRow({ children, className, ...props }) {
  return (
    <Box {...props} justify="flex-end" className={cn("IconRow", className)}>
      {children}
    </Box>
  );
}