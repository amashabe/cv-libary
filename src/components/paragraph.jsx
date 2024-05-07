import React from 'react';
import { Text } from 'react-native';
import { calculateSize } from '../utils/scale';

const Paragraph = ({ children, color, size, fontWeight, textAlign, style }) => {
    return (
        <Text numberOfLines={1} style={{ color: color, fontSize: calculateSize(size ? size : 14), fontWeight: fontWeight, textAlign: textAlign ? textAlign : 'center', ...style }} >
            {children}
        </Text>
    )
}

export { Paragraph }