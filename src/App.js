//import 'react-native-pager-view';
import 'react-native-gesture-handler';
//import 'react-native-reanimated';

import React ,{useState, useEffect} from 'react';
import Splash_screen from './screens/Introscreens/Splash_screen';
import Intro_screen from './screens/Introscreens/Intro_screen';
import Lang_select from './screens/Introscreens/Lang_select';
import Account_type from './screens/Introscreens/Account_type';
import Login_screen from './screens/Introscreens/Login_screen';
import Login_screen1 from './screens/Introscreens/Login_screen1';
import Tabss from './screens/Introscreens/Tabss';
import Create_account from './screens/Introscreens/Create_account';
import Success_page from './screens/Introscreens/Success_page';

import Forget_pass from './screens/Forget_password/Forget_pass';
import Retrieve_otp from './screens/Forget_password/Retrieve_otp';
import Reset_password from './screens/Forget_password/Reset_password';
import Successful_page from './screens/Forget_password/Successful_page';
import Profile from './screens/Patient_profile/Profile';
import Personal_info from './screens/Patient_profile/Personal_info';
import Contact from './screens/Patient_profile/Contact';
import Medical_info from './screens/Patient_profile/Medical_info';
import Location_info from './screens/Patient_profile/Location_info';
import Communication_pref from './screens/Patient_profile/Communication_pref';
import Security_settings from './screens/Patient_profile/Security_settings';


import { NativeBaseProvider, Text, Box } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function app() {

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

  // if(count == 0){
  //   //console.log(count)
  //   setIsLoading(false)
  // }


  if (isLoading) {
 
    return <Splash_screen />;
  
 }


  return (
    <NativeBaseProvider>

        <NavigationContainer>

        {/* <Stack.Navigator initialRouteName={isSignUp ? 'Intro_screen':'Login_screen'}> */}

        <Stack.Navigator initialRouteName='Intro_screen' >

          <Stack.Group >
          
          

      <Stack.Screen 
          name="Intro_screen" 
          options={{headerShown:false}}
          component={Intro_screen} 
          />

       
          
      </Stack.Group>


      <Stack.Screen 
          name="Contact" 
          options={{headerShown:false}}
          component={Contact} 
          />

      <Stack.Screen 
          name="Communication_pref" 
          options={{headerShown:false}}
          component={Communication_pref} 
          />

      <Stack.Screen 
          name="Location_info" 
          options={{headerShown:false}}
          component={Location_info} 
          />

<Stack.Screen 
          name="Medical_info" 
          options={{headerShown:false}}
          component={Medical_info} 
          />

     <Stack.Screen 
          name="Profile" 
          options={{headerShown:false}}
          component={Profile} 
          />

           <Stack.Screen 
          name="Personal_info" 
          options={{headerShown:false}}
          component={Personal_info} 
          />

      <Stack.Screen 
          name="Security_settings" 
          options={{headerShown:false}}
          component={Security_settings} 
          />

        <Stack.Screen 
          name="Lang_select" 
          options={{headerShown:false}}
          component={Lang_select} 
          />

      <Stack.Screen 
          name="Account_type" 
          options={{headerShown:false}}
          component={Account_type} 
          />

      <Stack.Screen 
          name="Login_screen" 
          options={{headerShown:false}}
          component={Login_screen} 
          />

    <Stack.Screen 
          name="Create_account" 
          options={{headerShown:false}}
          component={Create_account} 
          />

      <Stack.Screen 
          name="Success_page" 
          options={{headerShown:false}}
          component={Success_page} 
          />

      <Stack.Screen 
          name="Forget_pass" 
          options={{headerShown:false}}
          component={Forget_pass} 
          />

<Stack.Screen 
          name="Retrieve_otp" 
          options={{headerShown:false}}
          component={Retrieve_otp} 
          />

<Stack.Screen 
          name="Reset_password" 
          options={{headerShown:false}}
          component={Reset_password} 
          />

<Stack.Screen 
          name="Successful_page" 
          options={{headerShown:false}}
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
  )
}

