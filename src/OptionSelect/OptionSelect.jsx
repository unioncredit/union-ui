import "./OptionSelect.scss";

import React, { useState } from "react";
import PropTypes from "prop-types";

import { Box } from "../Box";
import { OptionCard } from "../OptionCard";

export function OptionSelect({ initialActive, cards, onChange }) {
  const [selected, setSelected] = useState(initialActive);

  const handleChange = (index) => {
    setSelected(index);
    onChange && onChange(index);
  }

  return (
    <Box className="OptionSelect" direction="vertical">
      {cards.map((card, index) => (
        <OptionCard
          key={index}
          checked={selected === index}
          onClick={() => handleChange(index)}
          {...card}
        />
      ))}
    </Box>
  )
}

OptionSelect.propTypes = {
  initialActive: PropTypes.number,
  cards: PropTypes.arrayOf(PropTypes.node),
  onChange: PropTypes.func,
};

OptionSelect.defaultProps = {
  initialActive: 0,
};