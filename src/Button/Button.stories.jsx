import React from "react";

import { Button } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
};

export const Primary = () => (
  <>
    <Button label="Vouch for new contact" />
    <Button disabled label="Vouch for new contact" />
  </>
);

