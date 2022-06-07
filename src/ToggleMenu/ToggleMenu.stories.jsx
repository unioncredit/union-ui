import React, { useState } from "react";

import { ToggleMenu } from "./ToggleMenu";
import { Box } from "../Box";

export default {
  component: ToggleMenu,
  title: "Components/ToggleMenu",
};

const items = [
  { id: "0", label: "Deposit" },
  { id: "1", label: "Withdraw" },
  { id: "2", label: "Deposit" },
  { id: "3", label: "Disabled", disabled: true },
];

const linkItems = items.map((item) => ({ ...item, as: "a", href: "#" }));

export const Default = () => (
  <>
    <Box direction="vertical" mb="20px">
      <ToggleMenu items={items} />
    </Box>
    <Box direction="vertical" mb="20px">
      <ToggleMenu items={items} variant="secondary" />
    </Box>
    <Box direction="vertical" mb="20px">
      <ToggleMenu packed items={items} />
    </Box>
  </>
);

export const AsLink = () => <ToggleMenu items={linkItems} />;

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
      <ToggleMenu items={items.slice(0, 2)} value={state} />
    </>
  );
};
