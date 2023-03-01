import React from "react";

import { Stat } from "./Stat";
import { Button } from "../Button";
import { Dai } from "../Dai";
import { Box } from "../Box";

export default {
  component: Stat,
  title: "Components/Stats",
};

export const Sizes = () => {
  const sizes = ["large", "regular", "small", "x-small"];

  return sizes.map(size => (
    <Box mt="65px">
      <Stat
        size={size}
        title="Balance Owed"
        value="100.59"
        token="dai"
        subtitle="Due in 24d 6h"
        subtitleTooltip={{
          content: "This is your owed balance"
        }}
      />
    </Box>
  ));
};

export const Tokens = () => {
  const tokens = ["", "dai", "union"];

  return tokens.map(token => (
    <Box mt="65px">
      <Stat
        title="Balance Owed"
        value="100.59"
        token={token}
        subtitle="Due in 24d 6h"
        subtitleTooltip={{
          content: "This is your owed balance"
        }}
      />
    </Box>
  ));
};

export const Tooltips = () => {
  const tooltips = [
    {},
    {
      titleTooltip: {
        content: "This is a titleTooltip prop"
      }
    },
    {
      subtitleTooltip: {
        content: "This is a subtitleTooltip prop"
      }
    }
  ];

  return tooltips.map(tooltipProps => (
    <Box mt="65px">
      <Stat
        title="Balance Owed"
        value="100.59"
        subtitle="Due in 24d 6h"
        {...tooltipProps}
      />
    </Box>
  ));
};