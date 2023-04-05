import "./ExpandingInfo.scss";

import cn from "classnames";
import React, { useState } from "react";
import PropTypes from "prop-types";

import { Box } from "../Box";
import { Text } from "../Text";
import { propsToStyles } from "../spacing";
import DropdownArrowIcon from "../Icons/internal/DropdownArrow.svg";

export function ExpandingInfo({
  icon: Icon,
  title,
  children,
  className,
  ...props
}) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      direction="vertical"
      style={propsToStyles(props)}
      className={cn("ExpandingInfo", className, {
      "open": open,
    })}>
      <Box as="header" align="center" className="ExpandingInfo__header" onClick={() => setOpen(!open)}>
        {Icon && <Icon className="ExpandingInfo__icon" />}
        <Text m={0} size="medium" weight="medium">{title}</Text>

        <Box className="ExpandingInfo__arrow" justify="center" align="center">
          <DropdownArrowIcon  />
        </Box>
      </Box>

      <div className="ExpandingInfo__content">
        {children}
      </div>
    </Box>
  )
}

ExpandingInfo.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

// ExpandingInfo.defaultProps = {
//
// };