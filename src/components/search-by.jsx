import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { calculateSize } from '../utils/scale'

const SearchBy = ({ data }) => {
    return (
        <View style={{ height: "100%", flexDirection: "row", flexGrow: "wrap" }}>
            <FlatList
                data={data}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                    <View style={{ flexBasis: "50%" }}>
                        <Text style={{ color: "#FFFFFF", fontSize: calculateSize(16), marginBottom: calculateSize(5) }}>{item.label}</Text>
                    </View>
                )}
                numColumns={2}
            />
        </View>
    )
}

export { SearchBy }