import React from "react";

import { ContextMenu } from "./ContextMenu";
import { Button } from "../Button";

export default {
  component: ContextMenu,
  title: "Components/ContextMenu",
};

const items = [
  { label: "Blog" },
  { label: "Twitter" },
  { label: "Discord" },
  { label: "Blog" },
];

export const Default = () => (
  <div style={{ marginLeft: "200px" }}>
    <ContextMenu
      items={items}
      after={<Button size="small" label="Claim UNION" />}
    />
  </div>
);
