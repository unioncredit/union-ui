import React from "react";

import { Stat } from "./Stat";
import { Button } from "../Button";
import { Dai } from "../Dai";
import { Box } from "../Box";

export default {
  component: Stat,
  title: "Components/Stats",
};

export const All = () => (
  <>
    <Box>
      <Stat
        mt="120px"
        label="Total Stakes"
        tooltip="This is what a tooltip looks like"
        value={
          <>
            3200
            <Dai />
          </>
        }
        after="$100.00 frozen"
      />
    </Box>
    <Box mt="40px">
      <Stat
        label="Total Stakes"
        size="large"
        value={
          <>
            3200
            <Dai />
          </>
        }
        after="$100.00 frozen"
      />
    </Box>
    <Box mt="40px">
      <Stat
        align="center"
        label="Total Stakes"
        value={
          <>
            3200
            <Dai />
          </>
        }
        after="$100.00 frozen"
      />
    </Box>
    <Box mt="40px">
      <Stat
        size="extra-small"
        align="center"
        label="Total Stakes"
        value={
          <>
            3200
            <Dai />
          </>
        }
        after="$100.00 frozen"
      />
    </Box>
  </>
);

export const CaptionAsNode = () => (
  <>
    <Stat
      label="Total Stakes"
      value="$3200"
      caption={<div style={{ color: "red" }}>Caption</div>}
      cta={
        <Button
          variant="pill"
          icon="chevron"
          iconPosition="end"
          label="Request Extra"
        />
      }
    />
    <Stat
      label={<div style={{ color: "red" }}>Label</div>}
      value="$3200"
      caption={<div style={{ color: "red" }}>Caption</div>}
      cta={
        <Button
          variant="pill"
          icon="chevron"
          iconPosition="end"
          label="Request Extra"
        />
      }
    />
  </>
);
