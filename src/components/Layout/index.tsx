import React, { FC } from "react";
import { ScrollView, View } from "react-native";
import LoginStyle from "../../screens/Login/Login.style";
import BottomBar from "./BottomBar";
import { LayoutProps } from "./Layout.type";
import TopBar from "./TopBar";

const Layout: FC<LayoutProps> = ({
  children,
  useBottomBar,
  useTopBar,
  isSearchBar,
  backHref,
  label,
  placeholderSearch,
  search,
  setSearch,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          height: 33,
        }}
      />
      <ScrollView style={{ backgroundColor: "white" }}>
        {useTopBar && (
          <TopBar
            isSearchBar={isSearchBar as boolean}
            backHref={backHref}
            label={label}
            placeholderSearch={placeholderSearch}
            search={search}
            setSearch={setSearch}
          />
        )}
        <View style={[LoginStyle.container, { minHeight: 900 }]}>
          {children}
        </View>
      </ScrollView>
      {useBottomBar && <BottomBar />}
    </View>
  );
};

export default Layout;
