import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import { sizes } from '../utils/sizes';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.colYellow,
    padding: sizes.extraLarge,
    borderRadius: 8,
    margin: sizes.extraLarge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.colYellow,
    fontSize: sizes.superLarge,
    fontWeight: 'bold',
  },
});
