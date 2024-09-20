import React, { useState } from "react";
import { OptionSelect } from "./OptionSelect";

export default {
  component: OptionSelect,
  title: "Components/OptionSelect",
};

export const Default = () => {
  const [customAmount, setCustomAmount] = React.useState("");

  return (
    <OptionSelect
      onChange={(index) => console.log("OptionSelect index: ", index)}
      cards={[
        {
          title: "Pay-off entire loan",
          content: "Make a payment equal to the outstanding balance",
          token: "dai",
          value: "1.00",
        },
        {
          title: "Pay-off entire loan",
          content: "Make a payment equal to the outstanding balance",
          token: "dai",
          value: "1.00",
        },
        {
          title: "Pay-off entire loan",
          content: "Make a payment equal to the outstanding balance",
          token: "dai",
          value: "1.00",
          tooltip: {
            content: "TODO",
            shrink: true,
          }
        },
        {
          title: "Custom amount",
          content: "Enter a custom amount to repay",
          token: "dai",
          value: "",
          inputProps: {
            w: "150px",
            value: customAmount,
            onChange: (e) => {
              console.log(e.target.value);
              setCustomAmount(e.target.value);
            },
          }
        }
      ]}
    />
  )
};