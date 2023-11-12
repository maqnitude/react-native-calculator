import React, { ReactNode } from "react";
import { View } from "react-native";

interface ViewProps {
  children: ReactNode;
}

const ViewComponent: React.FC<ViewProps> = ({ children }) => (
  <View style={{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '2%'
  }}>
    {children}
  </View>
);

export default ViewComponent;
