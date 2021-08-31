import React from "react";

import { Tabs } from "./Tabs";

export default {
  component: Tabs,
  title: "Components/Tabs",
};

const items = [
  { label: "Primary" },
  { label: "Label 2" },
  { label: "Label 3" },
  { label: "Disabled", disabled: true },
];

export const Default = () => (
  <Tabs items={items} onChange={(x) => alert(x.label)} />
);
export const Secondary = () => <Tabs items={items} variant="secondary" />;

export const Wrap = () => (
  <Tabs items={[...items, ...items, ...items]} variant="secondary" />
);
