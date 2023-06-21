import { AvatarBadgeRow } from "./AvatarBadgeRow";
import { Avatar } from "../Avatar";
import React from "react";

export default {
  component: AvatarBadgeRow,
  title: "Components/AvatarBadgeRow",
}

const urls = [
  "https://pbs.twimg.com/profile_images/1576217831527616512/_iO9HGGE_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1576217831527616512/_iO9HGGE_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1576217831527616512/_iO9HGGE_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1576217831527616512/_iO9HGGE_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1576217831527616512/_iO9HGGE_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1576217831527616512/_iO9HGGE_400x400.jpg",
];

export const Default = () => (
  <AvatarBadgeRow>
    {urls.map(url => (
      <Avatar src={url} />
    ))}
  </AvatarBadgeRow>
);

export const Label = () => (
  <AvatarBadgeRow label="Providing to 12 Contacts" showLabel>
    {urls.map(url => (
      <Avatar src={url} />
    ))}
  </AvatarBadgeRow>
)