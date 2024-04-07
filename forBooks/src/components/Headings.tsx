import React from 'react';
import {Text} from 'react-native';

const Headings = (props: any) => {
  return <Text style={props.style}>{props.text}</Text>;
};

export default Headings;
