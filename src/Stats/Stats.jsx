import React from "react";
import cn from "classnames";

import { Box } from "../Box";

export function Stats({ className, children }) {
  return <Box className={cn(className, "stats")}>{children}</Box>;
}
