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
//import Contact from '../screens/Emergency_order/Patient_profile/Contact';
import Doctors_list_view from '../screens/appointment_scheduling/Doctors_list_view';
//import Emergency_nav from '../screens/Emergency_order/Emergency_nav';
import {useConfig} from '../context/config.context';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

const Stack = createStackNavigator();

//======================Emergency Order==============================

import {createDrawerNavigator} from '@react-navigation/drawer';

import Emergency_order_map from '../screens/Emergency_order/Emergency_screeens/Emergency_order_map';
import Screen1 from '../screens/Emergency_order/Emergency_screeens/Screen1';

//=======================Profile=====================

import Profile from '../screens/Emergency_order/Patient_profile/Profile';
import Personal_info from '../screens/Emergency_order/Patient_profile/Personal_info';
import Contact from '../screens/Emergency_order/Patient_profile/Contact';
import Medical_info from '../screens/Emergency_order/Patient_profile/Medical_info';
import Location_info from '../screens/Emergency_order/Patient_profile/Location_info';
import Communication_pref from '../screens/Emergency_order/Patient_profile/Communication_pref';
import Security_settings from '../screens/Emergency_order/Patient_profile/Security_settings';
import Help_and_support from '../screens/Emergency_order/Patient_profile/Security_settings/Help_and_support';

import Medical_history from '../screens/Emergency_order/Patient_profile/Medical_info/Medical_history';
import Medical_history_blank from '../screens/Emergency_order/Patient_profile/Medical_info/Medical_history_blank';
import Medical_history_list from '../screens/Emergency_order/Patient_profile/Medical_info/Medical_history_list';

import Current_medication from '../screens/Emergency_order/Patient_profile/Medical_info/Current_medication';
import Current_medication_blank from '../screens/Emergency_order/Patient_profile/Medical_info/Current_medication_blank';
import Current_medication_list from '../screens/Emergency_order/Patient_profile/Medical_info/Current_medication_list';

import Allergies_list from '../screens/Emergency_order/Patient_profile/Medical_info/Allergies_list';
import Allergies from '../screens/Emergency_order/Patient_profile/Medical_info/Allergies';
import Allergies_blank from '../screens/Emergency_order/Patient_profile/Medical_info/Allergies_blank';

import Emergency_contact_blank from '../screens/Emergency_order/Patient_profile/Medical_info/Emergency_contact_blank';
import Emergency_contact_list from '../screens/Emergency_order/Patient_profile/Medical_info/Emergency_contact_list';
import Emergency_contact from '../screens/Emergency_order/Patient_profile/Medical_info/Emergency_contact';

import Diagnostic_test_blank from '../screens/Emergency_order/Patient_profile/Medical_info/Diagnostic_test_blank';
import Diagnostic_test_list from '../screens/Emergency_order/Patient_profile/Medical_info/Diagnostic_test_list';
import Diagnostic_test from '../screens/Emergency_order/Patient_profile/Medical_info/Diagnostic_test';

import Chronic_conditions_mgt from '../screens/Emergency_order/Patient_profile/Medical_info/Chronic_conditions_mgt';
import Chronic_conditions_mgt_blank from '../screens/Emergency_order/Patient_profile/Medical_info/Chronic_conditions_mgt_blank';
import Chronic_conditions_mgt_list from '../screens/Emergency_order/Patient_profile/Medical_info/Chronic_conditions_mgt_list';

import Pry_care_phy_info_blank from '../screens/Emergency_order/Patient_profile/Medical_info/Pry_care_phy_info_blank';
import Pry_care_phy_info_list from '../screens/Emergency_order/Patient_profile/Medical_info/Pry_care_phy_info_list';
import Pry_care_phy_info from '../screens/Emergency_order/Patient_profile/Medical_info/Pry_care_phy_info';

import Prefered_lang from '../screens/Emergency_order/Patient_profile/Communication_pref/Prefered_lang';
import Com_method from '../screens/Emergency_order/Patient_profile/Communication_pref/Com_method';
import Privacy_settings from '../screens/Emergency_order/Patient_profile/Communication_pref/Privacy_settings';
import Notification_settings from '../screens/Emergency_order/Patient_profile/Communication_pref/Notification_settings';
import Terms from '../screens/Emergency_order/Patient_profile/Communication_pref/Terms';
import Policy from '../screens/Emergency_order/Patient_profile/Communication_pref/Policy';
//===================================================

//import Profile_nav from './Patient_profile/Profile_nav';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import DateTimePicker from '@react-native-community/datetimepicker';

const Drawer = createDrawerNavigator();

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

const ProfileNav = () => {
  return (
    <Stack.Navigator initialRouteName={Profile}>
      <Stack.Screen
        name="Profile"
        options={{headerShown: false}}
       // options={Header('Profile', '#007bff')}
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
  );
};

const EmergencyNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Emergency_order_map"
        component={Emergency_order_map}
        options={{
          drawerLabel: 'Home',
          title: '',
          headerShown: false,
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
            opacity: 1,
            color: '#fff',
            // shadowColor:"#fff",
            // Specify the height of your custom header
          },
        }}
      />

      <Drawer.Screen
        options={{
          drawerLabel: 'Profile',
          title: 'Profile',
          drawerIcon: ({focused, size}) => (
            <FontAwesome5
              name="user"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
          headerShown: false,
          cardOverlayEnabled: false,
        }}
        name="ProfileNav"
        component={ProfileNav}
      />
    </Drawer.Navigator>
  );
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
        name="EmergencyNav"
        options={{headerShown: false}}
        component={EmergencyNav}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
