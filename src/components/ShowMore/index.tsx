import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import { ShowMoreProps } from "./ShowMore.type";
import { Global, colorDanger } from "../../styles/Global.style";
import { IconArrowRed } from "../../assets/images";

const ShowMore: FC<ShowMoreProps> = ({ onClick, style, textStyle, label }) => {
  return (
    <TouchableOpacity style={style} onPress={onClick}>
      <View style={[Global.justifyCenter, { gap: 5, alignItems: "center" }]}>
        <Text
          style={[
            { color: colorDanger.default, fontSize: 10, fontWeight: "600" },
            textStyle,
          ]}
        >
          {label || "Show more result"}
        </Text>
        <Image source={IconArrowRed} />
      </View>
    </TouchableOpacity>
  );
};

export default ShowMore;
