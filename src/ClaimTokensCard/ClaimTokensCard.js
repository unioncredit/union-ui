import React from "react";
import "./claim-tokens-card.scss";
import cn from "classnames";
import Success from "../icons/success.svg";
import { Toggle } from "../Toggle";
import { Card } from "../Card";
import { Button } from "../Button";
import { LoadingSpinner } from "../LoadingSpinner";
import { CheckSuccessCloud, CheckSuccess } from "../CheckSuccess";

// Claim Tokens Card Component
export function ClaimTokensCard({
  stepNumber,
  isLoading,
  claimTokens,
  approveTokens,
  payMembershipFee,
  unclaimedTokens,
  fee,
}) {
  // Step numbers array
  const numbers = [1, 2, 3];

  // This variable renders text based on what step you are on
  const renderText =
    stepNumber === 1 ? (
      `Claim UNION`
    ) : stepNumber === 2 ? (
      `Approve UNION`
    ) : (
      <>
        <CheckSuccessCloud /> {`Pay Membership Fee`}
      </>
    );

  // This variable renders content based on what step you are on
  const renderContent =
    stepNumber === 1 ? (
      <>
        Gaseless Approval <Toggle />{" "}
      </>
    ) : stepNumber === 2 ? (
      `Unclaimed: ${unclaimedTokens}`
    ) : (
      `${fee} UNION Fee`
    );

  // Return and render elements of the component...
  return (
    <Card variant={"blue"} className={"claim-tokens-card"}>
      <div className={cn("claim-tokens-card__step-conatiner")}>
        <div className={"claim-tokens-card__step-numbers"}>
          {numbers.map((number) => (
            <div
              key={number}
              className={cn("claim-tokens-card__step", {
                "claim-tokens-card__step--active": stepNumber === number,
              })}
            >
              {stepNumber === number && isLoading ? (
                <LoadingSpinner
                  circleStroke={"#fff"}
                  pathStroke={"#60A5FA"}
                  size={22}
                />
              ) : stepNumber > number ? (
                <CheckSuccess />
              ) : (
                number
              )}
            </div>
          ))}
        </div>

        <div className={"claim-tokens-card__step-content"}>{renderContent}</div>
      </div>
      <Button
        className={"claim-tokens-card__buttons"}
        variant="primary"
        onClick={() => {
          // We can use async await here if needed
          if (stepNumber === 1) {
            claimTokens();
          } else if (stepNumber === 2) {
            approveTokens();
          } else {
            payMembershipFee();
          }
        }}
      >
        {renderText}
      </Button>
    </Card>
  );
}
