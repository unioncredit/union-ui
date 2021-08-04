import React from "react";

import { AddressLabel } from "./AddressLabel";

export default {
  component: AddressLabel,
  title: "Components/AddressLabel",
};

export const Default = () => (
  <>
    <AddressLabel
      address="0x12345678901234567890"
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
    />
  </>
);
