import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Headings = (props: any) => {
  return <Text style={[styles.fontFamily, props.style]}>{props.text}</Text>;
};

export const styles = StyleSheet.create({
  fontFamily: {
    fontFamily: 'EB Garamond',
  },
});

export default Headings;
