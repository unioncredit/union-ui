import React from "react";

import { Pagination } from "./Pagination";

export default {
  component: Pagination,
  title: "Components/Pagination",
};

export const Default = () => (
  <>
    <Pagination pages={4} activePage={1} mb="10px" onClick={alert} />
    <Pagination pages={4} activePage={2} mb="10px" onClick={alert} />
    <Pagination pages={4} activePage={3} mb="10px" onClick={alert} />
    <Pagination pages={4} activePage={4} mb="30px" onClick={alert} />
    {Array(9)
      .fill(0)
      .map((_, i) => (
        <Pagination pages={9} activePage={i + 1} mb="10px" onClick={alert} />
      ))}
    <Pagination pages={9} activePage={1} mt="30px" onClick={alert} />
  </>
);
