import React from "react";

import { BadgeIndicator } from "./BadgeIndicator";
import { Box } from "../Box";

export default {
  component: BadgeIndicator,
  title: "Components/BadgeIndicator",
};

const badges = [
  {
    label: "Non-member",
  },
  {
    label: "Borrowing",
    color: "green500",
  },
  {
    label: "Member",
    color: "blue500",
  },
  {
    label: "Overdue",
    color: "orange500",
  },
  {
    label: "Write-Off",
    color: "red500",
    textColor: "red500",
  }
];

export const Default = () => (
  <>
    {badges.map(({ label, ...props }) => (
      <Box mb="20px">
        <BadgeIndicator label={label} onClick={() => alert(label)} {...props} />
      </Box>
    ))}
  </>
);
