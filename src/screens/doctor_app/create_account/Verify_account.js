import {useEffect, useState} from 'react';
import {useWindowDimensions, StyleSheet, TextInput} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  NativeBaseProvider,
  HStack,
  Spacer,
  FormControl,
  Input,
  Box,
  Badge,
  CheckIcon,
  Center,
  Flex,
  WarningOutlineIcon,
  Icon,
  VStack,
  Select,
  Stack,
  Image,
  Text,
  View,
  useToast,
  FlatList,
  Button,
  Pressable,
} from 'native-base';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import {successMsg, errorMsg} from '../../../constant';

const Verify_account = ({navigation, route}) => {
  const [show, setShow] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [errOtpCode, errSetOtpCode] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
  
  const {data} = route.params;

  const validateInput = () => {
    let x = 0;
   
    if (otpCode === '') {
      x = 1;
      errSetOtpCode('OTP Code Can not be Empty');
    } else {
      errSetOtpCode('');
    }

    if (x === 0) {
      btnVerify();
    }
    setIsInvalid(x === 1);

  }

  const btnVerify = () => {

    setisLoading(true);
   const objVerifyAccount = {
    email: data.Email,
    token: otpCode,
    };

   // console.log(objVerifyAccount)

    
    const config = {
      method: 'post',
      url: 'https://docare.posaccountant.com/api/v1/auth/verify',
      headers: {
        'Content-Type': 'application/json',
      },
      data: objVerifyAccount,
    };

    
    //console.log(objToken);

    axios(config)
      .then(response => {
        console.log('Response:', response.data);
        //console.log('Response:', response.data.data);
        // console.log('Response:', response.token);

        if (response.data.success == true) {
          successMsg(toast, response.data.message);
         
         navigation.navigate('Login_screen');
        } else {
          //rspMsg1(response.message);
          errorMsg(toast, response.message);
        }
        setisLoading(false);
      })
      .catch(error => {
        // console.log("error")
        console.error('Error:', error);
        setisLoading(false);
      });
      

    //navigation.navigate('Login_screen');
  };

  return (
    <VStack space="2.5" p="4" backgroundColor="#fff" flex={1}>
      <Box mt="5">
        <Text textAlign="center" color="#000" fontWeight="normal" fontSize="16">
          Enter 6-digit code sent to you via Email
          
        </Text>
        <Text textAlign="center" color="#1C70EE" fontWeight="bold" fontSize="14">
          
           {data.Email}
        </Text>
      </Box>

      <FormControl w="100%" maxW="500" alignItems="left" mt="5" isInvalid={isInvalid}>
        <Box mb="2" mt="3">
          <FormControl.Label>OTP CODE</FormControl.Label>
          <Input
            keyboardType="numeric"
            //style={styles.input}
            placeholder="Enter OTP (000 - 000)"
            placeholderTextColor="#999"
            value={otpCode}
            onChangeText={val => setOtpCode(val)}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errOtpCode}
        </FormControl.ErrorMessage>
        </Box>

        <Pressable mt="8">
          <Text
            textAlign="center"
            color="#000000"
            fontFamily="GeneralSans-Regular"
            fontSize="14">
            Didn’t get OTP?
          </Text>
        </Pressable>

        <Pressable mt="0" onPress={() => console.log('am Pressed')}>
          <Text
            style={{
              fontWeight: 'normal',
              textAlign: 'center',
              color: '#1C70EE',
            }}>
            Resend OTP in 00:58s{' '}
          </Text>
        </Pressable>

        

        {isLoading ? (
            <Button
              isLoading
              spinnerPlacement="end"
              isLoadingText="Loading.."
               w="300"
              mt="90"
              bg="#00004d">
              Button
            </Button>
          ) : (
            <Box alignItems="center">
            <Button
              bg="#1C70EE"
              borderRadius="md"
              w="300"
              mt="90"
              onPress={validateInput}>
              Verify
            </Button>
          </Box>
          )}
      </FormControl>
    </VStack>
  );
};

export default Verify_account;
