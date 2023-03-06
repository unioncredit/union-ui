import React from "react";

import { NumericalBlock } from "./NumericalBlock";
import { Box } from "../Box";

export default {
  component: NumericalBlock,
  title: "Components/NumericalBlock",
};

export const Sizes = () => {
  const sizes = ["large", "regular", "small", "x-small"];

  return sizes.map(size => (
    <Box mt="65px">
      <NumericalBlock
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
      <NumericalBlock
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
      <NumericalBlock
        title="Balance Owed"
        value="100.59"
        subtitle="Due in 24d 6h"
        {...tooltipProps}
      />
    </Box>
  ));
};

export const ProgressBars = () => {
  const bars = [
    { barProps: { percentage: 25 } },
    { barProps: { percentage: 50 } },
    { barProps: { percentage: 75 }, subtitle: "With a subtitle" },
    { barProps: { percentage: 100 }, subtitle: "With a subtitle", subtitleTooltip: {
        content: "And a tooltip!",
      }
    },
  ];

  return bars.map(props => (
    <Box mb="50px">
      <NumericalBlock
        title="Statistic"
        value="420.69"
        {...props}
      />
    </Box>
  ));
}

export const TitleProps = () => {
  const titleProps = [
    {
      subtitleProps: {
        style: {
          color: "#2563eb",
        },
      }
    }
  ];

  return titleProps.map(props => (
    <Box mt="65px">
      <NumericalBlock
        title="Balance Owed"
        value="100.59"
        subtitle="Due in 24d 6h"
        {...props}
      />
    </Box>
  ));
}