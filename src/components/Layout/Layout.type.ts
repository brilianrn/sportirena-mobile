import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  useBottomBar?: boolean;
  useTopBar?: boolean;
  isSearchBar?: boolean;
}

export interface TopBarProps {
  isSearchBar: boolean;
}
