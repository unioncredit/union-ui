import React from "react";

import { AlertBanner } from "./AlertBanner";

export default {
  component: AlertBanner,
  title: "Components/AlertBanner",
};

export const Default = () => (
  <AlertBanner
    label="This is experimental software. Do not use unless you understand the risks."
    onClose={() => alert()}
  />
);
