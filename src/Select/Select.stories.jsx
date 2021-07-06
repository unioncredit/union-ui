import React from "react";

import { Select } from "./Select";
import PolygonImg from "../assets/polygon.png";
import EthereumImg from "../assets/ethereum.png";

export default {
  component: Select,
  title: "Components/Select",
};

const options = [
  { value: "ethereum", label: "Ethereum", imageSrc: EthereumImg },
  { value: "ethereum-kovan", label: "Ethereum · Kovan", imageSrc: EthereumImg },
  { value: "polygon", label: "Polygon", imageSrc: PolygonImg },
  { value: "polygon-mumbai", label: "Polygon · Mumbai", imageSrc: PolygonImg },
];

export const Default = () => (
  <div style={{ maxWidth: "250px" }}>
    <Select options={options} />
  </div>
);
