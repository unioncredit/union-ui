import React from "react";

import { ControlGroup } from "./ControlGroup";
import { Box } from "../Box";

export default {
  component: ControlGroup,
  title: "Components/ControlGroup",
};

const items = [
  { label: "Option 1", id: "option-1" },
  { label: "Option 2", id: "option-2" },
  { label: "Option 3", id: "option-3" },
];

const radioItems = items.map((x) => ({ ...x, type: "radio" }));
const checkboxItems = items.map((x) => ({ ...x, type: "checkbox" }));

const onChange = (...args) => {
  console.log(...args);
};

export const Default = () => (
  <>
    <Box mb="20px">
      <ControlGroup multiselect items={checkboxItems} onChange={onChange} />
    </Box>
    <Box mb="20px">
      <ControlGroup items={radioItems} onChange={onChange} />
    </Box>
  </>
);
