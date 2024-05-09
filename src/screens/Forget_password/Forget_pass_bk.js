/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, useWindowDimensions, StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  NativeBaseProvider,
  HStack,
  Spacer,
  FormControl,
  Input,
  Text,
  Box,
  Badge,
  CheckIcon,
  Center,
  Flex,
  WarningOutlineIcon,
  VStack,
  Select,
  Stack,
  Image,
  Icon,
  useToast,
  FlatList,
  Button,
  Pressable,
} from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import EmailView from './Includes/Email_view';
import PhoneView from './Includes/Phone_view';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#2ae4ff'}}
    style={styles.tab_view}
    indicatorContainerStyle={{
      fontSize: 34,
      color: '#fff',
      backgroundColor: '#1356b863',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    }}
    activeColor="#fff"
    inactiveColor="#fff"
    tabStyle={{paddingVertical: 1, paddingHorizontal: 20, color: '#000'}}
    renderLabel={({route, focused, color}) => (
      <Text style={{color, margin: 3}}>{route.title}</Text>
    )}
  />
);

const Forget_pass = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'email', title: 'Email'},
    {key: 'phone_no', title: 'Phone Number'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'email':
        return (
          <EmailView
            onGetTop={() => navigation.navigate('Retrieve_otp')}
            onSignUp={() => navigation.navigate('Create_account')}
          />
        );
      case 'phone_no':
        return (
          <PhoneView
            onGetTop={() => navigation.navigate('Retrieve_otp')}
            onSignUp={() => navigation.navigate('Create_account')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <VStack space="2.5" pt="4" p="5" backgroundColor="#fff" flex={1}>
      <Box mt="5">
        <Text textAlign="left" color="#696969" fontWeight="bold" fontSize="18">
          Enter your Email Address to reset your password{' '}
        </Text>
        <Text fontWeight="normal" color="#696969">
          {' '}
          A 4-digit code will be sent to your designated email
        </Text>
      </Box>

      <TabView
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        activeTintColor="red"
        initialLayout={{width: 335}}
      />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    //width: 375,
    // height: 812,
  },

  DocareText: {
    fontSize: 40,
    color: '#1C70EE',
    lineHeight: 48.84,
    fontFamily: 'HelveticaNeueBold',
    marginTop: 0,
  },

  tab_view: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  form_view: {
    width: 335,
    height: 291,
    marginTop: 45,
  },

  get_start_btn: {
    width: 327,
    height: 52,
    marginTop: 0,
    //color:"red",
    // backgroundColor:"1C70EE",

    borderRadius: 12,
    padding: 16,
  },
});

export default Forget_pass;
