import React from 'react';
import { Text } from 'react-native';
import colors from '../utils/colors';

export function Title({
  children,
  fontSize = 24,
  color = colors.colWhite,
  borderColor = colors.colWhite,
  borderWidth = 2,
  padding = 12,
  textAlign = 'center',
  fontWeight = 'bold',
}) {
  return (
    <Text
      style={{
        fontSize,
        fontWeight,
        color,
        textAlign,
        borderWidth,
        borderColor,
        padding,
      }}
    >
      {children}
    </Text>
  );
}
