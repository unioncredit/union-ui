import React from "react";

import { Steps } from "./Steps";

export default {
  component: Steps,
  title: "Components/Steps",
};

const items = [
  { title: "Active", subTitle: "November 30th 2020 • 14:44" },
  { title: "Proposed", subTitle: "November 29th 2020 • 10:00" },
];

export const Default = () => <Steps items={items} />;
