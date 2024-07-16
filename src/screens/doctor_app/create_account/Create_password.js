import {useEffect, useState} from 'react';
import {useWindowDimensions, StyleSheet} from 'react-native';
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

import {successMsg, errorMsg} from '../../../constant';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const Create_password = ({navigation, route}) => {
  //const Create_password = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState('');
  const [errPass, setErrPass] = useState('');
  const [cpass, setCPass] = useState('');
  const [errCPass, setErrCPass] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const toast = useToast();

  const {data} = route.params;

  const validateInput = () => {
    let x = 0;
   
    if (pass !== cpass) {
  
      x = 1;
      //setErrCPass('Passwords do not match');
      errorMsg(toast, 'Passwords not match');
     // console.log("not1")
    } else {
      setErrCPass('');
    }

    if (pass === '') {
      x = 1;
      setErrPass('Password is required');
    } else {
      setErrPass('');
    }

    if (cpass === '') {
      x = 1;
      setErrCPass('Confirm Password is required');
    } else {
      setErrCPass('');
    }

    if (x === 0) {
      CreateDoc();
    }
    setIsInvalid(x === 1);
  };


  const CreateDoc = () => {

    objPass = {
      Password: pass,
    };

    const AllData = {...objPass, ...data};

    console.log(AllData)

    // const AllData = {
      
    //     FirstName: "shomorin",
    //     LastName: "Moshood",
    //     Email: "showtechitconcept@gmail.com",
    //     Password: "222",
    //     Address:"no 6 komolafe",
    //     PracticingTenure:"3 years",
    //     Specialization:"Myocadiam",
    //     Dob:"23232"
    
    // };

    const config = {
      method: 'post',
      url: 'https://docare.posaccountant.com/api/v1/doctors',
      headers: {
        'Content-Type': 'application/json',
      },
      data: AllData,
    };

    //

    console.log(AllData);

    axios(config)
      .then(response => {
        console.log('Response:', response.data);
        //console.log('Response:', response.data.data);
        // console.log('Response:', response.token);

        if (response.data.success == true) {
          successMsg(toast, 'Registered Successful ');
          //UserSession(response.data);
          navigation.navigate('Verify_account', { data: AllData });
        } else {
          //rspMsg1(response.message);
          errorMsg(toast, response.message);
        }
        setisLoading(false);
      })
      .catch(error => {
        // console.log("error")
        console.error('Error:', error);
      });

    // navigation.navigate('Verify_account');

    //Response: {"code": 201, "data": {"Address": "sss", "Email": "show1@gmail.com", "FirstName": "Dan", "LastName": "George", "PracticingTenure": "jj", "Specialization": "2ededd", "UserID": "DOC202407121255569", "account": {"Email": "show1@gmail.com", "FirstName": "Dan", "LastName": "George", "PasswordHash": "$2a$10$y0.UkIAXLPlxYuwmU078JO/1BL5U2f18JEFInMFukjKdLE/.6V6be", "RefreshToken": "$2a$10$y0.UkIAXLPlxYuwmU078JO/1BL5U2f18JEFInMFukjKdLE/.6V6be", "Role": "doctor", "Status": "Pending", "Token": 336189, "UserID": "DOC202407121255569", "UserType": "doctor", "Verified": "0", "createdAt": "2024-07-12T12:55:56.806Z", "id": 6, "updatedAt": "2024-07-12T12:55:56.806Z"}, "createdAt": "2024-07-12T12:55:56.816Z", "id": 2, "updatedAt": "2024-07-12T12:55:56.816Z"}, "message": "Account Successfully Created", "success": true}
    
  };

  //   //{
  //     "FirstName": "Dan",
  //     "LastName": "George",
  //     "Email": "dangeorge3222@gmail.com",
  //     "Password": "222",
  //     "Dob":"1993-03-08",
  //     "Address":"No 6 Komolafe close",
  //     "PracticingTenure":"3 yers",
  //     "Specialization":"Eye"
  // }

  return (
    <VStack px="1" backgroundColor="#fff" flex={1}>
      <Text
        fontWeight="bold"
        px="3"
        mt="5"
        fontFamily="GeneralSans-Bold"
        fontSize="16">
        {' '}
        Create Password{' '}
      </Text>

      <FormControl w="100%" maxW="500" alignItems="left" mt="1" isInvalid={isInvalid}>
        <Box mb="2" mt="1" px="3">
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
            placeholder="Enter Password"
            onChangeText={val => setPass(val)}
          />

        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errPass}
        </FormControl.ErrorMessage>

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
            placeholder="Confirm Password"
            onChangeText={val => setCPass(val)}
          />

        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errCPass}
        </FormControl.ErrorMessage>

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
            <Box alignItems="center" bottom="-100">
              <Button
                bg="#1C70EE"
                borderRadius="md"
                w="300"
                onPress={validateInput}>
                Create Account
              </Button>
            </Box>
          )}
        </Box>
      </FormControl>
    </VStack>
  );
};

export default Create_password;
