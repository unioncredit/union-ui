import React from "react";

import { Box } from "../Box";
import { Button } from "./Button";
import { ButtonRow } from "../ButtonRow";
import { RepaymentIcon } from "../Icons";

export default {
  component: Button,
  title: "Components/Button",
};

const sizes = [
  "large",
  "regular",
  "small",
  "thin",
  "pill",
];

const colors = [
  "primary",
  "secondary",
  "red",
];

const variants = [
  { variant: "regular" },
  { variant: "light" },
  { variant: "dark" },
  { disabled: true },
  { loading: true },
];

export const All = () => (
  <>
    {sizes.map((size) => (
      <Box mb="30px" direction="vertical">
        {colors.map((color) => (
          <ButtonRow mb="20px">
            {variants.map((props) => (
              <Button size={size} icon={RepaymentIcon} color={color} label={`Button Label`} {...props} />
            ))}
          </ButtonRow>
        ))}
      </Box>
    ))}
  </>
)

export const Primary = () => (
  <ButtonRow>
    {variants.map((props) => (
      <Button icon={RepaymentIcon} color="primary" label={`Button Label`} {...props} />
    ))}
  </ButtonRow>
);

export const Secondary = () => (
  <ButtonRow>
    {variants.map((props) => (
      <Button icon={RepaymentIcon} color="secondary" label={`Button Label`} {...props} />
    ))}
  </ButtonRow>
);

export const Red = () => (
  <ButtonRow>
    {variants.map((props) => (
      <Button icon={RepaymentIcon} color="red" label={`Button Label`} {...props} />
    ))}
  </ButtonRow>
);

export const Sizes = () => (
  <ButtonRow>
    {sizes.map((size) => (
      <Button icon={RepaymentIcon} size={size} label={`Button Label`} />
    ))}
  </ButtonRow>
);

export const Label = () => {
  const words = [
    "",
    "The",
    "The quick",
    "The quick brown",
    "The quick brown fox",
  ];

  return (
    <ButtonRow>
      {words.map((word) => (
        <Button icon={RepaymentIcon} label={word} />
      ))}
    </ButtonRow>
  )
};

export const Icon = () => {
  const variations = [
    {},
    { icon: RepaymentIcon, iconPosition: "start" },
    { icon: RepaymentIcon, iconPosition: "end" },
  ];

  return (
    <ButtonRow>
      {variations.map((props) => (
        <Button label="Button Label" {...props} />
      ))}
    </ButtonRow>
  )
};