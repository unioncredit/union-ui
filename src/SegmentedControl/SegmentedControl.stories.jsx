import React, { useState } from "react";

import { SegmentedControl } from "./SegmentedControl";
import { Box } from "../Box";
import { DepositIcon } from "../Icons";

export default {
  component: SegmentedControl,
  title: "Components/SegmentedControl",
};

const items = [
  { id: "0", label: "Deposit", icon: DepositIcon },
  { id: "3", label: "Disabled", disabled: true },
  { id: "2", label: "Tx" },
  { id: "1", label: "Withdraw" },
];

const sizes = [
  "regular",
  "large",
];

export const All = () => (
  <>
    <Squared />
    <Rounded />
  </>
);

export const Squared = () => (
  sizes.map((size) => (
    <Box direction="vertical" mb="20px">
      <SegmentedControl size={size} items={items} />
    </Box>
  ))
);

export const Rounded = () => (
  sizes.map((size) => (
    <Box direction="vertical" mb="20px">
      <SegmentedControl size={size} items={items} variant="rounded" />
    </Box>
  ))
);

export const Controlled = () => {
  const [state, setState] = useState(items[0].id);

  const toggle = () => {
    if (state === items[0].id) {
      setState(items[1].id);
    } else {
      setState(items[0].id);
    }
  };
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={toggle}>Toggle</button>
      </div>
      <SegmentedControl items={items.slice(0, 2)} value={state} />
    </>
  );
};
