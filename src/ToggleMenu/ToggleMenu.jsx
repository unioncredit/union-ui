import "./ToggleMenu.scss";

import React, { useEffect, useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { ToggleMenuItem } from "./ToggleMenuItem";
import { propsToStyles } from "../spacing";

export function ToggleMenu({
  value,
  items,
  size,
  variant,
  onChange,
  initialActive,
  className,
  ...props
}) {
  const [width, setWidth] = useState(100 / items.length);
  const [activeIndex, setActiveIndex] = useState(initialActive);

  const handleClick = (index) => () => {
    setActiveIndex(index);
    onChange && onChange(items[index], index);
  };

  useEffect(() => {
    setWidth(100 / items.length);

    // if the toggle menu is controlled when the value changes we
    // update the state
    if (!value) return;

    const index = items.findIndex((item) => item.id === value);
    if (!!~index) {
      setActiveIndex(index);
    }
  }, [value, items.length]);

  return (
    <div
      style={propsToStyles(props)}
      className={cn("toggle-menu", className, {
        [`toggle-menu--size-${size}`]: size,
        [`toggle-menu--variant-${variant}`]: variant,
      })}
    >
      <div
        style={{
          left: `calc(${width * activeIndex}% + ${items.length - activeIndex}px)`,
          width: `calc(${width}% - 6px)`
        }}
        className="toggle-menu__item toggle-menu__item--slider"
      />

      {items.map(({ id, label, icon: Icon, ...item }, i) => (
        <ToggleMenuItem
          key={id || i}
          {...item}
          onClick={handleClick(i)}
          active={i === activeIndex}
        >
          {Icon && <Icon />}
          {label}
        </ToggleMenuItem>
      ))}
    </div>
  );
}

ToggleMenu.defaultProps = {
  initialActive: 0,
  variant: "squared",
  size: "regular",
};

ToggleMenu.propTypes = {
  initialActive: PropTypes.number,
  items: PropTypes.array,
  size: PropTypes.oneOf(["regular", "large"]),
  variant: PropTypes.oneOf(["squared", "rounded"]),
};
