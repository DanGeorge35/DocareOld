/* eslint-disable react-hooks/rules-of-hooks */
import 'react-native-pager-view';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

//import * as Reanimated from 'react-native-reanimated';

import React, {useState, useEffect} from 'react';

import {StatusBar} from 'react-native';
import Splash_screen from './screens/Introscreens/Splash_screen';
import Intro_screen from './screens/Introscreens/Intro_screen';
import OnboardingScreen from './screens/Introscreens/OnboardingScreen';
import Lang_select from './screens/Introscreens/Lang_select';
import Account_type from './screens/Introscreens/Account_type';
import Login_screen from './screens/Introscreens/Login_screen';
import Login_screen1 from './screens/Introscreens/Login_screen1';
import Tabss from './screens/Introscreens/Tabss';
import Create_account from './screens/Introscreens/Create_account';
import Success_page from './screens/Introscreens/Success_page';
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Forget_pass from './screens/Forget_password/Forget_pass';
import Retrieve_otp from './screens/Forget_password/Retrieve_otp';
import Reset_password from './screens/Forget_password/Reset_password';
import Successful_page from './screens/Forget_password/Successful_page';

// import Profile from './screens/Patient_profile/Profile';
// import Personal_info from './screens/Patient_profile/Personal_info';
 import Contact from './screens/Emergency_order/Patient_profile/Contact';
// import Medical_info from './screens/Patient_profile/Medical_info';
// import Location_info from './screens/Patient_profile/Location_info';
// import Communication_pref from './screens/Patient_profile/Communication_pref';
// import Security_settings from './screens/Patient_profile/Security_settings';

//========================================================================



import Doctors_list_view from './screens/appointment_scheduling/Doctors_list_view';
//import Emergency_order_map from './screens/Emergency_order/Emergency_order_map';
import Emergency_nav from './screens/Emergency_order/Emergency_nav';

import {NativeBaseProvider, Text, Box} from 'native-base';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function app() {
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

  // if(count == 0){
  //   //console.log(count)
  //   setIsLoading(false)
  // }

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

  if (isLoading) {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#007bff" />
        <Splash_screen />
      </>
    );
  }

  console.log(hasPickedLanguage);

  Account_type;
  if (hasPickedLanguage === null) {
    routeName = 'Lang_select';
    // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (hasPickedLanguage == true) {
    if (isFirstLaunch === null) {
      routeName = 'Onboarding';
      // return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
    } else if (isFirstLaunch == true) {
      routeName = 'Onboarding';
    } else {
      routeName = 'Login_screen';
    }
  } else {
    routeName = 'Lang_select';
  }

  

  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor="#007bff" />
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName={isSignUp ? 'Intro_screen':'Login_screen'}> */}

        <Stack.Navigator initialRouteName={routeName}>
          {/* <Stack.Screen
                name="Intro_screen"
                options={{headerShown:false}}
                component={Intro_screen}
                /> */}

          <Stack.Screen
            name="Onboarding"
            options={{headerShown: false}}
            component={OnboardingScreen}
          />



         <Stack.Screen
              name="Emergency_nav"
              options={{headerShown: false}}
              component={Emergency_nav}
            />

        <Stack.Screen
            name="Contact"
            options={Header('Contact', '#007bff')}
            component={Contact}
          />
            
       
       
          {/* <Stack.Screen
              name="Doctors_list_view"
              options={{headerShown: false}}
              component={Doctors_list_view}
            /> */}


          <Stack.Screen
            name="Lang_select"
            options={{headerShown: false}}
            component={Lang_select}
          />

          <Stack.Screen
            name="Account_type"
            options={{headerShown: false}}
            component={Account_type}
          />

          <Stack.Screen
            name="Login_screen"
            options={{headerShown: false}}
            component={Login_screen}
          />

          <Stack.Screen
            name="Create_account"
            options={Header('Create Account', '#007bff')}
            component={Create_account}
          />

          <Stack.Screen
            name="Success_page"
            options={{headerShown: true}}
            component={Success_page}
          />

          <Stack.Screen
            name="Forget_pass"
            options={Header('Forgot Password', '#007bff')}
            component={Forget_pass}
          />

          <Stack.Screen
            name="Retrieve_otp"
            options={Header('Retrieve OTP', '#007bff')}
            component={Retrieve_otp}
          />

          <Stack.Screen
            name="Reset_password"
            options={Header('Reset Password', '#007bff')}
            component={Reset_password}
          />

          <Stack.Screen
            name="Successful_page"
            options={Header('', '#007bff')}
            component={Successful_page}
          />

          

          
        </Stack.Navigator>

        {/* <Splash_screen/> */}
        {/* <Intro_screen/> */}
        {/* <Lang_select/> */}
        {/* <Account_type/> */}
        {/* <Login_screen/> */}
        {/* <Create_account/> */}

        {/* <Success_page/> */}
        {/* <Tabss/> */}
        {/* <Forget_pass/> */}
        {/* <Retrieve_otp/> */}
        {/* <Reset_password/> */}

        {/* <Successful_page/> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
