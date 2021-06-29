import React from "react";
import PropTypes from "prop-types";

import { Box } from "../Box";
import { Text } from "../Text";
import { Heading } from "../Heading";
import { Button } from "../Button";
import { Label } from "../Label";

import "./stat.scss";

export function Stat({ label, value, cta, caption }) {
  return (
    <Box className="stat" direction="vertical">
      <Text className="stat__label">{label}</Text>
      <Heading className="stat__value">{value}</Heading>
      {cta}
      {caption && (
        <Label size="small" as="p" className="stat__caption">
          {caption}
        </Label>
      )}
    </Box>
  );
}

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cta: PropTypes.node,
  caption: PropTypes.string,
};
