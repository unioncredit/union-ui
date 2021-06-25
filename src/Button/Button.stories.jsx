import React from "react";

import { Button } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
};

export const Primary = () => (
  <>
    <Button icon="vouch" variant="primary" label="Vouch for new contact" />
    <Button icon="vouch" variant="secondary" label="Vouch for new contact" />
    <Button icon="vouch" variant="rounded" label="Vouch for new contact" />
    <Button icon="vouch" variant="floating" label="Vouch for new contact" />
    <Button variant="pill" label="Vouch for new contact" />
  </>
);

export const Disabled = () => (
  <>
    <Button disabled label="Vouch for new contact" />
  </>
);
