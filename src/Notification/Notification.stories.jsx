import React from "react";

import { Notification } from "./Notification";
import { NotificationStack } from "./NotificationStack";

export default {
  component: Notification,
  title: "Components/NotificationToast",
};

export const All = () => (
  <>
    <Notification
      variant="pending"
      title="Borrow 542.12 DAI"
      content="Transaction Pending"
    />
    <Notification
      variant="success"
      title="Borrow 542.12 DAI"
      content="Transaction Succeeded"
    />
    <Notification
      variant="error"
      title="Borrow 542.12 DAI"
      content="Transaction Failed"
    />
  </>
);

export const Links = () => (
  <>
    <Notification
      variant="pending"
      title="Borrow 542.12 DAI"
      content="Transaction Pending"
      link="#"
    />
    <Notification
      variant="success"
      title="Borrow 542.12 DAI"
      content="Transaction Succeeded"
      link="#"
    />
    <Notification
      variant="error"
      title="Borrow 542.12 DAI"
      content="Transaction Failed"
      link="#"
    />
  </>
)

export const Stack = () => (
  <NotificationStack>
    <Notification
      variant="pending"
      title="Borrow 542.12 DAI"
      content="Transaction Pending"
    />
    <Notification
      variant="success"
      title="Borrow 542.12 DAI"
      content="Transaction Succeeded"
      link="#"
    />
    <Notification
      variant="error"
      title="Borrow 542.12 DAI"
      content="Transaction Failed"
      link="#"
    />
  </NotificationStack>
);
