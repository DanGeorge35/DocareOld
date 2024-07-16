/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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

import {successMsg, errorMsg} from '../../constant';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useConfig} from '../../context/config.context';

import EmailView from './Includes/Email_view';
import PhoneView from './Includes/Phone_view';

const Forget_pass = ({navigation}) => {
  const layout = useWindowDimensions();
  const [isLoading, setisLoading] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [Email, setEmail] = useState('');
  const [errEmail, seterrEmail] = useState('');
  const toast = useToast();
  const {BASE_URL} = useConfig();

  const onGetCode = () => {
    setisLoading(true);

    const ObjData = {
      email: Email,
      // password: Pass,
    };

    const config = {
      method: 'post',
    
      url: `${BASE_URL}/auth/resetpassword`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: ObjData,
      validateStatus: function (status) {
        return status >= 200 && status < 500; // Accepts all status codes from 200 to 499
      },
    };

    axios(config)
    .then(response => {
      // Handle successful response (200-499)
      if (response.data.success === true) {
        successMsg(toast, response.data.message);
        //UserSession(response.data);
        console.log(response.data);
        navigation.navigate('Retrieve_otp');
      } else {
        errorMsg(toast, response.data.message);
      }
      setisLoading(false);
    })
    .catch(error => {
      // Handle error (status code 500 and above)
      setisLoading(false);
      console.error('Error:', error);
    });
    console.log('hello');
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

      <FormControl w="100%" maxW="500" alignItems="left" mt="5">
        <Box mb="2" mt="3">
          <Input
            type="text"
            size="md"
            variant="outline"
            placeholder="Enter Email Address"
            minWidth="300"
            w="100%"
            style={styles.input}
            onChangeText={val => setEmail(val)}
          />
        </Box>

        <Pressable mt="8">
          <Text style={{textAlign: 'center', color: '#000'}}>
            You will receive an email of your verification code
          </Text>
        </Pressable>

        {isLoading ? (
          <Button
            isLoading
            spinnerPlacement="end"
            isLoadingText="Loading.."
            mt="90"
            borderRadius="md"
            bg="#1C70EE">
            Button
          </Button>
        ) : (
          <Box alignItems="center">
            <Button
              bg="#1C70EE"
              mt="90"
              borderRadius="md"
              w="300"
              onPress={onGetCode}>
              Get Code
            </Button>
          </Box>
        )}

        <Pressable mt="8" onPress={() => navigation.navigate('Create_account')}>
          <Text style={{textAlign: 'center', color: '#000'}}>
            Don’t have an Account?{' '}
            <Text style={{fontWeight: 'bold'}}> Create now</Text>
          </Text>
        </Pressable>
      </FormControl>
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

  input: {
    height: 52,
    padding: 16,
  },

  // DocareText: {
  //   fontSize: 40,
  //   color: '#1C70EE',
  //   lineHeight: 48.84,
  //   fontFamily: 'HelveticaNeueBold',
  //   marginTop: 0,
  // },

  // tab_view: {
  //   width: '100%',
  //   height: 50,
  //   backgroundColor: '#007bff',
  //   marginTop: 20,
  //   borderTopLeftRadius: 10,
  //   borderTopRightRadius: 10,
  // },

  // form_view: {
  //   width: 335,
  //   height: 291,
  //   marginTop: 45,
  // },

  // get_start_btn: {
  //   width: 327,
  //   height: 52,
  //   marginTop: 0,
  //   //color:"red",
  //   // backgroundColor:"1C70EE",

  //   borderRadius: 12,
  //   padding: 16,
  // },
});

export default Forget_pass;
