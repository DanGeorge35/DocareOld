// App.js
/* eslint-disable react-hooks/rules-of-hooks */
import 'react-native-pager-view';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './utils/AppNavigator';
import {ConfigProvider} from './context/config.context';
import Splash_screen from './screens/Introscreens/Splash_screen'; // Add this import

export default function App() {
  const [count, setCount] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [hasPickedLanguage, setHasPickedLanguage] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('userLanguage').then(value => {
      if (value == null) {
        setHasPickedLanguage(false);
      } else {
        setHasPickedLanguage(true);
        console.log('Language :', value);
      }
    });

    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearInterval(timer);
    
  }, [count]);

  if (isLoading) {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#007bff" />
        <Splash_screen />
      </>
    );
  }

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

  return (
    <ConfigProvider>
      <NativeBaseProvider>
        <StatusBar barStyle="light-content" backgroundColor="#007bff" />
        <NavigationContainer>
          <AppNavigator initialRouteName={routeName} />
        </NavigationContainer>
      </NativeBaseProvider>
    </ConfigProvider>
  );
}
