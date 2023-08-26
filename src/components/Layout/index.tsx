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
}) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          height: 33,
        }}
      />
      <ScrollView>
        <View style={[LoginStyle.container, { minHeight: 900 }]}>
          {useTopBar && <TopBar isSearchBar={isSearchBar as boolean} />}
          {children}
        </View>
      </ScrollView>
      {useBottomBar && <BottomBar />}
    </View>
  );
};

export default Layout;
