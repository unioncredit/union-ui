import React from "react";
import cn from "classnames";

import { Box } from "../Box";

export function Stats({ className, children, ...props }) {
  return (
    <Box {...props} align="center" className={cn(className, "stats")} fullWidth>
      {children}
    </Box>
  );
}
