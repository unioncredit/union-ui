import React from "react";

import { Notification } from "./Notification";
import { NotificationStack } from "./NotificationStack";
import { Text } from "../Text";
import { Label } from "../Label";

export default {
  component: Notification,
  title: "Components/Notification",
};

export const All = () => (
  <>
    <Notification variant="pending">
      <Text>Waiting for confirmation</Text>
      <Label as="p" size="small">
        Confirm transaction with your connected wallet
      </Label>
    </Notification>
    <Notification variant="success">
      <Text>Transaction successful</Text>
      <Label as="p" size="small">
        View transaction
      </Label>
    </Notification>
    <Notification variant="error">
      <Text>Transaction error</Text>
      <Label as="p" size="small">
        Internal transaction error
      </Label>
    </Notification>
  </>
);

export const Stack = () => (
  <NotificationStack>
    <Notification variant="pending">
      <Text>Waiting for confirmation</Text>
      <Label as="p" size="small">
        Confirm transaction with your connected wallet
      </Label>
    </Notification>
    <Notification variant="success">
      <Text>Transaction successful</Text>
      <Label as="p" size="small">
        View transaction
      </Label>
    </Notification>
    <Notification variant="error">
      <Text>Transaction error</Text>
      <Label as="p" size="small">
        Internal transaction error
      </Label>
    </Notification>
  </NotificationStack>
);
