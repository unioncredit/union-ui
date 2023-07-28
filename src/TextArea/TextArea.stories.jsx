import React from "react";

import { Box } from "../Box";
import { TextArea } from "./TextArea";
import { Dai } from "../Dai";
import { SearchIcon } from "../Icons";

export default {
  component: TextArea,
  title: "Components/TextArea",
};

export const Inputs = () => (
  <>
    <Box mb="20px">
      <TextArea placeholder="Placeholder" onMaxClick={() => {}} />
    </Box>
    <Box mb="20px">
      <TextArea placeholder="Placeholder" />
    </Box>
    <Box mb="20px">
      <TextArea value="This is readonly" onMaxClick={() => {}} readonly />
    </Box>
    <Box mb="20px">
      <TextArea placeholder="Placeholder" onMaxClick={() => {}} disabled />
    </Box>
    <Box mb="20px">
      <TextArea label="TextArea label" placeholder="Placeholder" />
    </Box>
    <Box mb="20px">
      <TextArea
        label="TextArea label"
        rightLabel="Right label"
        caption="382.91 DAI Available"
        placeholder="Placeholder"
      />
    </Box>
    <Box mb="20px">
      <TextArea
        placeholder="Placeholder"
        onMaxClick={() => {}}
        prefix={<SearchIcon />}
      />
    </Box>

    <Box mb="20px">
      <TextArea
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
      <TextArea
        label="TextArea label"
        caption="382.91 DAI Available"
        placeholder="Placeholder"
        suffix={<Dai />}
      />
    </Box>

    <Box mb="20px">
      <TextArea
        label="Search"
        placeholder="Placeholder"
        prefix={<SearchIcon />}
      />
    </Box>

    <Box mb="20px">
      <TextArea
        label="TextArea label"
        error="input error"
        caption="382.91 DAI Available"
        placeholder="Placeholder"
      />
    </Box>

    <Box mb="20px">
      <TextArea
        label="TextArea label"
        error="input error"
        caption="382.91 DAI Available"
        placeholder="Placeholder"
        suffix={<Dai />}
      />
    </Box>
  </>
);

export const Disabled = () => (
  <>
    <Box mb="20px">
      <TextArea disabled placeholder="Placeholder" onMaxClick={() => {}} />
    </Box>
    <Box mb="20px">
      <TextArea
        disabled
        caption="Something here"
        placeholder="Placeholder"
        error="Something broke"
      />
    </Box>
  </>
);
