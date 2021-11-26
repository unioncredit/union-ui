import React from "react";

import { TabNav } from "./TabNav";

export default {
  component: TabNav,
  title: "Components/TabNav",
};

const items = [
  { label: "Credit" },
  { label: "Contacts", active: true },
  { label: "Profile" },
  { label: "Governance", as: "a", href: "#" },
];

export const Default = () => <TabNav items={items} />;
