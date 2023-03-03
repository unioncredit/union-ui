import React, { useState } from "react";
import PropTypes from "prop-types";

import { Box } from "../Box";
import { Control } from "./Control";

export function ControlGroup({
  items,
  multiselect,
  onChange,
  initialSelected,
}) {
  const [selected, setSelected] = useState(
    initialSelected || multiselect ? [] : null
  );

  const onClick = (id) => () => {
    const newSelected = multiselect
      ? !!~selected.indexOf(id)
        ? selected.filter((_id) => _id !== id)
        : [...selected, id]
      : id;

    setSelected(newSelected);
    typeof onChange === "function" && onChange(newSelected);
  };

  return (
    <Box className="control-group" direction="vertical">
      {items.map((item) => {
        const active = multiselect
          ? selected.includes(item.id)
          : item.id === selected;
        return (
          <Box mb="8px">
            <Control
              key={item.id}
              {...item}
              onClick={onClick(item.id)}
              checked={active}
            />
          </Box>
        );
      })}
    </Box>
  );
}

ControlGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["checkbox", "radio"]),
      disabled: PropTypes.bool,
      checked: PropTypes.bool,
      indeterminate: PropTypes.bool,
      label: PropTypes.string,
    })
  ),
  initialSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
