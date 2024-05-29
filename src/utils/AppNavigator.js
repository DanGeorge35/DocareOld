// AppNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash_screen from '../screens/Introscreens/Splash_screen';
import Intro_screen from '../screens/Introscreens/Intro_screen';
import OnboardingScreen from '../screens/Introscreens/OnboardingScreen';
import Lang_select from '../screens/Introscreens/Lang_select';
import Account_type from '../screens/Introscreens/Account_type';
import Login_screen from '../screens/Introscreens/Login_screen';
import Login_screen1 from '../screens/Introscreens/Login_screen1';
import Tabss from '../screens/Introscreens/Tabss';
import Create_account from '../screens/Introscreens/Create_account';
import Success_page from '../screens/Introscreens/Success_page';
import Forget_pass from '../screens/Forget_password/Forget_pass';
import Retrieve_otp from '../screens/Forget_password/Retrieve_otp';
import Reset_password from '../screens/Forget_password/Reset_password';
import Successful_page from '../screens/Forget_password/Successful_page';
import Contact from '../screens/Emergency_order/Patient_profile/Contact';
import Doctors_list_view from '../screens/appointment_scheduling/Doctors_list_view';
import Emergency_nav from '../screens/Emergency_order/Emergency_nav';
import {useConfig} from '../context/config.context';

const Stack = createStackNavigator();

const Header = (title, backgroundColor) => {
  return {
    title: title,
    headerStyle: {
      backgroundColor: backgroundColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
};

const AppNavigator = ({initialRouteName}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="Onboarding"
        options={{headerShown: false}}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="Contact"
        options={Header('Contact', '#007bff')}
        component={Contact}
      />
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
      <Stack.Screen
        name="Emergency_nav"
        options={{headerShown: false}}
        component={Emergency_nav}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
