import { Box } from "../Box";
import {
  AddressBookIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowRightFilledIcon,
  AvatarIcon,
  BorrowIcon,
  CalendarIcon,
  CancelVouchIcon,
  CelebrationIcon,
  ChartIcon,
  CheckIcon,
  ChevronIcon,
  ClaimIcon,
  CloseIcon,
  CloudCheckIcon,
  CogIcon,
  CoinbaseIcon,
  CopyIcon,
  CrossIcon,
  DelegateIcon,
  DepositIcon,
  DisconnectWalletIcon,
  DiscordIcon,
  DollarIcon,
  DotsIcon,
  DropdownArrowIcon,
  EnsIcon,
  ErrorIcon,
  ExternalIcon,
  ExternalInlineIcon,
  FailedIcon,
  FilterIcon,
  IdentityIcon,
  IncreaseIcon,
  InfoIcon,
  IntermediateIcon,
  LendIcon,
  LinkIcon,
  LogoIcon,
  ManageIcon,
  MetamaskIcon,
  NewMemberIcon,
  NewMemberOutlinedIcon,
  NewVouchIcon,
  NewVouchReceivedIcon,
  PendingIcon,
  PeopleIcon,
  RemoveIcon,
  RepaymentIcon,
  SearchIcon,
  StakeIcon,
  SuccessIcon,
  SwitchIcon,
  TableSortIcon,
  TelegramIcon,
  TooltipIcon,
  TwitterIcon,
  TwitterFilledIcon,
  UnionIcon,
  UnionWhiteIcon,
  VouchIcon,
  WalletIcon,
  WalletConnectIcon,
  WarningIcon,
  WireCheckIcon,
  WireInfoIcon,
  WithdrawIcon,
} from "./Icons";

export default {
  title: "components/Icons",
};

const icons = [
  AddressBookIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowRightFilledIcon,
  AvatarIcon,
  BorrowIcon,
  CalendarIcon,
  CancelVouchIcon,
  CelebrationIcon,
  ChartIcon,
  CheckIcon,
  ChevronIcon,
  ClaimIcon,
  CloseIcon,
  CloudCheckIcon,
  CogIcon,
  CoinbaseIcon,
  CopyIcon,
  CrossIcon,
  DelegateIcon,
  DepositIcon,
  DisconnectWalletIcon,
  DiscordIcon,
  DollarIcon,
  DotsIcon,
  DropdownArrowIcon,
  EnsIcon,
  ErrorIcon,
  ExternalIcon,
  ExternalInlineIcon,
  FailedIcon,
  FilterIcon,
  IdentityIcon,
  IncreaseIcon,
  InfoIcon,
  IntermediateIcon,
  LendIcon,
  LinkIcon,
  LogoIcon,
  ManageIcon,
  MetamaskIcon,
  NewMemberIcon,
  NewMemberOutlinedIcon,
  NewVouchIcon,
  NewVouchReceivedIcon,
  PendingIcon,
  PeopleIcon,
  RemoveIcon,
  RepaymentIcon,
  SearchIcon,
  StakeIcon,
  SuccessIcon,
  SwitchIcon,
  TableSortIcon,
  TelegramIcon,
  TooltipIcon,
  TwitterIcon,
  TwitterFilledIcon,
  UnionIcon,
  UnionWhiteIcon,
  VouchIcon,
  WalletIcon,
  WalletConnectIcon,
  WarningIcon,
  WireCheckIcon,
  WireInfoIcon,
  WithdrawIcon,
];

export const All = () => (
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
