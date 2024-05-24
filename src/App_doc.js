import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import 'react-native-pager-view';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

// Import Screens
import Splash_screen_doc from './screens/doctor_app/introscreens_doctor/Splash_screen_doc';
import Intro_screen_doc from './screens/doctor_app/introscreens_doctor/Intro_screen_doc';
import Lang_select from './screens/doctor_app/introscreens_doctor/Lang_select';
import OnboardingScreen_doc from './screens/doctor_app/introscreens_doctor/OnboardingScreen_doc';
import Login_screen from './screens/doctor_app/introscreens_doctor/Login_screen';

import Personal_info_doc from './screens/doctor_app/create_account/Personal_info_doc';
import Upload_pix_doc from './screens/doctor_app/create_account/Upload_pix_doc';
import Create_password from './screens/doctor_app/create_account/Create_password';
import Successful_page from './screens/doctor_app/create_account/Successful_page';
import Verify_account from './screens/doctor_app/create_account/Verify_account';

import National_ID_verify from './screens/doctor_app/kyc/National_ID_verify';
import Personal_info_kyc from './screens/doctor_app/kyc/Personal_info_kyc';
import Work_experience from './screens/doctor_app/kyc/Work_experience';
import Success_page_kyc from './screens/doctor_app/kyc/Success_page_kyc';

const Stack = createStackNavigator();

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

  const Header = (title, backgroundColor) => {
    return {
      title: title, // Change the title of the header
      headerStyle: {
        backgroundColor: backgroundColor, // Change the background color of the header
      },
      headerTintColor: '#fff', // Change the text color of the header
      headerTitleStyle: {
        fontWeight: 'bold', // Change the font weight of the header title
      },
    };
  };

  console.log(hasPickedLanguage);

  if (hasPickedLanguage === null) {
    routeName = 'Lang_select';
    // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (hasPickedLanguage === true) {
    if (isFirstLaunch === null) {
      routeName = 'Onboarding';
      // return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
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
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor="#007bff" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={routeName}>
          <Stack.Screen
            name="Onboarding"
            options={{headerShown: false}}
            component={OnboardingScreen_doc}
          />
          {/* <Stack.Screen
            name="Intro_screen_doc"
            component={Intro_screen_doc}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="Lang_select"
            component={Lang_select}
            //options={{headerShown: false}}
            options={Header('Language Selection', '#007bff')}
          />
          <Stack.Screen
            name="Login_screen"
            component={Login_screen}
            options={{headerShown: false}}
            // options={Header('Login ', '#007bff')}
          />

          <Stack.Screen
            name="Personal_info_doc"
            component={Personal_info_doc}
            options={Header('Create Account', '#007bff')}
          />

          <Stack.Screen
            name="Upload_pix_doc"
            component={Upload_pix_doc}
            options={Header('Create Account', '#007bff')}
          />

          <Stack.Screen
            name="Create_password"
            component={Create_password}
            options={Header('Create Account', '#007bff')}
          />
          <Stack.Screen
            name="Successful_page"
            component={Successful_page}
            options={Header('Successful', '#007bff')}
          />
          <Stack.Screen
            name="National_ID_verify"
            component={National_ID_verify}
            options={Header('KYC Verification', '#007bff')}
          />
          <Stack.Screen
            name="Personal_info_kyc"
            component={Personal_info_kyc}
            options={Header('KYC Verification', '#007bff')}
          />
          <Stack.Screen
            name="Work_experience"
            component={Work_experience}
            options={Header('KYC Verification', '#007bff')}
          />

          <Stack.Screen
            name="Verify_account"
            component={Verify_account}
            options={Header('Verification Code', '#007bff')}
          />

          <Stack.Screen
            name="Success_page_kyc"
            component={Success_page_kyc}
            options={Header('Success Page', '#007bff')}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
