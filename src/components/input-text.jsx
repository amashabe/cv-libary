import React from "react";
import { TextInput, Text, View } from "react-native";
import { calculateSize } from "../utils/scale";

const InputText = ({ placeholder, onChangeText, value, children }) => {
  return (
    <View>
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: calculateSize(16),
          marginBottom: calculateSize(5),
          marginTop: calculateSize(9),
        }}
      >
        {children}
      </Text>
      <TextInput
        placeholderTextColor={"#333333"}
        onChangeText={(input) => onChangeText(input)}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        style={{
          borderColor: "#6D6D6D",
          borderWidth: calculateSize(1),
          borderRadius: calculateSize(3),
          width: "100%",
          paddingStart: calculateSize(10),
          height: calculateSize(45),
          backgroundColor: "#FFFFFF",
          fontSize: calculateSize(16),
          letterSpacing: calculateSize(0)
        }}
      />
    </View>
  );
};

export { InputText };
