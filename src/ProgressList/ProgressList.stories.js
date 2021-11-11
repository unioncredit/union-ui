import React from "react";

import { ProgressList } from "./ProgressList";
import { ProgressListItem } from "./ProgressListItem";

export default {
  component: ProgressList,
  title: "Components/ProgressList",
};

export const Default = () => (
  <div style={{ marginLeft: "100px" }}>
    <ProgressList>
      <ProgressListItem number={1} complete>
        <div style={{ width: "200px", height: "200px", background: "black" }} />
      </ProgressListItem>
      <ProgressListItem number={2}>
        <div style={{ width: "200px", height: "200px", background: "black" }} />
      </ProgressListItem>
      <ProgressListItem number={3}>
        <div style={{ width: "200px", height: "200px", background: "black" }} />
      </ProgressListItem>
    </ProgressList>
  </div>
);
