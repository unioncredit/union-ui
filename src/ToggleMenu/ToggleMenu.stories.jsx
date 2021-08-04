import React from "react";

import { ToggleMenu } from "./ToggleMenu";

export default {
  component: ToggleMenu,
  title: "Components/ToggleMenu",
};

const items = [
  { label: "Deposit" },
  { label: "Withdraw" },
  { label: "Deposit" },
  { label: "Disabled", disabled: true },
];

const linkItems = items.map((item) => ({ ...item, as: "a", href: "#" }));

export const Default = () => <ToggleMenu items={items} />;

export const AsLink = () => <ToggleMenu items={linkItems} />;
