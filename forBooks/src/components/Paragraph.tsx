import React from 'react';
import {Text} from 'react-native';

const Paragraph = (props: any) => {
  return <Text style={props.style}>{props.text}</Text>;
};

export default Paragraph;