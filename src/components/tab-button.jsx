import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Paragraph } from './'; 
import { calculateSize } from '../utils/scale';

const TabButton = ({ label, onPress, active, customStyle }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: active ? "#4488D5" : "transparent",
                height: calculateSize(46),
                width: "50%",
                justifyContent: "center",
                ...customStyle
            }}
        >
            <Paragraph color={"#FFFFFF"} size={16}>{label}</Paragraph>
        </TouchableOpacity>
    );
};

export default TabButton;