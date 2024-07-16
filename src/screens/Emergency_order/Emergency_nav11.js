import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Emergency_order_map from './Emergency_screeens/Emergency_order_map';
import Screen1 from './Emergency_screeens/Screen1';

//=======================Profile=====================

import Profile_nav from './Patient_profile/Profile_nav';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

const Drawer = createDrawerNavigator();


const Emergency_nav = () => {
 
  return (
    // <View>
    //   <Text>Emergency_nav</Text>
    // </View>

    <Drawer.Navigator>

    <Drawer.Screen 
    
      name="Emergency_order_map" 
     component={Emergency_order_map}

      options={{
        drawerLabel:"Home",
        title:"",
        headerShown:false,
        drawerIcon: ({focused, size}) => (
          <FontAwesome5
             name="home"
             size={size}
             color={focused ? '#7cc' : '#ccc'}
          />
          ),

           headerStyle: {
            height: 40,
           // backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backgroundColor: '#007bff',
            elevation: 0,
            shadowOpacity: 1,
            opacity:1,
            color:'#fff'
           // shadowColor:"#fff",
             // Specify the height of your custom header
          },

      }}
    
    />



<Drawer.Screen 
        options={{
          drawerLabel:"Profile",
          title:"Profile",
          drawerIcon: ({focused, size}) => (
            <FontAwesome5
              name="user"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
          headerShown:false,
          cardOverlayEnabled:false,
        }
      }
        name="Profile_nav" 
        component={Profile_nav}
   />


    </Drawer.Navigator>
  )
}

export default Emergency_nav