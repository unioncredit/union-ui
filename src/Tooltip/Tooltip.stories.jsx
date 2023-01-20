import React from "react";

import { Tooltip } from "./Tooltip";
import { Text } from "../Text";
import { Box } from "../Box";
import { Button } from "../Button";
import Icon from "../Icons/icons/tooltip.svg";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
};

const content =
  "These are funds which are currently tied up elsewhere and as a result, not available to borrow at this time";

export const Default = () => (
  <>
    <Box mt="100px">
      <Text>
        The quick brown fox jumps over the lazy dog (top){" "}
        <Tooltip content={content}>
          <Icon width="16px" />
        </Tooltip>
      </Text>
    </Box>
    <Box mt="100px">
      <Text>
        The quick brown fox jumps over the lazy dog (right){" "}
        <Tooltip position="right" content={content}>
          <Icon width="16px" />
        </Tooltip>
      </Text>
    </Box>
    <Box mt="100px">
      <Text>
        The quick brown fox jumps over the lazy dog (bottom){" "}
        <Tooltip position="bottom" content={content}>
          <Icon width="16px" />
        </Tooltip>
      </Text>
    </Box>
    <Box mt="100px">
      <Text>
        The quick brown fox jumps over the lazy dog (left){" "}
        <Tooltip position="left" content={content}>
          <Icon width="16px" />
        </Tooltip>
      </Text>
    </Box>
    <Box mt="100px">
      <Text>
        The quick brown fox jumps over the lazy dog (left){" "}
        <Tooltip position="bottom" content={content} alwaysShow>
          <Button label="Open" />
        </Tooltip>
      </Text>
    </Box>
  </>
);
