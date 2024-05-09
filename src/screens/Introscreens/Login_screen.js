/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  NativeBaseProvider,
  HStack,
  Spacer,
  FormControl,
  Input,
  Box,
  Text,
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
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import EmailView from './includes/Email_view';
//import PhoneView from './includes/Phone_view';

const Login_screen = ({navigation}) => {
  const layout = useWindowDimensions();

  const [show, setShow] = React.useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');

  const [errEmail, seterrEmail] = useState('');
  const [errPass, seterrPass] = useState('');
  const toast = useToast();

  const handleLogin = () => {
    setisLoading(true);

   
    // const objLoginData = JSON.stringify({
    //   email: Email,
    //   password: Pass,
    // });

    const objLoginData = JSON.stringify({
      email: "show1@gmail.com",
      password: "111",
    });

    //console.log(objLoginData);

    const config = {
      method: 'post',
      url: 'https://docare.posaccountant.com/main/api/v1/auth/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data: objLoginData,
    };

    //console.log(config)
   
    axios(config)
      .then(response => {
         //console.log('Response:', response.data);
        //console.log('Response:', response.data.data);
       // console.log('Response:', response.token);

        if (response.data.success == true) {
          rspMsg1('Successful');
         console.log(response.data)
          UserSession(response.data);
          navigation.navigate('Emergency_nav');
        } else {
          rspMsg1(response.message);
        }

        setisLoading(false);
      })
      .catch(error => {
       // console.log("error")
        console.error('Error:', error);
        setisLoading(false);
      });

    //console.log('Login');
  };

  const UserSession = async (userData) => {
    try {
      await AsyncStorage.setItem('UserData', JSON.stringify(userData));
    } catch (e) {
      //console.log(e);
    }
  };

  const rspMsg1 = msg => {
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
            <Text fontSize="14" fontWeight="700">
              {msg}
            </Text>
          </Box>
        );
      },
    });
  };


  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <View style={styles.inputContainer}>
          <Image
            source={require('../../../assets/DOc3.png')} // Specify the image source
            style={styles.logo} // Apply styles to the image
            resizeMode="contain" // Set resizeMode to control how the image should be resized
            alt="logo"
          />

          <Text
            style={{
              textAlign: 'center',
              color: '#499eff',
              fontWeight: '700',
              fontSize: 22,
            }}>
            DOCARE
          </Text>

          <Text
            lineHeight="25"
            fontFamily="Inter-Black"
            onPress={() => navigation.navigate('Account_type')}
            style={{textAlign: 'center', color: '#1C70EE', marginTop: 50}}>
            Login to your Account
          </Text>

          <FormControl
            w="100%"
            alignItems="left"
            mt="5"
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 40,
              elevation: 1,
              borderWidth: 2,
              borderColor: '#eee',
              backgroundColor: '#ffffff',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <Box mb="2" mt="2">
              <FormControl.Label style={{color: 'white'}}>
                Email Address
              </FormControl.Label>

              <Input
                type="text"
                size="md"
                variant="outline"
                placeholder="Enter Email Address"
                minWidth="280"
                style={styles.input}
                w="90%"
                onChangeText={val => setEmail(val)}
                // onChangeText={() => {
                //   console.log('');
                // }}
              />

              <FormControl.Label mt="5">Password</FormControl.Label>
              <Input
                type={show ? 'text' : 'password'}
                size="lg"
                variant="outline"
                style={styles.input}
                onChangeText={val => setPass(val)}
                InputRightElement={
                  <Pressable
                    onPress={() => setShow(!show)}
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      style={{
                        width: 40,
                      }}
                      as={<FontAwesome5 name={show ? 'eye' : 'eye-slash'} />}
                      size={5}
                      color="muted.400"
                    />
                  </Pressable>
                }
                placeholder="Password"
              />

              {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errPhone}
                  </FormControl.ErrorMessage> */}
            </Box>

            <Pressable
              pb="4"
              pt="3"
              mb="4"
              mt="0"
              onPress={() => navigation.navigate('Forget_pass')}>
              <Text
                style={{textAlign: 'right', color: '#000', fontWeight: 'bold'}}>
                Forgot Password?
              </Text>
            </Pressable>

            {isLoading ? (
              <Button
                isLoading
                spinnerPlacement="end"
                isLoadingText="Loading.."
                mt="6"
                bg="#00004d">
                Button
              </Button>
            ) : (
              <Box alignItems="center">
                <Button
                  bg="#1C70EE"
                  borderRadius="md"
                  w="100%"
                  p="4"
                  onPress={handleLogin}>
                  Login
                </Button>
              </Box>
            )}

            <Pressable
              mt="8"
              onPress={() => navigation.navigate('Create_account')}>
              <Text style={{textAlign: 'center', color: '#000'}}>
                Don’t have an Account?
                <Text style={{fontWeight: 'bold'}}> Create now</Text>
              </Text>
            </Pressable>
          </FormControl>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 52,
    padding: 16,
  },
  container: {
    paddingTop: 220,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
    minHeight: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },

  DocareText: {
    fontSize: 40,
    // fontWeight:'bold',
    color: '#1C70EE',
    lineHeight: 48.84,
    fontFamily: 'HelveticaNeueBold',
    //width:156,
    //height:49,
    marginTop: 60,
    // marginLeft:110
  },

  tab_view: {
    width: '100%',
    height: 50,
    backgroundColor: '#1C70EE',
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  form_view: {
    width: 335,
    height: 291,
    marginTop: 45,
  },

  doCare_text: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 48.84,
    color: '#1C70EE',
  },

  doCare_view: {
    width: 156,
    height: 49,
    marginTop: 41,
    marginLeft: 110,
  },

  lang_view: {
    width: 331,
    height: 27,
    marginTop: 20,
    marginLeft: 14,
    color: '#000000',
  },

  lang_text: {
    width: 245,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 27,
    fontFamily: 'General Sans',
  },

  logo: {
    height: 80,
    width: 80,
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default Login_screen;
