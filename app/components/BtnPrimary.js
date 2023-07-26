import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BtnPrimary = ({ text = 'click me', onPress = () => {} }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default BtnPrimary;

const styles = StyleSheet.create({});
