import 'react-native-pager-view';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import React ,{useState, useEffect} from 'react';


//========================================================================

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


import { NativeBaseProvider, Text, Box } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function app_doc() {

  const [count, setCount] = useState(1);
  const [isSignUp , setIsSignUp] = useState(false);
  const [isLoading , setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }else{
        setIsLoading(false)
        setIsSignUp(false)
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);



  if (isLoading) {
 
    return <Splash_screen_doc />;
   
 }


  return (

    <NativeBaseProvider>

        <NavigationContainer>

       
        <Stack.Navigator initialRouteName='Intro_screen_doc'>
     

        <Stack.Group>
          
                <Stack.Screen 
                    name="Intro_screen_doc" 
                    options={{headerShown:false}}
                    component={Intro_screen_doc} 
                    />

               
         </Stack.Group>

                <Stack.Screen 
                    name="Lang_select" 
                    options={{headerShown:false}}
                    component={Lang_select} 
                    />

                <Stack.Screen 
                    name="Login_screen" 
                    options={{headerShown:false}}
                    component={Login_screen} 
                    />

                <Stack.Screen 
                    name="Personal_info_doc" 
                    options={{headerShown:false}}
                    component={Personal_info_doc} 
                    />

                  <Stack.Screen 
                    name="Upload_pix_doc" 
                    options={{headerShown:false}}
                    component={Upload_pix_doc} 
                    />

                  <Stack.Screen 
                    name="Create_password" 
                    options={{headerShown:false}}
                    component={Create_password} 
                    />

                  <Stack.Screen 
                    name="Successful_page" 
                    options={{headerShown:false}}
                    component={Successful_page} 
                    />

                  <Stack.Screen 
                    name="National_ID_verify" 
                    options={{headerShown:false}}
                    component={National_ID_verify} 
                    />

                <Stack.Screen 
                    name="Personal_info_kyc" 
                    options={{headerShown:false}}
                    component={Personal_info_kyc} 
                    />

                  <Stack.Screen 
                    name="Work_experience" 
                    options={{headerShown:false}}
                    component={Work_experience} 
                    />

                  <Stack.Screen 
                    name="Success_page_kyc" 
                    options={{headerShown:false}}
                    component={Success_page_kyc} 
                    />





  </Stack.Navigator>

        
          </NavigationContainer>
    </NativeBaseProvider>

  )
}

