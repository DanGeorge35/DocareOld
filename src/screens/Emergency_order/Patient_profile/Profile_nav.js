import { View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider, Text, Box} from 'native-base';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

import Profile from './Profile';
 import Personal_info from './Personal_info';
 import Contact from './Contact';
 import Medical_info from './Medical_info';
 import Location_info from './Location_info';
 import Communication_pref from './Communication_pref';
 import Security_settings from './Security_settings';
 import Help_and_support from './Security_settings/Help_and_support';


 import Medical_history from './Medical_info/Medical_history';
 import Medical_history_blank from './Medical_info/Medical_history_blank';
 import Medical_history_list from './Medical_info/Medical_history_list';
 
import Current_medication from './Medical_info/Current_medication';
import Current_medication_blank from './Medical_info/Current_medication_blank';
import Current_medication_list from './Medical_info/Current_medication_list';

import Allergies_list from './Medical_info/Allergies_list';
import Allergies from './Medical_info/Allergies';
import Allergies_blank from './Medical_info/Allergies_blank';


import Emergency_contact_blank from './Medical_info/Emergency_contact_blank';
import Emergency_contact_list from './Medical_info/Emergency_contact_list';
import Emergency_contact from './Medical_info/Emergency_contact';

import Diagnostic_test_blank from './Medical_info/Diagnostic_test_blank';
import Diagnostic_test_list from './Medical_info/Diagnostic_test_list';
import Diagnostic_test from './Medical_info/Diagnostic_test';


import Chronic_conditions_mgt from './Medical_info/Chronic_conditions_mgt';
import Chronic_conditions_mgt_blank from './Medical_info/Chronic_conditions_mgt_blank';
import Chronic_conditions_mgt_list from './Medical_info/Chronic_conditions_mgt_list';

import Pry_care_phy_info_blank from './Medical_info/Pry_care_phy_info_blank';
import Pry_care_phy_info_list from './Medical_info/Pry_care_phy_info_list';
import Pry_care_phy_info from './Medical_info/Pry_care_phy_info';

import Prefered_lang from './Communication_pref/Prefered_lang';
import Com_method from './Communication_pref/Com_method';
import Privacy_settings from './Communication_pref/Privacy_settings';
import Notification_settings from './Communication_pref/Notification_settings';
import Terms from './Communication_pref/Terms';
import Policy from './Communication_pref/Policy';

const Stack = createStackNavigator();

const Header = (title, backgroundColor) => {
    return {
      title: title, // Change the title of the header
      headerShown:true,
      headerStyle: {
        backgroundColor: backgroundColor, // Change the background color of the header
      },
      headerTintColor: '#fff', // Change the text color of the header
      headerTitleStyle: {
        fontWeight: 'bold', // Change the font weight of the header title
      },
    };
  };

