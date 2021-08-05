import React from "react";

import { Stats } from "./Stats";
import { Stat } from "./Stat";
import { Bar } from "../Bar";
import { Box } from "../Box";
import { Button, ButtonRow } from "../Button";

export default {
  component: Stats,
  title: "Components/Stats",
};

export const All = () => (
  <>
    <Stat
      label="Total Stakes"
      value="$3200"
      caption="$100.00 frozen"
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

export const StatsBar = () => (
  <Stats>
    <Box>
      <Stat
        label="Total Stakes"
        value="$3200"
        cta={
          <Button
            variant="pill"
            icon="chevron"
            iconPosition="end"
            label="Credit Limit"
          />
        }
      />
      <Stat
        label="Balance owed"
        value="$1600"
        caption={<Bar label="50%" percentage={50} />}
      />
      <Stat
        label="Available Credit"
        value="$1200.83"
        caption="$400.00 Unavailable"
      />
      <Stat label="Minimum Due" value="$218.93" caption="Due 3 Jan 2021" />
    </Box>
    <ButtonRow direction="vertical">
      <Button icon="borrow" label="Borrow funds" />
      <Button icon="repayment" variant="secondary" label="Make a payment" />
    </ButtonRow>
  </Stats>
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
