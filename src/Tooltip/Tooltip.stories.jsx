import React from "react";

import { Tooltip } from "./Tooltip";
import { Label } from "../Label";
import { Box } from "../Box";

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
        <Tooltip content={content} />
      </Label>
    </Box>
    <Box mt="100px">
      <Label as="p">
        The quick brown fox jumps over the lazy dog (right){" "}
        <Tooltip position="right" content={content} />
      </Label>
    </Box>
    <Box mt="100px">
      <Label as="p">
        The quick brown fox jumps over the lazy dog (bottom){" "}
        <Tooltip position="bottom" content={content} />
      </Label>
    </Box>
    <Box mt="100px">
      <Label as="p">
        The quick brown fox jumps over the lazy dog (left){" "}
        <Tooltip position="left" content={content} />
      </Label>
    </Box>
  </>
);
