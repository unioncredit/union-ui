import React from "react";

import { Tooltip } from "./Tooltip";
import { Label } from "../Label";
import { Box } from "../Box";
import { Button } from "../Button";
import Icon from "../icons/tooltip.svg";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
};

const content =
  "These are funds which are currently tied up elsewhere and as a result, not available to borrow at this time";

export const Default = () => (
  <>
    <Box mt="100px">
      <Label as="p">
        The quick brown fox jumps over the lazy dog (top){" "}
        <Tooltip content={content}>
          <Icon width="16px" />
        </Tooltip>
      </Label>
    </Box>
    <Box mt="100px">
      <Label as="p">
        The quick brown fox jumps over the lazy dog (right){" "}
        <Tooltip position="right" content={content}>
          <Icon width="16px" />
        </Tooltip>
      </Label>
    </Box>
    <Box mt="100px">
      <Label as="p">
        The quick brown fox jumps over the lazy dog (bottom){" "}
        <Tooltip position="bottom" content={content}>
          <Icon width="16px" />
        </Tooltip>
      </Label>
    </Box>
    <Box mt="100px">
      <Label as="p">
        The quick brown fox jumps over the lazy dog (left){" "}
        <Tooltip position="left" content={content}>
          <Icon width="16px" />
        </Tooltip>
      </Label>
    </Box>
    <Box mt="100px">
      <Label as="p">
        The quick brown fox jumps over the lazy dog (left){" "}
        <Tooltip position="bottom" content={content} alwaysShow>
          <Button label="Open" />
        </Tooltip>
      </Label>
    </Box>
  </>
);
