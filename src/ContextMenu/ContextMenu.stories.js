import React from "react";

import { ContextMenu } from "./ContextMenu";
import { Button } from "../Button";
import { Box } from "../Box";
import { RepayIcon } from "../Icons";

export default {
  component: ContextMenu,
  title: "Components/ContextMenu",
};

const items = [
  { label: "Repayments", icon: RepayIcon },
  { label: "Blog" },
  { label: "Discord" },
  { label: "Twitter" }
];

export const Default = () => (
  <div style={{ marginLeft: "200px" }}>
    <Box mb="240px">
      <ContextMenu
        items={items}
        position="right"
        after={<Button size="pill" label="Claim UNION" />}
      />
    </Box>
    <Box mb="240px">
      <ContextMenu
        items={items}
        position="right"
        after={<Button size="pill" label="Claim UNION" />}
      />
    </Box>
    <Box mb="240px">
      <ContextMenu
        button={(toggleOpen) => (
          <Button
            onClick={toggleOpen}
            variant="secondary"
            label="Menu"
            icon="dropdown-arrow"
            iconPosition="end"
          />
        )}
        items={items}
        position="right"
      />
    </Box>
    <Box mb="240px">
      <ContextMenu
        items={items.map((item) => ({ ...item, as: "h1" }))}
        position="right"
        after={<Button size="pill" label="Claim UNION" />}
      />
    </Box>
  </div>
);
