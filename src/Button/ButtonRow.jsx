import React from "react";
import cn from "classnames";

import { Box } from "../Box";

export function ButtonRow({ children, className, ...props }) {
  return (
    <Box className={cn(className, "button-row")} {...props}>
      {children}
    </Box>
  );
}
