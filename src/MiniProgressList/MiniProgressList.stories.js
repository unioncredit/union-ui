import React from "react";

import { MiniProgressList } from "./MiniProgressList";

export default {
  component: MiniProgressList,
  title: "Components/MiniProgressList",
};

const items = [{ number: 1, complete: true }, { number: 2 }, { number: 3 }];

export const Default = () => <MiniProgressList items={items} />;
