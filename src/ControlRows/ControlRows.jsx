import "./ControlRows.scss";

import React from "react";
import cn from "classnames";

import { Box } from "../Box";
import { Control } from "../Control";
import { Tooltip } from "../Tooltip";
import InfoOutlinedIcon from "../Icons/internal/InfoOutlined.svg";

export function ControlRows({ items, className, ...props }) {
  return (
    <Box direction="vertical" {...props} className={cn("ControlRows", className)}>
      {items.map(({ tooltip, ...item }) => (
        <Box align="center" className="ControlRows__row" justify="space-between" fluid>
          <Control {...item} />

          {tooltip && (
            <Tooltip ml="4px" {...tooltip}>
              <InfoOutlinedIcon width="14px" />
            </Tooltip>
          )}
        </Box>
      ))}
    </Box>
  );
}