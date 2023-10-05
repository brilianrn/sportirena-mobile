import React, { FC } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const Barier: FC<{ style?: StyleProp<ViewStyle> }> = ({ style }) => {
  return (
    <React.Fragment>
      <View
        style={[
          style,
          {
            borderBottomColor: "#E1E1E1",
            borderBottomWidth: StyleSheet.hairlineWidth,
          },
        ]}
      />
    </React.Fragment>
  );
};

export default Barier;
