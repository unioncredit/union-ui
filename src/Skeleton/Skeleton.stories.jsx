import React from "react";

import { Skeleton } from "./Skeleton";

export default {
  component: Skeleton,
  title: "Components/Skeleton",
};

export const Default = () => (
  <>
    <Skeleton width={100} height={25} mb="8px" />
    <Skeleton width={100} height={25} mb="8px" />
    {Array(4)
      .fill(0)
      .map((_, i) => (
        <Skeleton grey={(i + 1) * 100} width={100} height={25} mb="8px" />
      ))}
    {Array(4)
      .fill(0)
      .map((_, i) => (
        <Skeleton variant="circle" grey={(i + 1) * 100} size={50} mb="8px" />
      ))}
    <Skeleton width={100} height={25} mb="8px" color="blue" />
    <Skeleton width={100} height={25} mb="8px" color="green" />
    <Skeleton width={100} height={25} mb="8px" color="red" />
    {Array(4)
      .fill(0)
      .map((_, i) => (
        <Skeleton
          shimmer
          grey={(i + 1) * 100}
          width={100}
          height={25}
          mb="8px"
        />
      ))}
    <Skeleton shimmer width={100} height={25} mb="8px" color="blue" />
    <Skeleton shimmer width={100} height={25} mb="8px" color="green" />
    <Skeleton shimmer width={100} height={25} mb="8px" color="red" />
  </>
);
