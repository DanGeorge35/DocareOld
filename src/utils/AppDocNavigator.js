//import { View, Text } from 'react-native'
import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
// Import Screens

import Intro_screen_doc from '../screens/doctor_app/introscreens_doctor/Intro_screen_doc';
import Lang_select from '../screens/doctor_app/introscreens_doctor/Lang_select';
import OnboardingScreen_doc from '../screens/doctor_app/introscreens_doctor/OnboardingScreen_doc';
import Login_screen from '../screens/doctor_app/introscreens_doctor/Login_screen';

import Personal_info_doc from '../screens/doctor_app/create_account/Personal_info_doc';
import Upload_pix_doc from '../screens/doctor_app/create_account/Upload_pix_doc';
import Create_password from '../screens/doctor_app/create_account/Create_password';
import Successful_page from '../screens/doctor_app/create_account/Successful_page';
import Verify_account from '../screens/doctor_app/create_account/Verify_account';

import National_ID_verify from '../screens/doctor_app/kyc/National_ID_verify';
import Personal_info_kyc from '../screens/doctor_app/kyc/Personal_info_kyc';
import Work_experience from '../screens/doctor_app/kyc/Work_experience';
import Success_page_kyc from '../screens/doctor_app/kyc/Success_page_kyc';

const Stack = createStackNavigator();

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

const AppDocNavigator = ({initialRouteName}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
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
            options={{headerShown: false}}
            //options={Header('Language Selection', '#007bff')}
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
  )
}

export default AppDocNavigator