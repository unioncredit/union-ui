import React from "react";
import { Box } from "../Box";

import { Input } from "./Input";
import { InputRow } from "./InputRow";
import { Button } from "../Button";
import { Dai } from "../Dai";
import { Usdc } from "../Usdc";

import { SearchIcon } from "../Icons";

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
      <Input type="number" placeholder="Placeholder" />
    </Box>
    <Box mb="20px">
      <Input value="This is readonly" onMaxClick={() => {}} readonly />
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
        rightLabel="Right label"
        caption="382.91 DAI Available"
        placeholder="Placeholder"
      />
    </Box>
    <Box mb="20px">
      <Input
        placeholder="Placeholder"
        onMaxClick={() => {}}
        prefix={<SearchIcon />}
      />
    </Box>

    <Box mb="20px">
      <Input
        label="Clickable Caption"
        caption={
          <>
            <Dai value={382.91} /> Available
          </>
        }
        onCaptionButtonClick={() => alert("clicked")}
        placeholder="Placeholder"
      />
    </Box>

    <Box mb="20px">
      <Input
        label="Clickable Caption"
        caption={
          <>
            <Usdc value={382.91} /> Available
          </>
        }
        onCaptionButtonClick={() => alert("clicked")}
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

    <InputRow align="center" mb="20px">
      <Input
        label="Input label"
        caption="382.91 USDC Available"
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
        suffix={<Dai />}
      />
    </Box>

    <Box mb="20px">
      <Input
        label="Input label"
        caption="382.91 USDC Available"
        placeholder="Placeholder"
        suffix={<Usdc />}
      />
    </Box>

    <Box mb="20px">
      <Input label="Search" placeholder="Placeholder" prefix={<SearchIcon />} />
    </Box>

    <Box mb="20px">
      <Input
        label="Input label"
        error="input error"
        caption="382.91 DAI Available"
        placeholder="Placeholder"
      />
    </Box>

    <Box mb="20px">
      <Input
        label="Input label"
        error="input error"
        caption="382.91 USDC Available"
        placeholder="Placeholder"
      />
    </Box>

    <Box mb="20px">
      <Input
        label="Input label"
        error="input error"
        caption="382.91 DAI Available"
        placeholder="Placeholder"
        suffix={<Dai />}
      />
    </Box>

    <Box mb="20px">
      <Input
        label="Input label"
        error="input error"
        caption="382.91 USDC Available"
        placeholder="Placeholder"
        suffix={<Usdc />}
      />
    </Box>
  </>
);

export const Disabled = () => (
  <>
    <Box mb="20px">
      <Input disabled placeholder="Placeholder" onMaxClick={() => {}} />
    </Box>
    <Box mb="20px">
      <Input
        disabled
        type="number"
        caption="Something here"
        placeholder="Placeholder"
        error="Something broke"
      />
    </Box>
  </>
);