const Profile_nav = () => {
  return (
  
    <Stack.Navigator initialRouteName={Profile}>

        <Stack.Screen
            name="Profile"
            options={Header('Profile', '#007bff')}
            
            component={Profile}
          />

            
          <Stack.Screen
            name="Contact"
            options={Header('Contact', '#007bff')}
            component={Contact}
          />

        <Stack.Screen
            name="Medical_history_list"
            options={Header('Medical History List', '#007bff')}
            component={Medical_history_list}
          />


          <Stack.Screen
            name="Medical_history_blank"
            options={Header('Medical History', '#007bff')}
            component={Medical_history_blank}
          />

        <Stack.Screen
            name="Policy"
            options={Header('Privacy Policy', '#007bff')}
            component={Policy}
          />

        <Stack.Screen
            name="Help_and_support"
            options={Header('Help And Support', '#007bff')}
            component={Help_and_support}
          />



          <Stack.Screen
            name="Communication_pref"
            options={Header('Communication Preferance', '#007bff')}
            component={Communication_pref}
          />

          <Stack.Screen
            name="Location_info"
            options={Header('Location Information', '#007bff')}
            component={Location_info}
          /> 
          

        <Stack.Screen
            name="Medical_info"
            options={Header('Medical Information', '#007bff')}
            component={Medical_info}
          />


          <Stack.Screen
            name="Personal_info"
            options={Header('Personal Information', '#007bff')}
            component={Personal_info}
          />

          <Stack.Screen
            name="Security_settings"
            options={Header('Security settings', '#007bff')}
            component={Security_settings}
          /> 



          <Stack.Screen
            name="Current_medication"
            options={Header('Current medication', '#007bff')}
            component={Current_medication}
          />

        <Stack.Screen
            name="Current_medication_blank"
            options={Header('Current medication', '#007bff')}
            component={Current_medication_blank}
          />

        <Stack.Screen
            name="Current_medication_list"
            options={Header('Current medication', '#007bff')}
            component={Current_medication_list}
          />


        <Stack.Screen
            name="Allergies_blank"
            options={Header('Allergies', '#007bff')}
            component={Allergies_blank}
          />

        <Stack.Screen
            name="Allergies"
            options={Header('Allergies', '#007bff')}
            component={Allergies}
          />

      <Stack.Screen
            name="Allergies_list"
            options={Header('Allergies', '#007bff')}
            component={Allergies_list}
          />


          <Stack.Screen
            name="Emergency_contact"
            options={Header('Emergency contact', '#007bff')}
            component={Emergency_contact}
          />

      <Stack.Screen
            name="Emergency_contact_blank"
            options={Header('Emergency contact', '#007bff')}
            component={Emergency_contact_blank}
          />

      <Stack.Screen
            name="Emergency_contact_list"
            options={Header('Emergency contact', '#007bff')}
            component={Emergency_contact_list}
          />



          <Stack.Screen
            name="Chronic_conditions_mgt"
            options={Header('Chronic Conditions Mgt.', '#007bff')}
            component={Chronic_conditions_mgt}
          />

        <Stack.Screen
            name="Chronic_conditions_mgt_blank"
            options={Header('Chronic Conditions Mgt.', '#007bff')}
            component={Chronic_conditions_mgt_blank}
          />

        <Stack.Screen
            name="Chronic_conditions_mgt_list"
            options={Header('Chronic Conditions Mgt.', '#007bff')}
            component={Chronic_conditions_mgt_list}
          />

          <Stack.Screen
            name="Pry_care_phy_info_blank"
            options={Header('Primary Physical Information', '#007bff')}
            component={Pry_care_phy_info_blank}
          />

      <Stack.Screen
            name="Pry_care_phy_info"
            options={Header('Primary Physical Information', '#007bff')}
            component={Pry_care_phy_info}
          />

        <Stack.Screen
            name="Pry_care_phy_info_list"
            options={Header('Primary Physical Information', '#007bff')}
            component={Pry_care_phy_info_list}
          />

        <Stack.Screen
            name="Diagnostic_test_blank"
            options={Header('Diagnostic Test Results', '#007bff')}
            component={Diagnostic_test_blank}
          />

          <Stack.Screen
            name="DiagnosticTest"
            options={Header('Diagnostic Test Results', '#007bff')}
            component={Diagnostic_test}
          />

        <Stack.Screen
            name="Diagnostic_test_list"
            options={Header('Diagnostic Test Results', '#007bff')}
            component={Diagnostic_test_list}
          />



          <Stack.Screen
            name="Prefered_lang"
            options={Header('Prefered Lang.', '#007bff')}
            component={Prefered_lang}
          />

          <Stack.Screen
            name="Com_method"
            options={Header('Communication Method', '#007bff')}
            //options={{headerShown: false}}
            component={Com_method}
          />

          <Stack.Screen
            name="Privacy_settings"
            options={Header('Privacy Settings', '#007bff')}
            component={Privacy_settings}
          />

          <Stack.Screen
            name="Notification_settings"
            options={Header('Notification Settings', '#007bff')}
            component={Notification_settings}
          />

          <Stack.Screen
            name="Terms"
            options={Header('Terms And Conditions ', '#007bff')}
            component={Terms}
          />

          <Stack.Screen
            name="Medical_history"
            options={Header('Medical History', '#007bff')}
            component={Medical_history}
          /> 

    </Stack.Navigator>
    
  )
}

export default Profile_nav