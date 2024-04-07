import React from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';

import {styles} from '../styles/home';

import Headings from '../components/Headings';
import Paragraph from '../components/Paragraph';
import Book from '../components/Book';

import {BookType} from '../@types/context';
import {recommended} from '../utils/data';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollWrapper}>
        <View style={styles.top}>
          <Text>Book Worm</Text>
        </View>

        <View style={styles.section}>
          <Headings text="For You" style={styles.headings} />
          <Paragraph
            style={styles.paragraph}
            text="We’ve curated some recommendations based off your likes and past preference."
          />

          <View style={{marginTop: 20}}>
            <ScrollView horizontal={true}>
              {recommended?.map((book: BookType) => (
                <Book key={book.id} {...book} />
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.section}>
          <Headings text="Best Sellers" style={styles.headings} />
          <Paragraph
            style={styles.paragraph}
            text="We’ve curated some recommendations based off your likes and past preference."
          />
          <View style={{marginTop: 20}}>
            <ScrollView horizontal={true}>
              {recommended?.map((book: BookType) => (
                <Book key={book.id} {...book} />
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.section}>
          <Headings text="Favourites" style={styles.headings} />
          <Paragraph
            style={styles.paragraph}
            text="Revisit some of your favourites and find that spark you felt the first time."
          />
          <View style={styles.stack}>
            {recommended?.slice(0, 2)?.map((book: BookType) => (
              <Book key={book.id} {...book} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
