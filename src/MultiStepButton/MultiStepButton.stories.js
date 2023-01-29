import React, { useState } from "react";

import { MultiStepButton } from "./MultiStepButton";
import { Box } from "../Box";

import CloudCheck from "../Icons/icons/cloudCheck.svg";
import { Toggle } from "../Toggle";

export default {
  component: MultiStepButton,
  title: "Components/MultiStepButton",
};

const items = [{ number: 1, status: "selected" }, { number: 2 }, { number: 3 }];

const items2 = [
  { number: 1, status: "complete" },
  { number: 2, status: "pending" },
  { number: 3 },
];

const items3 = [
  { number: 1, status: "complete" },
  { number: 2, status: "complete" },
  { number: 3, status: "selected" },
];

export const Default = () => {
  const [state, setState] = useState(true);

  const GaslessToggle = () => {
    return (
      <Toggle
        color="primary"
        label="Gasless approval"
        labelPosition="start"
        onChange={(active) => console.log("Toggled: ", active)}
      />
    );
  };

  return (
    <Box w="320px" direction="vertical" align="stretch">
      <button onClick={() => setState((x) => !x)}>toggle</button>
      <Box mb="12px" mt="20px">
        <MultiStepButton
          items={items}
          action={{ variant: "primary", label: "Claim UNION" }}
          label="Unclaimed: 1.435 UNION"
        />
      </Box>
      <Box mb="12px">
        <MultiStepButton
          items={items2}
          action={{
            variant: "primary",
            label: "Approving UNION...",
            disabled: true,
          }}
          showSteps={state}
          initialState={true}
          toggle={GaslessToggle}
        />
      </Box>
      <Box mb="12px">
        <MultiStepButton
          items={items3}
          action={{
            variant: "primary",
            label: "Pay Membership Fee",
            icon: CloudCheck,
          }}
          label="Membership Fee: 1.00 UNION"
        />
      </Box>
    </Box>
  );
};
