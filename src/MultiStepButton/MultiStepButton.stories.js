import React, { useState } from "react";

import { MultiStepButton } from "./MultiStepButton";
import { Box } from "../Box";

import CloudCheck from "../icons/cloudCheck.svg";

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
  const [state, setState] = useState(false);

  return (
    <>
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
          label="Gasless Approval"
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
    </>
  );
};

