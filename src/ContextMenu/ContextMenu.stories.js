import React from "react";

import { ContextMenu } from "./ContextMenu";
import { Button } from "../Button";
import { Box } from "../Box";

export default {
  component: ContextMenu,
  title: "Components/ContextMenu",
};

const items = [{ label: "Blog" }, { label: "Twitter" }];

export const Default = () => (
  <div style={{ marginLeft: "200px" }}>
    <Box mb="160px">
      <ContextMenu
        items={items}
        position="left"
        after={<Button size="small" label="Claim UNION" />}
      />
    </Box>
    <Box mb="160px">
      <ContextMenu
        items={items}
        position="right"
        after={<Button size="small" label="Claim UNION" />}
      />
    </Box>
    <Box mb="160px">
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
    <Box mb="160px">
      <ContextMenu
        items={items.map((item) => ({ ...item, as: "h1" }))}
        position="right"
        after={<Button size="small" label="Claim UNION" />}
      />
    </Box>
  </div>
);
