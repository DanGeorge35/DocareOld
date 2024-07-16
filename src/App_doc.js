import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {NativeBaseProvider} from 'native-base';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import 'react-native-pager-view';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import AppDocNavigator from './utils/AppDocNavigator'
import {ConfigProvider} from './context/config.context';
import Splash_screen_doc from './screens/doctor_app/introscreens_doctor/Splash_screen_doc';



export default function AppDoc() {
  const [count, setCount] = useState(5);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [hasPickedLanguage, setHasPickedLanguage] = useState(null);
  let routeName;

  useEffect(() => {
    // AsyncStorage.removeItem('alreadyLaunched');

    AsyncStorage.getItem('userLanguage').then(value => {
      if (value == null) {
        // No need to wait for `setItem` to finish, although you might want to handle errors
        setHasPickedLanguage(false);
      } else {
        setHasPickedLanguage(true);
        console.log('Language :', value);
      }
    }); // Add some error

    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error

    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        setIsLoading(false);
        setIsSignUp(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  

  //console.log(hasPickedLanguage);

  if (hasPickedLanguage === null) {
    routeName = 'Lang_select';
  } else if (hasPickedLanguage === true) {
    if (isFirstLaunch === null) {
      routeName = 'Onboarding';
    } else if (isFirstLaunch === true) {
      routeName = 'Onboarding';
    } else {
      routeName = 'Login_screen';
    }
  } else {
    routeName = 'Lang_select';
  }

  if (isLoading) {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#007bff" />
        <Splash_screen_doc />
      </>
    );
  }

  return (
    // <ConfigProviderDoc>
    <ConfigProvider>
      <NativeBaseProvider>
        <StatusBar barStyle="light-content" backgroundColor="#007bff" />
        <NavigationContainer>
          <AppDocNavigator initialRouteName={routeName}/>
        </NavigationContainer>
      </NativeBaseProvider>
    </ConfigProvider>
  );
}
