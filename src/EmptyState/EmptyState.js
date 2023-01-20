import React from "react";
import PropTypes from "prop-types";

import { Box } from "../Box";
import { Text } from "../Text";

import "./empty-state.scss";

export function EmptyState({ label, ...props }) {
  return (
    <Box className="empty-state" {...props} justify="center">
      <Text as="label" m={0} grey={400} align="center">
        {label}
      </Text>
    </Box>
  );
}

EmptyState.propTypes = {
  label: PropTypes.string.isRequired,
};
