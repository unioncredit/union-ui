import React from "react";

import { MultiStepTransaction } from "./MultiStepTransaction";
import { Box } from "../Box";

import CloudCheck from "../icons/cloudCheck.svg";

export default {
  component: MultiStepTransaction,
  title: "Components/MultiStepTransaction",
};

const items = [
  { number: 1, status: "selected" },
  { number: 2 },
  { number: 3 },
];

const items2 = [
  { number: 1, status: "complete" },
  { number: 2, status: "pending" },
  { number: 3 },
]

const items3 = [
  { number: 1, status: "complete" },
  { number: 2, status: "complete" },
  { number: 3, status: "selected" },
]

export const Default = () => (
  <>
    <Box mb="12px">
      <MultiStepTransaction
        items={items}
        action={{ variant: "primary", label: "Claim UNION" }}
        label="Unclaimed: 1.435 UNION"
      />
    </Box>
    <Box mb="12px">
      <MultiStepTransaction
        items={items2}
        action={{ variant: "primary", label: "Approving UNION..." }}
        toggle
        initialState={true}
        label="Gasless Approval"
      />
    </Box>
    <Box mb="12px">
      <MultiStepTransaction
        items={items3}
        action={{ variant: "primary", label: "Pay Membership Fee", icon: CloudCheck }}
        label="Membership Fee: 1.00 UNION"
      />
    </Box>
  </>
);