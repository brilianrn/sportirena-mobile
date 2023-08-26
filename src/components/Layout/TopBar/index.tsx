import { View, Text } from "react-native";
import React, { FC } from "react";
import { TopBarProps } from "../Layout.type";

const TopBar: FC<TopBarProps> = ({ isSearchBar }) => {
  return (
    <View>
      <Text>TopBar</Text>
    </View>
  );
};

export default TopBar;
