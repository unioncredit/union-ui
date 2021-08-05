import React from "react";
import cn from "classnames";

import { Box } from "../Box";

export function Stats({ className, children }) {
  return (
    <Box align="center" className={cn(className, "stats")} fluid>
      {children}
    </Box>
  );
}
