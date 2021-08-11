import React from "react";
import { Box } from "../Box";

import { Input } from "./Input";
import { Control } from "../Control";
import { InputRow } from "./InputRow";
import { Button } from "../Button";

export default {
  component: Input,
  title: "Components/Input",
};

export const Inputs = () => (
  <>
    <Box mb="20px">
      <Input placeholder="Placeholder" onMaxClick={() => {}} />
    </Box>
    <Box mb="20px">
      <Input placeholder="Placeholder" onMaxClick={() => {}} disabled />
    </Box>
    <Box mb="20px">
      <Input label="Input label" placeholder="Placeholder" />
    </Box>
    <Box mb="20px">
      <Input
        label="Input label"
        caption="382.91 DAI Available"
        placeholder="Placeholder"
      />
    </Box>

    <Box mb="20px">
      <Input
        label="Clickable Caption"
        caption="382.91 DAI Available"
        onCaptionClick={() => alert("clicked")}
        placeholder="Placeholder"
      />
    </Box>

    <InputRow align="center" mb="20px">
      <Input
        label="Input label"
        caption="382.91 DAI Available"
        placeholder="Placeholder"
        onMaxClick={() => {}}
        cta={<Button label="Withdraw" />}
      />
    </InputRow>

    <Box mb="20px">
      <Input
        label="Input label"
        caption="382.91 DAI Available"
        placeholder="Placeholder"
        suffix="DAI"
      />
    </Box>

    <Box mb="20px">
      <Input
        label="Input label"
        error="input error"
        caption="382.91 DAI Available"
        placeholder="Placeholder"
        suffix="DAI"
      />
    </Box>
  </>
);

export const Controls = () => (
  <>
    <Box mb="20px">
      <Control type="checkbox" checked mr="8px" />
      <Control type="checkbox" checked disabled mr="8px" />
      <Control type="checkbox" indeterminate mr="8px" />
      <Control type="checkbox" />
    </Box>
    <Box mb="20px">
      <Control type="radio" checked mr="8px" />
      <Control type="radio" checked disabled mr="8px" />
      <Control type="radio" indeterminate mr="8px" />
      <Control type="radio" />
    </Box>
    <Box mb="20px">
      <Control type="checkbox" checked label="Checkbox Label" />
    </Box>
  </>
);
