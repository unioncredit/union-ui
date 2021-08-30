import React from "react";

import { ContextMenu } from "./ContextMenu";

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
    <ContextMenu items={items} />
  </div>
);
