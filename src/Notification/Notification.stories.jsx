import React from "react";

import { Notification } from "./Notification";
import { NotificationStack } from "./NotificationStack";
import { Text } from "../Text";

export default {
  component: Notification,
  title: "Components/Notification",
};

export const All = () => (
  <>
    <Notification variant="pending" title="Waiting for confirmation">
      <Text size="small">
        Confirm transaction with your connected wallet
      </Text>
    </Notification>
    <Notification variant="success" title="Transaction successful">
      <Text size="small">
        View transaction
      </Text>
    </Notification>
    <Notification variant="error" title="Transaction error" link="#">
      <Text size="small">
        Internal transaction error
      </Text>
    </Notification>
  </>
);

export const Stack = () => (
  <NotificationStack>
    <Notification variant="pending" title="Waiting for confirmation">
      <Text size="small">
        Confirm transaction with your connected wallet
      </Text>
    </Notification>
    <Notification variant="success" title="Transaction successful">
      <Text size="small">
        View transaction
      </Text>
    </Notification>
    <Notification variant="error" title="Transaction error">
      <Text size="small">
        Internal transaction error
      </Text>
    </Notification>
  </NotificationStack>
);
