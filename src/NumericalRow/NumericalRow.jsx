import "./NumericalRow.scss";

import React from "react";
import cn from "classnames";

import { Box } from "../Box";
import { Text } from "../Text";
import { Tooltip } from "../Tooltip";
import { propsToStyles } from "../spacing";
import InfoOutlinedIcon from "../Icons/internal/InfoOutlined.svg";

export function NumericalRow({ items, ...props }) {
  return (
    <Box
      fluid
      direction="vertical"
      className="NumericalRows"
      style={propsToStyles(props)}
    >
      {items.map(({ label, value, tooltip, error }, index) => (
        <Box
          key={index}
          align="center"
          justify="space-between"
          className={cn("NumericalRows__item", {
            "NumericalRows__item--error": error,
          })}
        >
          <Box align="center" mr="5px">
            <Text grey={500} m="0 5px 0 0" size="medium">{label}</Text>

            {tooltip && (
              <Tooltip {...tooltip}>
                <InfoOutlinedIcon style={{ marginTop: "4px" }} width="14px" />
              </Tooltip>
            )}
          </Box>

          <Text grey={700} m={0} size="medium">{value}</Text>
        </Box>
      ))}
    </Box>
  )
}