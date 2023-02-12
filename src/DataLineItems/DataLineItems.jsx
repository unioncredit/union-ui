import "./DataLineItems.scss";

import React from "react";
import cn from "classnames";

import { Box } from "../Box";
import { Text } from "../Text";
import { Tooltip } from "../Tooltip";
import { WireInfoIcon } from "../Icons";
import { propsToStyles } from "../spacing";

export function DataLineItems({ items, ...props }) {
  return (
    <Box
      fluid
      direction="vertical"
      className="DataLineItems"
      style={propsToStyles(props)}
    >
      {items.map(({ label, value, tooltip, error }) => (
        <Box
          mb="8px"
          align="center"
          justify="space-between"
          className={cn("DataLineItems__item", {
            "DataLineItems__item--error": error,
          })}
        >
          <Box align="center" mr="5px">
            <Text grey={500} m="0 5px 0 0" size="medium">{label}</Text>

            {tooltip && (
              <Tooltip {...tooltip}>
                <WireInfoIcon style={{ marginTop: "4px" }} width="14px" />
              </Tooltip>
            )}
          </Box>

          <Text grey={700} m={0} size="medium">{value}</Text>
        </Box>
      ))}
    </Box>
  )
}