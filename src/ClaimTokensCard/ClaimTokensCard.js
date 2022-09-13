import React from "react";
import "./claim-tokens-card.scss";
import cn from "classnames";
import { Loading } from "../Loading";
import Success from "../icons/success.svg";
import { Toggle } from "../Toggle";

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
        <Success style={{ width: 20, marginRight: 8 }} /> {`Pay Membership Fee`}
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
    <div className={"claim-tokens-card"}>
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
                <Loading style={{ margin: 15 }} />
              ) : stepNumber > number ? (
                `✔`
              ) : (
                number
              )}
            </div>
          ))}
        </div>

        <div className={"claim-tokens-card__step-content"}>{renderContent}</div>
      </div>
      <button
        className={"claim-tokens-card__buttons"}
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
      </button>
    </div>
  );
}
