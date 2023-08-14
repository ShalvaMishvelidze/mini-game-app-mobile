import React from 'react';
import { Text } from 'react-native';
import colors from '../utils/colors';
import { sizes } from '../utils/sizes';

export function Title({
  children,
  fontSize = sizes.extraLarge,
  color = colors.colWhite,
  borderColor = colors.colWhite,
  borderWidth = 2,
  padding = sizes.medium,
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
        maxWidth: '80%',
        width: 300,
      }}
    >
      {children}
    </Text>
  );
}
