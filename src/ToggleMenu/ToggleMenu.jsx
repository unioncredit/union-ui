import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Box } from "../Box";
import { ToggleMenuItem } from "./ToggleMenuItem";

import "./toggle-menu.scss";

export function ToggleMenu({ items, variant, onChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => () => {
    setActiveIndex(index);
    onChange && onChange(items[index], index);
  };

  return (
    <Box
      direction="horizontal"
      className={cn("toggle-menu", {
        [`toggle-menu--${variant}`]: variant,
      })}
    >
      {items.map((item, i) => (
        <ToggleMenuItem
          {...item}
          onClick={handleClick(i)}
          active={i === activeIndex}
        >
          {item.label}
        </ToggleMenuItem>
      ))}
    </Box>
  );
}

ToggleMenu.propTypes = {
  items: PropTypes.array,
  variant: PropTypes.oneOf(["primary", "nav"]),
};
