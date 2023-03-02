import "./SegmentedControl.scss";

import React, { useEffect, useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { SegmentedControlItem } from "./SegmentedControlItem";
import { propsToStyles } from "../spacing";

export function SegmentedControl({
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
      className={cn("SegmentedControl", className, {
        [`SegmentedControl--size-${size}`]: size,
        [`SegmentedControl--variant-${variant}`]: variant,
      })}
    >
      <div className="SegmentedControl__wrap">
        <div
          style={{
            left: `calc(${width * activeIndex}%)`,
            width: `calc(${width}% - 4px)`
          }}
          className="SegmentedControl__item SegmentedControl__item--slider"
        />

        {items.map(({ id, label, icon: Icon, ...item }, i) => (
          <SegmentedControlItem
            key={id || i}
            {...item}
            onClick={handleClick(i)}
            active={i === activeIndex}
          >
            {Icon && <Icon />}
            {label}
          </SegmentedControlItem>
        ))}
      </div>
    </div>
  );
}

SegmentedControl.defaultProps = {
  initialActive: 0,
  variant: "squared",
  size: "regular",
};

SegmentedControl.propTypes = {
  initialActive: PropTypes.number,
  items: PropTypes.array,
  size: PropTypes.oneOf(["regular", "large"]),
  variant: PropTypes.oneOf(["squared", "rounded"]),
};
