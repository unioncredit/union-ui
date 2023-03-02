import { Box } from "../Box";
import {
  AddressBookIcon,
  ArbitrumIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowRightFilledIcon,
  AvatarIcon,
  AvatarFilledIcon,
  BlogIcon,
  BookIcon,
  BorrowIcon,
  CalendarIcon,
  CancelVouchIcon,
  CelebrationIcon,
  ChartIcon,
  CheckIcon,
  CheckFilledIcon,
  ChevronIcon,
  ClaimIcon,
  CloseIcon,
  CloudCheckIcon,
  CogIcon,
  CoinbaseIcon,
  CopyIcon,
  CrossIcon,
  DaiIcon,
  DelegateIcon,
  DepositIcon,
  DisconnectWalletIcon,
  DiscordIcon,
  DollarIcon,
  DotsIcon,
  DropdownArrowIcon,
  EnsIcon,
  EnsOutlinedIcon,
  ErrorIcon,
  EthereumIcon,
  ExternalIcon,
  ExternalInlineIcon,
  FailedIcon,
  FilterIcon,
  GoerliIcon,
  HamburgerIcon,
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
  OptimismIcon,
  PauseFilledIcon,
  PendingIcon,
  PeopleIcon,
  PlayFilledIcon,
  PlusIcon,
  RemoveIcon,
  RepaymentIcon,
  SearchIcon,
  SheetIcon,
  SpeakerIcon,
  SpeechIcon,
  StakeIcon,
  SuccessIcon,
  SwitchIcon,
  TableSortIcon,
  TelegramIcon,
  TooltipIcon,
  TwitterIcon,
  TwitterFilledIcon,
  UnionIcon,
  UnionSwirlIcon,
  UnionSwirlWhiteIcon,
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
  ArbitrumIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowRightFilledIcon,
  AvatarIcon,
  AvatarFilledIcon,
  BlogIcon,
  BookIcon,
  BorrowIcon,
  CalendarIcon,
  CancelVouchIcon,
  CelebrationIcon,
  ChartIcon,
  CheckIcon,
  CheckFilledIcon,
  ChevronIcon,
  ClaimIcon,
  CloseIcon,
  CloudCheckIcon,
  CogIcon,
  CoinbaseIcon,
  CopyIcon,
  CrossIcon,
  DaiIcon,
  DelegateIcon,
  DepositIcon,
  DisconnectWalletIcon,
  DiscordIcon,
  DollarIcon,
  DotsIcon,
  DropdownArrowIcon,
  EnsIcon,
  EnsOutlinedIcon,
  ErrorIcon,
  EthereumIcon,
  ExternalIcon,
  ExternalInlineIcon,
  FailedIcon,
  FilterIcon,
  GoerliIcon,
  HamburgerIcon,
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
  OptimismIcon,
  PauseFilledIcon,
  PendingIcon,
  PeopleIcon,
  PlayFilledIcon,
  PlusIcon,
  RemoveIcon,
  RepaymentIcon,
  SearchIcon,
  SheetIcon,
  SpeakerIcon,
  SpeechIcon,
  StakeIcon,
  SuccessIcon,
  SwitchIcon,
  TableSortIcon,
  TelegramIcon,
  TooltipIcon,
  TwitterIcon,
  TwitterFilledIcon,
  UnionIcon,
  UnionSwirlIcon,
  UnionSwirlWhiteIcon,
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
