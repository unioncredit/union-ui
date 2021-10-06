import React from "react";
import PropTypes from "prop-types";

import { Label } from "../Label";
import { Box } from "../Box";

import "./empty-state.scss";

export function EmptyState({ label, ...props }) {
  return (
    <Box className="empty-state" {...props} justify="center">
      <Label m={0} grey={400} align="center">
        {label}
      </Label>
    </Box>
  );
}

EmptyState.propTypes = {
  label: PropTypes.string.isRequired,
};
