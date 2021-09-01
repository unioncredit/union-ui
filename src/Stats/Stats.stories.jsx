import React from "react";

import { Stats } from "./Stats";
import { Stat } from "./Stat";
import { Bar } from "../Bar";
import { Button } from "../Button";
import { Dai } from "../Dai";
import { Label } from "../Label";

export default {
  component: Stats,
  title: "Components/Stats",
};

export const All = () => (
  <>
    <Stat
      label="Total Stakes"
      value={
        <>
          <Dai />
          3200
        </>
      }
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
  <Stats
    buttons={[
      <Button icon="borrow" label="Borrow funds" />,
      <Button icon="repayment" variant="secondary" label="Make a payment" />,
    ]}
  >
    <Stat
      label="Credit Limit"
      value={
        <>
          <Dai />
          3200.62
        </>
      }
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
      value={
        <>
          <Dai />
          3200
        </>
      }
      caption={<Bar label="50%" percentage={50} />}
    />
    <Stat
      label="Available Credit"
      value={
        <>
          <Dai />
          260.54
        </>
      }
      caption={
        <Label size="small">
          <Dai />
          400.00 Unavailable
        </Label>
      }
    />
    <Stat label="Minimum Payment" value="$218.93" caption="Due 3 Jan 2021" />
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
