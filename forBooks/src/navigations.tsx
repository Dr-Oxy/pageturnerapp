/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from './screens/Splash';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Explore from './screens/Explore';
import Favourites from './screens/Favourites';
import BookDetails from './screens/BookDetails';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabArray = [
  {
    route: 'All Books',
    img: require('../assets/icons/allBooks.png'),
    label: 'All Books',
    component: Home,
  },
  {
    route: 'Explore',
    img: require('../assets/icons/book.png'),
    label: 'Explore',
    component: Explore,
  },
  {
    route: 'Favourites',
    img: require('../assets/icons/bookmark.png'),
    label: 'Favourites',
    component: Favourites,
  },
  {
    route: 'Settings',
    img: require('../assets/icons/settings.png'),
    label: 'Settings',
    component: Settings,
  },
];

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          flexDirection: 'row',
          // alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: 'white',
          borderRadius: 8,
          paddingTop: 30,
          height: 84,
          ...styles.shadow,
        },
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
      }}>
      {TabArray.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.label}
            component={item.component}
            options={{
              tabBarLabel: item.label,
              tabBarIcon: ({focused}) => (
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={item.img}
                    style={{
                      width: 28,
                      height: 28,
                      tintColor: focused ? '#E89822' : '#959595',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: 'center',
                      color: focused ? '#E89822' : '#959595',
                    }}>
                    {item.label}
                  </Text>
                </View>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export const MixedNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />

      {/* Authentication screens */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

      {/* Logged in user see this */}
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="Details" component={BookDetails} />
    </Stack.Navigator>
  );
};

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOpacity: 0.25,
    elevation: 4,
    shadowRadius: 3.5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});
