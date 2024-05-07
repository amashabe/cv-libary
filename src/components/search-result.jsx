import React from 'react'
import { calculateSize } from '../utils/scale'
import { Text, View } from 'react-native';

const SearchResult = ({ item, handleSelectLocation }) => {
    return (
        <View style={{ paddingStart: calculateSize(10), justifyContent: "center", height: calculateSize(45), backgroundColor: "#FFFFFF" }}>
            <Text key={item.label} onPress={() => handleSelectLocation(item.label)} style={{ color: "#000" }}>{item.label}</Text>
        </View>
    )
}

export { SearchResult };