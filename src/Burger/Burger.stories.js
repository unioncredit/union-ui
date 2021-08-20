import React from "react";

import { Burger } from "./Burger";

export default {
  component: Burger,
  title: "Components/Burger",
};

export const Default = () => {
  const [close, setClose] = React.useState(false);

  return (
    <>
      <Burger isOpen={close} onClick={() => setClose((x) => !x)} />
    </>
  );
};
