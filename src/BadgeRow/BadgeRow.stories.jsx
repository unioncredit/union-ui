import React from "react";

import { BadgeRow } from "./BadgeRow";
import { Badge } from "../Badge";
import { BadgeIndicator } from "../BadgeIndicator";

export default {
  component: BadgeRow,
  title: "Components/BadgeRow",
};

export const Colors = () => {
  const colors = ["blue", "purple", "green", "yellow", "red", "grey"];

  return (
    <BadgeRow mb="10px">
      {colors.map((color) => (
        <Badge label={color} color={color} text="capitalize" />
      ))}
    </BadgeRow>
  )
};

export const Monotone = () => {
    const badges = [
      { color: "grey", label: "Badge Three" },
      { color: "grey", label: "Badge Two" },
      { color: "dark-grey", label: "Badge One" },
    ];

  return (
    <BadgeRow mb="10px">
      {badges.map((props) => (
        <Badge {...props} />
      ))}
    </BadgeRow>
  )
}

export const Indicators = () => {
  return (
    <BadgeRow mb="10px">
      <Badge color="grey" label="0x1234...5678" />
      <BadgeIndicator color="red500" label="Write-Off" />
    </BadgeRow>
  )
};

export const All = () => (
  <>
    <Colors />
    <Monotone />
    <Indicators />
  </>
);
