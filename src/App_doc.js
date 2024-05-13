import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';

import 'react-native-pager-view';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

// Import Screens
import Splash_screen_doc from './screens/doctor_app/introscreens_doctor/Splash_screen_doc';
import Intro_screen_doc from './screens/doctor_app/introscreens_doctor/Intro_screen_doc';
import Lang_select from './screens/doctor_app/introscreens_doctor/Lang_select';
import Login_screen from './screens/doctor_app/introscreens_doctor/Login_screen';
import Personal_info_doc from './screens/doctor_app/create_account/Personal_info_doc';
import Upload_pix_doc from './screens/doctor_app/create_account/Upload_pix_doc';
import Create_password from './screens/doctor_app/create_account/Create_password';
import Successful_page from './screens/doctor_app/create_account/Successful_page';
import National_ID_verify from './screens/doctor_app/kyc/National_ID_verify';
import Personal_info_kyc from './screens/doctor_app/kyc/Personal_info_kyc';
import Work_experience from './screens/doctor_app/kyc/Work_experience';
import Success_page_kyc from './screens/doctor_app/kyc/Success_page_kyc';

const Stack = createStackNavigator();

export default function AppDoc() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 3-second loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Splash_screen_doc />;
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro_screen_doc">
          <Stack.Screen
            name="Intro_screen_doc"
            component={Intro_screen_doc}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lang_select"
            component={Lang_select}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login_screen"
            component={Login_screen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Personal_info_doc"
            component={Personal_info_doc}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Upload_pix_doc"
            component={Upload_pix_doc}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Create_password"
            component={Create_password}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Successful_page"
            component={Successful_page}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="National_ID_verify"
            component={National_ID_verify}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Personal_info_kyc"
            component={Personal_info_kyc}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Work_experience"
            component={Work_experience}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Success_page_kyc"
            component={Success_page_kyc}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
