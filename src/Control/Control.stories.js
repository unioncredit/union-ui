import React from "react";

import { ControlGroup } from "./ControlGroup";
import { Box } from "../Box";
import { Control } from "./Control";

export default {
  component: ControlGroup,
  title: "Components/Control",
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

export const All = () => (
  <>
    <CheckBoxes />
    <RadioButtons />
    <ControlGroups />
  </>
)

export const CheckBoxes = () => (
  <Box mb="20px">
    <Control type="checkbox" disabled mr="8px" />
    <Control type="checkbox" mr="8px" />
    <Control type="checkbox" checked disabled mr="8px" />
    <Control type="checkbox" checked mr="8px" />
  </Box>
)

export const CheckBoxContent = () => {
  const widths = [200, 300, 400, 500];

  return widths.map(width => (
    <Box mb="20px" w={`${width}px`}>
      <Control type="checkbox" content="I understand this process will take a minimum of 7 days before tokens can be claimed on Ethereum" />
    </Box>
  ));
}

export const RadioButtons = () => (
  <Box mb="20px">
    <Control type="radio" disabled mr="8px" />
    <Control type="radio" mr="8px" />
    <Control type="radio" checked disabled mr="8px" />
    <Control type="radio" checked mr="8px" />
  </Box>
)

export const ControlGroups = () => (
  <>
    <Box mb="20px">
      <ControlGroup multiselect items={checkboxItems} onChange={onChange} />
    </Box>
    <Box mb="20px">
      <ControlGroup items={radioItems} onChange={onChange} />
    </Box>
  </>
);
