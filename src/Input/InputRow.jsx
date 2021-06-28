import React from "react";
import cn from "classnames";

import { Box } from "../Box";

export function InputRow({ children, className, ...props }) {
  return (
    <Box className={cn(className, "input-row")} {...props}>
      {children}
    </Box>
  );
}
