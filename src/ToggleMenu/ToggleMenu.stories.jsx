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
];

export const Default = () => <ToggleMenu items={items} />;
