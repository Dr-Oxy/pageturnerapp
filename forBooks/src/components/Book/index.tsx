import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './book';
import {BookType} from '../../@types/context';

const Book = ({title, author}: BookType) => {
  return (
    <View style={styles.book}>
      <View style={styles.bookCover} />

      <View style={styles.bookDetails}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
};

export default Book;
