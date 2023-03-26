import "./AvatarBadgeRow.scss";

import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Box } from "../Box";
import { Text } from "../Text";

export function AvatarBadgeRow({ label, showLabel, children, className, ...props }) {
  return (
    <Box {...props} align="center" className={cn("AvatarBadgeRow", className)}>
      {showLabel ? (
        <Text m="0 8px" grey={600} size="small" weight="medium">
          {label}
        </Text>
      ) : children}
    </Box>
  )
}

AvatarBadgeRow.defaultProps = {
  showLabel: false,
};

AvatarBadgeRow.propTypes = {
  label: PropTypes.string,
  showLabel: PropTypes.bool,
  children: PropTypes.node,
};