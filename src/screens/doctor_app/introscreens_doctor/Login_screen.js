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

import {successMsg, errorMsg} from '../../../constant';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useConfig} from '../../../context/config.context';
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

  const {BASE_URL} = useConfig();
  const layout = useWindowDimensions();

  const [show, setShow] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');

  const [errEmail, seterrEmail] = useState('');
  const [errPass, seterrPass] = useState('');
  const toast = useToast();

  const handleLogin = () => {
    setisLoading(true);

    const objLoginData = JSON.stringify({
      email: Email,
      password: Pass,
    });

    // const objLoginData = JSON.stringify({
    //   email: 'ola@gmail.com',
    //   password: '222',
    // });

    console.log(objLoginData);

    const config = {
      method: 'post',
      url: `${BASE_URL}/auth/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: objLoginData,
      validateStatus: function (status) {
        return status >= 200 && status < 500; // Accepts all status codes from 200 to 499
      },
    };

    axios(config)
      .then(response => {
        // Handle successful response (200-499)
        if (response.data.success === true) {
          successMsg(toast, response.data.message);
          DocSession(response.data);
          console.log(response.data);
          //navigation.navigate('Upload_pix_doc');
        } else {
          console.log(response.data);
          errorMsg(toast, response.data.message);
        }
        setisLoading(false);
      })
      .catch(error => {
        // Handle error (status code 500 and above)
        setisLoading(false);
        console.error('Error:', error);
      });

    //console.log('Login');
  };


  const DocSession = async DocData => {
    try {
      await AsyncStorage.setItem('DoctorData', JSON.stringify(DocData));
    } catch (e) {
      //console.log(e);
    }
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
            source={require('../../../../assets/DOc3.png')} // Specify the image source
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
              lineHeight:30,
            }}>
            DOCARE
          </Text>

          <Text
            lineHeight="25"
            fontFamily="Inter-Black"
            style={{textAlign: 'center', color: '#1C70EE', marginTop: 50}}>
           Doctor Login to your Account
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
                w="100%"
                autoCapitalize="none" // Prevents auto capitalization
                onChangeText={val => setEmail(val)} // Store original case in state
                autoCompleteType="email"
              />

              <FormControl.Label mt="5">Password</FormControl.Label>
              <Input
                type={show ? 'text' : 'password'}
                size="lg"
                variant="outline"
                style={styles.input}
                autoCapitalize="none" // Prevents auto capitalization
                onChangeText={val => setPass(val)}
                autoCompleteType="password" // Enable autocomplete for passwords
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
              onPress={() => navigation.navigate('Personal_info_doc')}>
              <Text style={{textAlign: 'center', color: '#000'}}>
                Don’t have an Account?
                <Text style={{fontWeight: 'bold'}}> Create now</Text>
              </Text>
            </Pressable>
          </FormControl>
          <View style={styles.bottomImageContainer}>
            <Image
              source={require('../../../../assets/doctorsteam2.png')} // Specify the image source
              style={{height: 320}} // Apply styles to the image
              resizeMode="contain" // Set resizeMode to control how the image should be resized
              alt="logo"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    backgroundColor: '#fff',
  },

  inputContainer: {
    width: '90%',
    marginBottom: 20,
    minHeight: '100%',
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    paddingBottom: 100, // Adjusted padding to accommodate the fixed image
  },

  bottomImageContainer: {
    position: 'absolute', // Position the image absolutely
    bottom: -190, // Adjust this value as needed for the bottom offset
    left: 0,
    right: 0,
    alignItems: 'center', // Center the image horizontally
  },
  input: {
    height: 52,
    padding: 16,
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
