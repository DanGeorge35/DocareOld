import {useEffect, useState} from 'react';
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
  Badge,
  CheckIcon,
  Center,
  Flex,
  WarningOutlineIcon,
  VStack,
  Select,
  Stack,
  Image,
  Text,
  Icon,
  useToast,
  FlatList,
  Button,
  Pressable,
} from 'native-base';

import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmailView from './includes/Email_view';
import PhoneView from './includes/Phone_view';

const getLabelStyle = index => {
  // Define different colors for each tab
  const colors = ['red', 'green', 'blue']; // Add more colors if needed
  return {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors[index % colors.length], // Apply different color for each tab
  };
};

const Login_screen = ({navigation}) => {
  const layout = useWindowDimensions();

  const [show, setShow] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');

  const [errEmail, seterrEmail] = useState('');
  const [errPass, seterrPass] = useState('');
  const toast = useToast();

  const onForgotPass = () => {
    console.log('forgt Pass');
  };

  const onSignUp = () => {
    // console.log("Sign Up")
    navigation.navigate('Personal_info_doc');
  };

  const handleLogin = () => {
    setisLoading(true);

  //   // const objLoginData = JSON.stringify({
  //   //   email: Email,
  //   //   password: Pass,
  //   // });

  //   const objLoginData = JSON.stringify({
  //     email: 'show1@gmail.com',
  //     password: '222',
  //   });

  //   //console.log(objLoginData);

  //   const config = {
  //     method: 'post',
  //     url: 'https://docare.posaccountant.com/main/api/v1/auth/login',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     data: objLoginData,
  //   };

  //   //console.log(config)

  //   axios(config)
  //     .then(response => {
  //       //console.log('Response:', response.data);
  //       //console.log('Response:', response.data.data);
  //       // console.log('Response:', response.token);

  //       if (response.data.success == true) {
  //         rspMsg1('Successful');
  //         DocSession(response.data);
          navigation.navigate('Upload_pix_doc');
  //       } else {
  //         rspMsg1(response.message);
  //       }

  //       setisLoading(false);
  //     })
  //     .catch(error => {
  //       // console.log("error")
  //       console.error('Error:', error);
  //       setisLoading(false);
  //     });

  //   //console.log('Login');
   };



  const DocSession = async userData => {
    try {
      await AsyncStorage.setItem('DoctorData', JSON.stringify(userData));
    } catch (e) {
      //console.log(e);
    }
  };

  

  const rspMsg1 = (msg) => {
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
      <VStack space="2" px="3" backgroundColor="#fff" flex={1}>
        <Box alignItems="center" mt="10">
          <Image
            w="70"
            h="70"
            source={require('../../../../assets/DOc3.png')}
            alt="Alternate Text"
          />
        </Box>

        <Text
          mt="5"
          fontSize="14"
          color="#000000"
          fontWeight="600"
          lineHeight="25"
          textAlign="center"
          fontFamily="Inter-Black">
          {' '}
          Great to have you back!{' '}
        </Text>

        <FormControl w="100%" maxW="500" alignItems="left" mt="5">
          <Box mb="2" mt="2">
            {/* <FormControl.Label >Email Address</FormControl.Label> */}

            <Input
              type="text"
              placeholderTextColor="#000000"
              size="md"
              variant="outline"
              placeholder="Enter Email Address"
              minWidth="300"
              w="100%"
              onChangeText={val => setEmail(val)}
            />

            {/* <FormControl.Label >Password</FormControl.Label> */}

            <Input
              w={{
                base: '100%',
                md: '25%',
              }}
              type={show ? 'text' : 'password'}
              size="md"
              placeholderTextColor="#000000"
              mt="5"
              variant="outline"
              onChangeText={val => setPass(val)}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={<FontAwesome5 name={show ? 'eye' : 'eye-slash'} />}
                    size={5}
                    mr="5"
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

          <Pressable mb="8" onPress={onForgotPass}>
            <Text textAlign="right" color="#000" fontWeight="bold">
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

          <Pressable mt="8" onPress={onSignUp}>
            <Text textAlign="center" color="#000000">
              Don’t have an Account?{' '}
              <Text fontWeight="bold" color="#1C70EE">
                {' '}
                Create now
              </Text>
            </Text>
          </Pressable>
        </FormControl>

        {/* <TabView
            navigationState={{index, routes}}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
            activeTintColor="red"
            // swipeEnabled={false}
            initialLayout={{width: 335}}
          /> */}
      </VStack>
    </KeyboardAvoidingView>
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

    marginTop: 60,
  },

  tab_view: {
    //width:335,
    height: 50,
    //backgroundColor:'#F4F7FA',
    marginTop: 30,
    // marginLeft:20,
    color: 'red',
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

export default Login_screen;
