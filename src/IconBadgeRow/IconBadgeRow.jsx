import "./IconBadgeRow.scss";

import React from "react";
import cn from "classnames";

import { Box } from "../Box";

export function IconBadgeRow({ reverse, children, className, ...props }) {
  return (
    <Box {...props} className={cn("IconBadgeRow", className, {
      "IconBadgeRow--reverse": reverse,
    })}>
      {children}
    </Box>
  );
}