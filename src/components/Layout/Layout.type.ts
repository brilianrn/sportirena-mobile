import { ReactNode } from "react";

export interface LayoutProps extends TopBarProps {
  children: ReactNode;
  useBottomBar?: boolean;
  useTopBar?: boolean;
}

export interface TopBarProps {
  isSearchBar: boolean;
  placeholderSearch?: string;
  search?: string;
  setSearch?: (value: string) => void;
  label?: string;
  backHref?: string;
}
