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

const tooltipProps = {
  title: "Optional title",
  content: "Further details regarding the specific tooltip details",
};

export const Default = () => (
  <>
    <Box mt="150px">
      <Text>
        The quick brown fox jumps over the lazy dog (top){" "}
        <Tooltip {...tooltipProps}>
          <Icon width="16px" />
        </Tooltip>
      </Text>
    </Box>
    <Box mt="100px">
      <Text>
        The quick brown fox jumps over the lazy dog (right){" "}
        <Tooltip position="right" {...tooltipProps}>
          <Icon width="16px" />
        </Tooltip>
      </Text>
    </Box>
    <Box mt="100px">
      <Text>
        The quick brown fox jumps over the lazy dog (bottom){" "}
        <Tooltip position="bottom" {...tooltipProps}>
          <Icon width="16px" />
        </Tooltip>
      </Text>
    </Box>
    <Box mt="100px">
      <Text>
        The quick brown fox jumps over the lazy dog (left){" "}
        <Tooltip position="left" {...tooltipProps}>
          <Icon width="16px" />
        </Tooltip>
      </Text>
    </Box>
    <Box mt="100px">
      <Text>
        The quick brown fox jumps over the lazy dog (left){" "}
        <Tooltip position="bottom" {...tooltipProps} alwaysShow>
          <Button label="Open" />
        </Tooltip>
      </Text>
    </Box>
  </>
);
