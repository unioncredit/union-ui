import React from "react";

import { CircleProgress } from "./CircleProgress";

export default {
  component: CircleProgress,
  title: "Components/CircleProgress",
};

export const Default = () => (
  <>
    <CircleProgress percentage={33} label="1/3" />
    <CircleProgress percentage={66} label="2/3" />
    <CircleProgress percentage={100} label="3/3" complete />
  </>
);
