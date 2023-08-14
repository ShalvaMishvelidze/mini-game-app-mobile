import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const BtnPrimary = ({
  children,
  onPress = () => console.log("I've been clicked!!!"),
  color = colors.colWhite,
  fontSize = 14,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={
          Platform.OS === 'ios'
            ? ({ pressed }) => {
                return pressed
                  ? [styles.pressable, styles.pressed]
                  : styles.pressable;
              }
            : styles.pressable
        }
        onPress={onPress}
        android_ripple={{ color: colors.colPrimaryDark }}
      >
        <Text
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            color,
            fontSize,
            fontWeight: 'bold',
          }}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export { BtnPrimary };

const styles = StyleSheet.create({
  container: {
    borderRadius: 1000,
    overflow: 'hidden',
    flex: 1,
  },
  pressable: {
    backgroundColor: colors.colPrimary,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    elevation: 2,
    width: '100%',
  },
  pressed: {
    opacity: 0.75,
  },
});
