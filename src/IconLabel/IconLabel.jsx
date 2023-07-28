import "./IconLabel.scss";

import React from "react";

import { Box } from "../Box";
import { Text } from "../Text";

export function IconLabel({ src, icon: Icon, label, onError, ...props }) {
  return (
    <Box className="IconLabel" {...props}>
      <div className="IconLabel__icon">
        {src && <img src={src} onError={onError} />}
        {Icon && <Icon />}
      </div>

      <Text m="0 0 0 4px" color="blue500" size="medium" weight="medium">{label}</Text>
    </Box>
  );
}