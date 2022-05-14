import React, { useRef } from "react";

import { MiniProgressList } from "./MiniProgressList";
import { Box } from "../Box";
import { Card } from "../Card";

export default {
  component: MiniProgressList,
  title: "Components/MiniProgressList",
};

const items = [
  { number: 1, complete: true },
  { number: 2, anchor: "second" },
  { number: 3, anchor: "third" },
];

export const Default = () => <MiniProgressList items={items} />;

export const Scrolling = () => {
  const first = useRef();
  const second = useRef();
  const third = useRef();

  const items = [
    { number: 1, complete: true, scrollTo: first },
    { number: 2, anchor: "second", scrollTo: second },
    { number: 3, anchor: "third", scrollTo: third },
  ];

  return (
    <div>
      <Card ref={first}>
        <Card.Header title="First" />
      </Card>
      <Box mt="1200px" />
      <Card ref={second}>
        <Card.Header title="Second" />
      </Card>
      <Box mt="1200px" />
      <Card ref={third}>
        <Card.Header title="Third" />
      </Card>
      <Box mt="1200px" />
      <div style={{ position: "fixed", bottom: "24px", left: "24px" }}>
        <MiniProgressList items={items} />
      </div>
    </div>
  );
};
