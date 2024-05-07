import React from "react";
import { SafeAreaView } from "react-native";

const ScreenContainer = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#005DA4" }}>
      {children}
    </SafeAreaView>
  );
};

export { ScreenContainer };
