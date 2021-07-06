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

export const Default = () => <ToggleMenu items={items} />;
