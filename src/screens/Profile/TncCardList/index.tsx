import React, { FC } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { colorGray } from "../../../styles/Global.style";

const TncCardList: FC<{ data: { key: string }[] }> = ({ data }) => {
  return (
    <React.Fragment>
      <SafeAreaView>
        <View>
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      color: colorGray[500],
                      letterSpacing: 0.3,
                      lineHeight: 20,
                    }}
                  >{`${index + 1}. ${item.key}`}</Text>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default TncCardList;
