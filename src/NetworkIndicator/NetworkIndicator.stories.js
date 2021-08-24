import React from "react";

import { NetworkIndicator } from "./NetworkIndicator";

export default {
  component: NetworkIndicator,
  title: "Components/NetworkIndicator",
};

export const Default = () => (
  <>
    <NetworkIndicator chainId={1} mb="10px" />
    <NetworkIndicator chainId={137} />
  </>
);
