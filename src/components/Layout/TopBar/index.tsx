import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IconArrowBlue, IconSearch, IconSetting } from "../../../assets/images";
import { homeName } from "../../../constants";
import { Global } from "../../../styles/Global.style";
import { InputText } from "../../Input";
import LayoutStyle from "../Layout.style";
import { TopBarProps } from "../Layout.type";

const TopBar: FC<TopBarProps> = ({
  isSearchBar,
  backHref = homeName,
  label,
  placeholderSearch,
  search,
  setSearch,
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
