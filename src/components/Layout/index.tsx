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
  isTabBar,
  activeTab,
  setActiveTab,
  tabs,
  isFixedTopBar,
  onClickSetting,
  navigation,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          height: 33,
        }}
      />
      {useTopBar && isFixedTopBar && (
        <TopBar
          isSearchBar={isSearchBar as boolean}
          isTabBar={isTabBar}
          backHref={backHref}
          label={label}
          placeholderSearch={placeholderSearch}
          search={search}
          setSearch={setSearch}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />
      )}
      <ScrollView style={{ backgroundColor: "white" }}>
        {useTopBar && !isFixedTopBar && (
          <TopBar
            isSearchBar={isSearchBar as boolean}
            isTabBar={isTabBar}
            backHref={backHref}
            label={label}
            placeholderSearch={placeholderSearch}
            search={search}
            setSearch={setSearch}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
            onClickSetting={onClickSetting}
          />
        )}
        <View style={[LoginStyle.container, { minHeight: 900 }]}>
          {children}
        </View>
      </ScrollView>
      {useBottomBar && <BottomBar navigation={navigation} />}
    </View>
  );
};

export default Layout;
