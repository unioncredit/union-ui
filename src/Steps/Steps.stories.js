import React from "react";

import { Steps } from "./Steps";
import { Box } from "../Box";

export default {
  component: Steps,
  title: "Components/Steps",
};

const items = [
  { title: "Active", subTitle: "November 30th 2020 • 14:44" },
  { title: "Proposed", subTitle: "November 29th 2020 • 10:00" },
];

export const Default = () => (
  <>
    <Box mb="24px">
      <Steps items={items} />
    </Box>
    <Box mb="24px">
      <Steps items={items.map((item) => ({ ...item, color: "purple" }))} />
    </Box>
    <Box mb="24px">
      <Steps items={items.map((item) => ({ ...item, color: "green" }))} />
    </Box>
    <Box mb="24px">
      <Steps items={items.map((item) => ({ ...item, color: "red" }))} />
    </Box>
  </>
);
