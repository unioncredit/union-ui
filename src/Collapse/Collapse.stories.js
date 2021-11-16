import React, { useState } from "react";

import { Collapse } from "./Collapse";
import { Box } from "../Box";
import { Heading } from "../Heading";

export default {
  component: Collapse,
  title: "Components/Collapse",
};

export const Default = () => {
  const [state, setState] = useState();

  return (
    <>
      <button onClick={() => setState((x) => !x)}>trigger</button>
      <Collapse active={state}>
        <Box>
          <Heading>Collapse</Heading>
        </Box>
      </Collapse>
    </>
  );
};
