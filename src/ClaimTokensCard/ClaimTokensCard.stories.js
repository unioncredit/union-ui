import React, { useState } from "react";
import { ClaimTokensCard } from "./ClaimTokensCard";

export const Default = (args) => {
  // Everything you see here is Props
  // We can use the useState and functions below as props on other components
  // e.g if we were going to use this in real application we can create our async functions and states there instead of here
  // This is just a test for storybook :)
  const [stepNumber, setStepNumber] = useState(1);

  // Claim tokens function (Step 1)
  const claimTokens = async () => {
    // This is first step
    // You can run any async function and try and catch...
    // Put your line of code here which you want to claim tokens

    setStepNumber(stepNumber + 1);
  };

  // Claim tokens function (Step 2)
  const approveTokens = async () => {
    // This is second step
    // Put your line of code here which you want to approve tokens

    setStepNumber(stepNumber + 1);
  };

  // Claim tokens function (Step 3)
  const payMembershipFee = async () => {
    // No step needs to be incremented here. Since it's the last step :)
  };

  return (
    <>
      <ClaimTokensCard
        claimTokens={claimTokens}
        approveTokens={approveTokens}
        payMembershipFee={payMembershipFee}
        stepNumber={stepNumber}
        unclaimedTokens={1.435}
        fee={1}
        {...args}
      />
    </>
  );
};

export default {
  component: ClaimTokensCard,
  title: "Components/ClaimTokensCard",

  argTypes: {
    isLoading: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

Default.args = {
  isLoading: false,
};
