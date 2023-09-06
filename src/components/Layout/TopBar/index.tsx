import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IconArrowBlue, IconSearch, IconSetting } from "../../../assets/images";
import { homePath } from "../../../constants";
import { Global } from "../../../styles/Global.style";
import { InputText } from "../../Input";
import Tabs from "../../Tab";
import LayoutStyle from "../Layout.style";
import { TopBarProps } from "../Layout.type";
import { OptionType } from "../../../../App.type";

const TopBar: FC<TopBarProps> = ({
  isSearchBar,
  backHref = homePath,
  label,
  placeholderSearch,
  search,
  setSearch,
  isTabBar,
  activeTab,
  setActiveTab,
  tabs,
}) => {
  /* Navigate */
  const { navigate } = useNavigation();
  return (
    <React.Fragment>
      {isSearchBar ? (
        <View
          style={[
            LayoutStyle.topBarSearchContainer,
            Global.justifyEnd,
            { gap: 10 },
          ]}
        >
          <View style={{ width: "87%" }}>
            <InputText
              placeholder={placeholderSearch as string}
              type="default"
              style={{ backgroundColor: "white", borderRadius: 10 }}
              iconPosition="left"
              icon={IconSearch}
              iconType="image"
              value={search}
              setValue={setSearch}
            />
          </View>
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <Image source={IconSetting} />
          </TouchableOpacity>
        </View>
      ) : isTabBar ? (
        <View style={{ backgroundColor: "white" }}>
          <Tabs
            activeTab={activeTab as OptionType}
            setActiveTab={(value) => setActiveTab && setActiveTab(value)}
            tabs={tabs as OptionType[]}
            style={{ height: 63 }}
          />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => navigate(backHref as never)}
          style={[
            Global.justifyStart,
            {
              gap: 15,
              height: 35,
              alignItems: "center",
              backgroundColor: "white",
              marginTop: 25,
              marginHorizontal: 31,
            },
          ]}
        >
          <View style={LayoutStyle.topBarBackBtn}>
            <Image source={IconArrowBlue} />
          </View>
          <Text style={LayoutStyle.topBarLabel}>{label || "Label Screen"}</Text>
        </TouchableOpacity>
      )}
    </React.Fragment>
  );
};

export default TopBar;
