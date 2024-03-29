import React from "react";

import { Box } from "../Box";
import { Button } from "./Button";
import { ButtonRow } from "../ButtonRow";
import { RepayIcon } from "../Icons";

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
  "blue",
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
              <Button size={size} icon={RepayIcon} color={color} label={`Button Label`} {...props} />
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
      <Button icon={RepayIcon} color="primary" label={`Button Label`} {...props} />
    ))}
  </ButtonRow>
);

export const Secondary = () => (
  <ButtonRow>
    {variants.map((props) => (
      <Button icon={RepayIcon} color="secondary" label={`Button Label`} {...props} />
    ))}
  </ButtonRow>
);

export const Red = () => (
  <ButtonRow>
    {variants.map((props) => (
      <Button icon={RepayIcon} color="red" label={`Button Label`} {...props} />
    ))}
  </ButtonRow>
);

export const Sizes = () => (
  <ButtonRow>
    {sizes.map((size) => (
      <Button icon={RepayIcon} size={size} label={`Button Label`} />
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
        <Button icon={RepayIcon} label={word} />
      ))}
    </ButtonRow>
  )
};

export const Icon = () => {
  const variations = [
    {},
    { icon: RepayIcon, iconPosition: "start" },
    { icon: RepayIcon, iconPosition: "end" },
  ];

  return (
    <ButtonRow>
      {variations.map((props) => (
        <Button label="Button Label" {...props} />
      ))}
    </ButtonRow>
  )
};