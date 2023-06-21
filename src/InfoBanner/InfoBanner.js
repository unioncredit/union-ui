import "./InfoBanner.scss";

import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { Box } from "../Box";

export function InfoBanner({
  label,
  variant,
  icon: Icon,
  iconPosition,
  align,
  ...props
}) {
  return (
    <Box
      align="center"
      className={cn("InfoBanner", {
        [`InfoBanner--${variant}`]: variant,
        [`InfoBanner--align-${align}`]: align,
      })}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon style={{marginRight: "8px"}} className="InfoBanner__icon" />
      )}

      <Text mb={0} size="small">{label}</Text>

      {Icon && iconPosition === "right" && (
        <Icon style={{marginLeft: "8px"}} className="InfoBanner__icon" />
      )}
    </Box>
  );
}

InfoBanner.propTypes = {
  variant: PropTypes.oneOf(["warning", "info", "success"]),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  packed: PropTypes.bool,
  align: PropTypes.oneOf(["left", "center", "right"])
};

InfoBanner.defaultProps = {
  variant: "warning",
  align: "left",
  iconPosition: "left",
};
