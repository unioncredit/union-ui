import React from "react";
import { Box } from "./Box";

import "./stories.scss";

export default {
  title: "Theme/Colors",
};

const colorClasses = [
  "blue100",
  "blue200",
  "blue300",
  "blueBoxShadow",
  "grey100",
  "grey200",
];

export const Default = () =>
  colorClasses.map((className) => (
    <Box mb="20px">
      <div
        className={className}
        style={{
          width: "20px",
          height: "20px",
          marginRight: "10px",
        }}
      ></div>
      ${className}
    </Box>
  ));
