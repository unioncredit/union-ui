import React from "react";
import PropTypes from "prop-types";

import { Box } from "../Box";
import { Text } from "../Text";
import { Heading } from "../Heading";
import { Label } from "../Label";

import "./stat.scss";

export function Stat({ label, value, cta, caption }) {
  return (
    <Box className="stat" direction="vertical">
      <div className="stat__label">
        {typeof label === "string" ? <Text mb="0">{label}</Text> : label}
      </div>
      <Heading className="stat__value">{value}</Heading>
      {cta}
      {caption && (
        <div className="stat__caption">
          {typeof caption === "string" ? (
            <Label size="small" as="p" mb={0}>
              {caption}
            </Label>
          ) : (
            caption
          )}
        </div>
      )}
    </Box>
  );
}

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  cta: PropTypes.node,
  caption: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
};
