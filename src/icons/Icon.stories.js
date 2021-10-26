import react from "react";

import { Box } from "../Box";
import { Label } from "../Label";
import { Text } from "../Text";

import { ReactComponent as ENS } from "./ens.svg";
import { ReactComponent as Info } from "./info.svg";
import { ReactComponent as Success } from "./success.svg";
import { ReactComponent as Failed } from "./failed.svg";
import { ReactComponent as Pending } from "./pending.svg";
import { ReactComponent as Vouch } from "./vouch.svg";
import { ReactComponent as Avatar } from "./avatar.svg";
import { ReactComponent as Close } from "./close.svg";
import { ReactComponent as External } from "./external.svg";
import { ReactComponent as Borrow } from "./borrow.svg";
import { ReactComponent as Search } from "./search.svg";
import { ReactComponent as Twitter } from "./twitter.svg";
import { ReactComponent as Filter } from "./filter.svg";
import { ReactComponent as NewVouch } from "./newVouch.svg";
import { ReactComponent as NewMember } from "./newMember.svg";
import { ReactComponent as Repayment } from "./repayment.svg";
import { ReactComponent as Metamask } from "./metamask.svg";
import { ReactComponent as WalletConnect } from "./walletconnect.svg";
import { ReactComponent as People } from "./people.svg";
import { ReactComponent as Dollar } from "./dollar.svg";
import { ReactComponent as DropdownArrow } from "./dropdownArrow.svg";
import { ReactComponent as ExternalInline } from "./externalinline.svg";
import { ReactComponent as Telegram } from "./telegram.svg";
import { ReactComponent as ArrowRight } from "./arrowRight.svg";

export default {
  title: "components/icons",
};

const icons = [
  Vouch,
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
  Telegram,
  Filter,
  NewVouch,
  NewMember,
  Repayment,
  Metamask,
  WalletConnect,
  People,
  Dollar,
  DropdownArrow,
  ArrowRight,
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

    {["blue", "green", "white", "red", "grey", "black", "orange"].map(
      (color) => (
        <Text
          color={color}
          style={color === "white" && { backgroundColor: "black" }}
        >
          External link <ExternalInline />
        </Text>
      )
    )}

    {Array(7)
      .fill(0)
      .map((_, i) => (
        <div>
          <Label grey={(i + 1) * 100}>
            External link <ExternalInline />
          </Label>
        </div>
      ))}

    {["blue", "green", "white", "red", "grey", "black", "orange"].map(
      (color) => (
        <div>
          <Label
            color={color}
            style={color === "white" && { backgroundColor: "black" }}
          >
            External link <ExternalInline />
          </Label>
        </div>
      )
    )}

    <div>
      <Label size="small">
        External link <ExternalInline />
      </Label>
    </div>
  </>
);
