import { ReactNode } from "react";
import { TabProps } from "../Tab/Tab.type";

export interface LayoutProps extends TopBarProps {
  children: ReactNode;
  useBottomBar?: boolean;
  useTopBar?: boolean;
}

export interface TopBarProps {
  isSearchBar: boolean;
  isTabBar?: boolean;
  tabs?: string[];
  setActiveTab?: (value: string) => void;
  activeTab?: string;
  placeholderSearch?: string;
  search?: string;
  setSearch?: (value: string) => void;
  label?: string;
  backHref?: string;
}
