import React from "react";

import { Button } from "../Button";
import { ButtonRow } from "./ButtonRow";
import { RepayIcon, RemoveIcon } from "../Icons";
import { Box } from "../Box";

export default {
  component: ButtonRow,
  title: "Components/ButtonRow",
};

const rows = [
  {},
  { joined: true }
];

const sizes = [
  "large",
  "regular",
  "small",
  "pill",
];

const buttons = [
  { color: "primary", icon: RepayIcon },
  { color: "secondary", variant: "light" },
  { color: "secondary", variant: "light" },
  { color: "secondary", variant: "light" },
  { color: "red", variant: "light", icon: RemoveIcon },
];

export const All = () => (
  <>
    {rows.map((row) => (
      <Box mb="30px" direction="vertical">
        {sizes.map((size) => (
          <Box mb="20px">
            <ButtonRow {...row}>
              {buttons.map((props) => (
                <Button size={size} label={`Button Label`} {...props} />
              ))}
            </ButtonRow>
          </Box>
        ))}
      </Box>
    ))}
  </>
);

export const Joined = () => (
  <ButtonRow joined>
    {buttons.map((props) => (
      <Button label={`Button Label`} {...props} />
    ))}
  </ButtonRow>
);