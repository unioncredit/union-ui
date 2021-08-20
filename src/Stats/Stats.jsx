import React, { Fragment } from "react";
import { useMeasure } from "react-use";

import cn from "classnames";

import { Box } from "../Box";
import { ButtonRow } from "../Button";

export function Stats({ className, children, buttons, ...props }) {
  const [ref, { width }] = useMeasure();

  return (
    <Box
      {...props}
      ref={ref}
      align="center"
      className={cn(className, "stats", {
        "stats--condensed": width < 650,
        "stats--condensedSm": width < 750 && width > 650,
      })}
      fullWidth
    >
      <Box className="stats__content">{children}</Box>
      {buttons && (
        <ButtonRow direction="vertical">
          {buttons.map((button, i) => (
            <Fragment key={i}>{button}</Fragment>
          ))}
        </ButtonRow>
      )}
    </Box>
  );
}
