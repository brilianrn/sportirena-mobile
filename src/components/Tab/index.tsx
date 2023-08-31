import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import TabStyle from "./Tab.style";
import { TabProps } from "./Tab.type";

const Tabs: FC<TabProps> = ({ activeTab, setActiveTab, tabs, style }) => {
  return (
    <React.Fragment>
      <View style={style}>
        <View style={[TabStyle.card, TabStyle.shadowProp]}>
          {tabs.map((e) => (
            <TouchableOpacity
              key={e.value}
              style={[
                TabStyle[activeTab === e ? "cardItemActive" : ""],
                { flex: 1 },
              ]}
              onPress={() => setActiveTab(e)}
            >
              <Text
                style={[
                  TabStyle[activeTab === e ? "itemActive" : "item"],
                  { textAlign: "center" },
                ]}
              >
                {e.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </React.Fragment>
  );
};

export default Tabs;
