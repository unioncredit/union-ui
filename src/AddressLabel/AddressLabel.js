import React from "react";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { Box } from "../Box";
import { Avatar } from "../Avatar";

function truncate(text) {
  return `${text.slice(0, 6)}...${text.slice(-6)}`;
}

export function AddressLabel({ imageSrc, address }) {
  return (
    <Box align="center">
      <Avatar src={imageSrc} />
      <Text mb="0" mx="8px">
        {truncate(address)}
      </Text>
    </Box>
  );
}

AddressLabel.propTypes = {
  text: PropTypes.string,
};
