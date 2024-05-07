import React, { useState, Fragment } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import _ from "lodash";
import { Dropdown } from "react-native-element-dropdown";
import Octicons from "@expo/vector-icons/Octicons";

import { calculateSize } from "../utils/scale";
import { ScreenContainer, InputText, Paragraph } from "../components";

const data = [
  { label: "1 Mile", value: "1" },
  { label: "2 Miles", value: "2" },
  { label: "5 Miles", value: "5" },
  { label: "7 Miles", value: "7" },
  { label: "10 Miles", value: "10" },
  { label: "15 Miles", value: "15" },
  { label: "20 Miles", value: "20" },
  { label: "25 Miles", value: "25" },
  { label: "35 Mile", value: "35" },
  { label: "50 Miles", value: "50" },
  { label: "75 Miles", value: "75" },
  { label: "100 Miles", value: "100" },
  { label: "250 Mile", value: "250" },
  { label: "500 Miles", value: "500" },
  { label: "750 Miles", value: "750" },
];

const HomeScreen = () => {
  const [value, setValue] = useState(null);
  const [activeTab, setActiveTab] = useState('Tab 1');

  const renderItem = (item) => {
    return (
      <View style={{ padding: calculateSize(17), flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
        <Text style={{ flex: 1, fontSize: calculateSize(16) }}>
          {item.label}
        </Text>
      </View>
    );
  };

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ScreenContainer>
      <View style={{ flex: 1, marginTop: calculateSize(50) }}>
        <Image style={{ backgroundColor: "transparent", height: calculateSize(76), width: calculateSize(200), alignSelf: "center", }} source={require("../assets/logo.png")} />
        <View style={{ flex: 1, marginStart: calculateSize(19), marginEnd: calculateSize(19), marginTop: calculateSize(40) }}>
          <InputText onChangeText={() => { }} placeholder={"Keywords / Job Title / Job Ref"}>
            Keywords / Job Title / Job Ref
          </InputText>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: calculateSize(30) }}>
            <View style={{ width: "52%" }}>
              <InputText onChangeText={() => { }} placeholder={"e.g. town or postcode"}>
                Location
              </InputText>
            </View>

            <View style={{ width: "43%" }}>
              <Text style={{ color: "#FFFFFF", fontSize: calculateSize(16), marginBottom: calculateSize(5), marginTop: calculateSize(9) }}>
                Distance
              </Text>

              <Dropdown
                style={{ height: calculateSize(45), width: "100%", backgroundColor: "white", padding: calculateSize(12), shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.2, shadowRadius: 1.41, elevation: 2, }}
                placeholderStyle={{ fontSize: calculateSize(16), color: "#333333" }}
                selectedTextStyle={{ fontSize: calculateSize(16) }}
                iconStyle={{ width: calculateSize(25), height: calculateSize(30) }}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select distance"
                value={value}
                onChange={(item) => setValue(item.value)}
                renderItem={renderItem}
              />
            </View>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity style={{ height: calculateSize(45), width: calculateSize(180), backgroundColor: "#5BB543", justifyContent: "center", alignItems: "center", borderRadius: calculateSize(5), }}>
              <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Paragraph color={"#FFFFFF"} fontWeight={"bold"}>Find jobs now</Paragraph>
                <Octicons style={{ paddingLeft: calculateSize(7) }} color="#FFFFFF" name="search" size={calculateSize(17)} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, }}>
          <View style={{ flexDirection: "row", borderTopColor: "#4488D5", borderTopWidth: calculateSize(2) }}>
            <Fragment>
              <TouchableOpacity onPress={() => handleTabPress('Tab 1')} style={{ backgroundColor: activeTab === 'Tab 1' ? "#4488D5" : "transparent", height: calculateSize(46), width: "50%", justifyContent: "center" }}>
                <Paragraph color={"#FFFFFF"} size={16}>Jobs by Location</Paragraph>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTabPress('Tab 2')} style={{ backgroundColor: activeTab === 'Tab 2' ? "#4488D5" : "transparent", height: calculateSize(46), width: "50%", justifyContent: "center" }}>
                <Paragraph color={"#FFFFFF"} size={16}>Jobs by Industry</Paragraph>
              </TouchableOpacity>
            </Fragment>
          </View>
          <View style={{ marginTop: calculateSize(10) }}>
            {activeTab === 'Tab 1' && <Text>Content for Tab 1</Text>}
            {activeTab === 'Tab 2' && <Text>Content for Tab 2</Text>}
          </View>
        </View>


      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;