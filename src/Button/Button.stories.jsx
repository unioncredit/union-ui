import React from "react";

import { Button } from "./Button";
import { Box } from "../Box";

export default {
  component: Button,
  title: "Components/Button",
};

export const Primary = () => (
  <Box align="center" mb="20px">
    <Button icon="vouch" variant="primary" label="Vouch for new contact" />
    <Button icon="vouch" variant="secondary" label="Vouch for new contact" />
    <Button icon="vouch" variant="rounded" label="Vouch for new contact" />
    <Button icon="vouch" variant="floating" label="Vouch for new contact" />
    <Button variant="pill" label="Vouch for new contact" />
  </Box>
);

export const Disabled = () => (
  <Box align="center">
    <Button
      disabled
      icon="vouch"
      variant="primary"
      label="Vouch for new contact"
    />
    <Button
      disabled
      icon="vouch"
      variant="secondary"
      label="Vouch for new contact"
    />
    <Button
      disabled
      icon="vouch"
      variant="rounded"
      label="Vouch for new contact"
    />
    <Button
      disabled
      icon="vouch"
      variant="floating"
      label="Vouch for new contact"
    />
    <Button disabled variant="pill" label="Vouch for new contact" />
  </Box>
);
