import React from "react";
import { View, Image } from "react-native";
import { calculateSize } from "../utils/scale";
import { ScreenContainer } from "../components";

const HomeScreen = () => {
  return (
    <ScreenContainer>
      <View style={{ flex: 1, marginTop: calculateSize(50) }}>
        <Image
          style={{
            backgroundColor: "transparent",
            height: calculateSize(76),
            width: calculateSize(200),
            alignSelf: "center",
          }}
          source={require("../assets/logo.png")}
        />
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
