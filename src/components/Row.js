import React from "react";
import { View } from "react-native";

export default ({ children }) => (
  <View style={{
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '2%'
  }}>
    {children}
  </View>
);
