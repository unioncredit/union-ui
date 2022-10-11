import react from "react";

import { Box } from "../Box";
import { Label } from "../Label";
import { Text } from "../Text";

import ENS from "./ens.svg";
import Info from "./info.svg";
import Success from "./success.svg";
import Failed from "./failed.svg";
import Pending from "./pending.svg";
import Vouch from "./vouch.svg";
import Avatar from "./avatar.svg";
import Close from "./close.svg";
import External from "./external.svg";
import Borrow from "./borrow.svg";
import Search from "./search.svg";
import Twitter from "./twitter.svg";
import Filter from "./filter.svg";
import NewVouch from "./newVouch.svg";
import NewMember from "./newMember.svg";
import Repayment from "./repayment.svg";
import Metamask from "./metamask.svg";
import WalletConnect from "./walletconnect.svg";
import People from "./people.svg";
import Dollar from "./dollar.svg";
import DropdownArrow from "./dropdownArrow.svg";
import ExternalInline from "./externalinline.svg";
import Telegram from "./telegram.svg";
import ArrowRight from "./arrowRight.svg";
import NewVouchRecieved from "./newVouchRecieved.svg";
import Manage from "./manage.svg";
import Union from "./union.svg";
import Calendar from "./calendar.svg";
import Cancel from "./cancelVouch.svg";
import Switch from "./switch.svg";
import Logo from "./logo.svg";
import Chevron from "./chevron.svg";
import WireInfo from "./wireInfo.svg";
import WireCheck from "./wireCheck.svg";
import Link from "./link.svg";
import Cross from "./cross.svg";
import Discord from "./discord.svg";
import TableSorting from "./tableSorting.svg";
import Tooltip from "./tooltip.svg";

export default {
  title: "components/icons",
};

const icons = [
  Logo,
  Vouch,
  Manage,
  Calendar,
  Avatar,
  ENS,
  Info,
  Pending,
  Borrow,
  Success,
  Failed,
  Close,
  External,
  Search,
  Twitter,
  Discord,
  Telegram,
  Filter,
  NewVouch,
  NewVouchRecieved,
  NewMember,
  Cancel,
  Repayment,
  Metamask,
  WalletConnect,
  People,
  Dollar,
  DropdownArrow,
  ArrowRight,
  Union,
  Switch,
  Chevron,
  Tooltip,
  WireInfo,
  WireCheck,
  Link,
  Cross,
  TableSorting,
];

export const all = () => (
  <>
    <style>{`.icons-all svg { width: 32px; }`}</style>
    <div className="icons-all">
      {icons.map((Icon) => (
        <Box mb="8px">
          <Icon />
        </Box>
      ))}
    </div>
  </>
);

export const IconExternal = () => (
  <>
    {Array(7)
      .fill(0)
      .map((_, i) => (
        <Text grey={(i + 1) * 100}>
          External link <ExternalInline />
        </Text>
      ))}

    {[
      "blue500",
      "green500",
      "white",
      "red500",
      "grey500",
      "black",
      "orange500",
    ].map((color) => (
      <Text
        color={color}
        style={color === "white" && { backgroundColor: "black" }}
      >
        External link <ExternalInline />
      </Text>
    ))}

    {Array(7)
      .fill(0)
      .map((_, i) => (
        <div>
          <Label grey={(i + 1) * 100}>
            External link <ExternalInline />
          </Label>
        </div>
      ))}

    {[
      "blue500",
      "green500",
      "white",
      "red500",
      "grey500",
      "black",
      "orange500",
    ].map((color) => (
      <div>
        <Label
          color={color}
          style={color === "white" && { backgroundColor: "black" }}
        >
          External link <ExternalInline />
        </Label>
      </div>
    ))}

    <div>
      <Label size="small">
        External link <ExternalInline />
      </Label>
    </div>
  </>
);
