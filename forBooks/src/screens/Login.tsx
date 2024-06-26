import React from 'react';

import {
  ImageBackground,
  Image,
  Text,
  View,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useForm, Controller} from 'react-hook-form';

import {styles} from '../styles/login';

import FormItem from '../components/FormItem';
import Headings from '../components/Headings';
import Paragraph from '../components/Paragraph';

type NavigationOptions = {
  [key: string]: any; // Allows any type of property for flexibility
};

const Login = () => {
  const navigation = useNavigation<NavigationOptions>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const goBack = () => {
    navigation.goBack();
  };

  const handleLogin = handleSubmit(async () => {
    navigation.navigate('Main');
  });

  return (
    <ImageBackground
      style={styles.bgWrap}
      source={require('../../assets/images/Splash-bg.png')}>
      <SafeAreaView style={styles.container}>
        <View style={styles.goBackWrap}>
          <Pressable onPress={goBack} style={styles.goBackBtn}>
            <Image
              source={require('../../assets/icons/arrow-circle-left.png')}
            />
            <Headings text="Go Back" style={styles.goBackText} />
          </Pressable>
        </View>

        <View style={styles.textGroup}>
          <Headings style={styles.salut} text="Welcome Back" />

          <Paragraph
            text="Ready to dive into a good book? Log into your account."
            style={styles.sub}
          />
        </View>

        <View style={styles.form}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <FormItem
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                label="Email Address"
                placeholder="example@mail.com"
                error={errors.email}
                errorMessage="Email is required"
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{
              required: true,
              minLength: 8,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <FormItem
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                label="Password"
                placeholder="*******"
                error={errors.password}
                errorMessage="Password is required"
              />
            )}
          />

          <View>
            <Pressable onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;
