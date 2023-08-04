import "./BadgeIndicator.scss";

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Box } from "../Box";

export function BadgeIndicator({ onClick, color, textColor, label, className, ...props }) {
  return (
    <Box
      align="center"
      className={cn("BadgeIndicator", className, {
        [`BadgeIndicator--textColor--${textColor}`]: textColor,
        ["BadgeIndicator--clickable"]: !!onClick,
      })}
      onClick={onClick}
      {...props}
    >
      {color && (
        <span className={cn("BadgeIndicator__indicator", {
          [`BadgeIndicator__indicator-color--${color}`]: color,
        })}/>
      )}

      {label}
    </Box>
  );
}

BadgeIndicator.propTypes = {
  textColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.node,
};
