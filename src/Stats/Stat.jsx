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
      <Text className="stat__label">{label}</Text>
      <Heading className="stat__value">{value}</Heading>
      {cta}
      {caption && (
        <div className="stat__caption">
          {typeof caption === "string" ? (
            <Label size="small" as="p">
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
  value: PropTypes.string.isRequired,
  cta: PropTypes.node,
  caption: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
};
