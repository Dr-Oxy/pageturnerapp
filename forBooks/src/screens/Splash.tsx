import React, {useEffect, useState} from 'react';

import {
  View,
  Image,
  ImageBackground,
  Modal,
  Text,
  Pressable,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {styles} from '../styles/splash';

type NavigationOptions = {
  [key: string]: any; // Allows any type of property for flexibility
};

const Splash = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation<NavigationOptions>();

  const openOptions = () => {
    setOpenModal(!openModal);
  };

  const goto = (item: string) => {
    navigation.navigate(item);
    openOptions();
  };

  useEffect(() => {
    if (!openModal) {
      const timeout = setTimeout(openOptions, 3000);
      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

  return (
    <ImageBackground
      style={styles.bgWrap}
      source={require('../../assets/images/Splash-bg.png')}>
      <View>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../assets/images/logo-PG.png')}
        />
      </View>

      <View>
        <Modal animationType="slide" transparent={true} visible={openModal}>
          <View style={styles.modal}>
            <View style={styles.modalBody}>
              <Text style={styles.lead}>Time to get lost in a story</Text>
              <Text style={styles.sub}>
                Prepare to lose track of time because every story is a page
                turner.{' '}
              </Text>

              <View style={styles.btnGroup}>
                <Pressable
                  style={[styles.button, styles.opt1]}
                  onPress={() => goto('Register')}>
                  <Text style={[styles.buttonText, styles.opt1]}>
                    Create Account
                  </Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.opt2]}
                  onPress={() => goto('Login')}>
                  <Text style={[styles.buttonText, styles.opt2Text]}>
                    Log in
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

export default Splash;
