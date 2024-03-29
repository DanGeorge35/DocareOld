import 'react-native-pager-view';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import React ,{useState, useEffect} from 'react';


//========================================================================

import Splash_screen_doc from './screens/introscreens_doctor/Splash_screen_doc';
import Intro_screen_doc from './screens/introscreens_doctor/Intro_screen_doc';
import Lang_select from './screens/introscreens_doctor/Lang_select';
import Login_screen from './screens/introscreens_doctor/Login_screen';
import Create_account_doc from './screens/introscreens_doctor/Create_account_doc';


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
                    name="Create_account_doc" 
                    options={{headerShown:false}}
                    component={Create_account_doc} 
                    />



  </Stack.Navigator>

        
          </NavigationContainer>
    </NativeBaseProvider>

  )
}

