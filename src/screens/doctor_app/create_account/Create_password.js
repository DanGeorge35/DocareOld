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

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const Create_password = ({navigation, route}) => {
  //const Create_password = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState('');
  const [cpass, setCPass] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const {data} = route.params;

  const CreateDoc = () => {
    objPass = {
      Password: pass,
    };

    //const AllData = {...objPass, ...data};
    const AllData = {
      
        FirstName: "Dan",
        LastName: "George",
        Email: "show1@gmail.com",
        Password: "222",
        Address:"sss",
        PracticingTenure:"jj",
        Specialization:"2ededd",
        Dob:"23232"
    
    };

    // const config = {
    //   method: 'post',
    //   url: 'https://docare.posaccountant.com/main/api/v1/doctors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   data: AllData,
    // };

    // //

    // console.log(AllData);

    // axios(config)
    //   .then(response => {
    //     console.log('Response:', response.data);
    //     //console.log('Response:', response.data.data);
    //     // console.log('Response:', response.token);

    //     if (response.data.success == true) {
    //       // rspMsg1('Successful');
    //       //UserSession(response.data);
    //       navigation.navigate('Verify_account');
    //     } else {
    //       rspMsg1(response.message);
    //     }
    //     setisLoading(false);
    //   })
    //   .catch(error => {
    //     // console.log("error")
    //     console.error('Error:', error);
    //   });

     navigation.navigate('Verify_account');
    
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

      <FormControl w="100%" maxW="500" alignItems="left" mt="1">
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
            <Box alignItems="center" bottom="-400">
              <Button
                bg="#1C70EE"
                borderRadius="md"
                w="300"
                onPress={CreateDoc}>
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
