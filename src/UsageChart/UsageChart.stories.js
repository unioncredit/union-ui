import React from "react";

import { Box } from "../Box";
import { UsageChart } from "./UsageChart";

export default {
  component: UsageChart,
  title: "Components/UsageChart",
};

const data = [100, 50, 20, 10];

export const Default = () => (
  <>
    <Box>
      <UsageChart data={data} />
    </Box>
    <Box mt="10px" w="120px">
      <UsageChart data={data} height={12} />
    </Box>
  </>
);
