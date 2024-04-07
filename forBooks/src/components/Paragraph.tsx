import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Paragraph = (props: any) => {
  return <Text style={[styles.fontfamily, props.style]}>{props.text}</Text>;
};

export const styles = StyleSheet.create({
  fontfamily: {
    fontFamily: 'Catamaran',
  },
});

export default Paragraph;
