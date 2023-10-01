import { ReactNode } from "react";
import { OptionType } from "../../../App.type";

export interface LayoutProps extends TopBarProps {
  children: ReactNode;
  useBottomBar?: boolean;
  useTopBar?: boolean;
  isFixedTopBar?: boolean;
}

export interface TopBarProps {
  isSearchBar: boolean;
  isTabBar?: boolean;
  tabs?: OptionType[];
  setActiveTab?: (value: OptionType) => void;
  activeTab?: OptionType;
  placeholderSearch?: string;
  search?: string;
  setSearch?: (value: string) => void;
  onClickSetting?: () => void;
  label?: string;
  backHref?: string;
}
