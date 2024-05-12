//import * as React from 'react';
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  NativeBaseProvider,
  HStack,
  Spacer,
  FormControl,
  Input,
  TextArea,
  Text,
  Box,
  Badge,
  CheckIcon,
  Center,
  Flex,
  WarningOutlineIcon,
  DatePicker,
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

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Personal_info = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState();
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [Token, setToken] = useState('');
  const [Pid, setPid] = useState('');
  const [userObj, setUserObj] = useState([]);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const formatDate = rawDate => {
    let date = new Date(rawDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${year}-${month}-${day}`;
  };

  const handleChange = ({type}, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      //setDate(currentDate)
      if (Platform.OS === 'android') {
        toggleDatePicker();
        //setDateOfBirth(currentDate.toDateString());
        setDateOfBirth(formatDate(currentDate));
        // console.log(currentDate)
      }
    } else {
      toggleDatePicker();
    }
  };

  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('UserData').then(
        jsonValue => {
          if (jsonValue !== null) {
            const usr = JSON.parse(jsonValue);

            //setUserObj(usr);

            console.log(usr);
            setFname(usr.data.FirstName);
            setLname(usr.data.LastName);
            setToken(usr.token);
            setPid(usr.data.id);

            //return false;
          }
        },
      );
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    //console.log('called');
    getUserData();
    //setDateOfBirth(userObj.dob)
  }, []);

  const handleUpdate = () => {
    setisLoading(true);

    // const objData = JSON.stringify({
    //   FirstName: "Muizzz1",
    //   LastName: "Enyyyyy",
    // });
    const objData = {
      FirstName: Fname,
      LastName: Lname,
    };

    //const token = userObj.token
    const token = Token;
    //const token = "sssss"

    const config = {
      method: 'patch',
      maxBodyLength: Infinity,
      //url: 'https://docare.posaccountant.com/main/api/v1/patients/'+userObj.data.Account.id,
      url: 'https://docare.posaccountant.com/main/api/v1/patients/' + Pid,
      //url: 'https://docare.posaccountant.com/main/api/v1/patients/8',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: objData,
    };

    console.log(config);
    //  console.log(objData);

    //return false;

    axios(config)
      .then(response => {
        console.log('Response:', response.data);
        //console.log('Response:', response.data.data);
        // console.log('Response:', response.token);

        if (response.data.success == true) {
          //rspMsg1(response.data.message);
          //console.log(response.data);
        } else {
          rspMsg1(response.message);
        }

        setisLoading(false);
      })
      .catch(error => {
        //console.log("error")
        console.error('Error:', error);
        setisLoading(false);
      });
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

  const {width} = Dimensions.get('window');

  return (
    <VStack space="5" backgroundColor="#FFFFFF" flex={1}>
      {isLoading ? (
        <Box w="100" mt="30" position="absolute" right="1">
          <Text
            w="205"
            fontSize="18"
            fontWeight="700"
            color="#d0e1fb"
            lineHeight="30"
            fontFamily="GeneralSans-Bold">
            {' '}
            <FontAwesome5
              name="save"
              color="#1C70EE"
              size={20}
              color="#000000"
            />{' '}
            Save
            {userObj}
          </Text>
        </Box>
      ) : (
        <Pressable
          w="100"
          mt="30"
          position="absolute"
          right="1"
          onPress={handleUpdate}>
          <Text
            w="205"
            fontSize="18"
            fontWeight="700"
            color="#1C70EE"
            lineHeight="30"
            fontFamily="GeneralSans-Bold">
            {' '}
            <FontAwesome5
              name="save"
              color="#1C70EE"
              size={20}
              color="#000000"
            />{' '}
            Save
          </Text>
        </Pressable>
      )}

      <FormControl w="100%" maxW="500" alignItems="left" mt="10">
        <Box mb="1" mt="1" mx="3">
          <FormControl.Label>First Name</FormControl.Label>

          <Input
            type="text"
            size="md"
            variant="outline"
            placeholder="Enter First Name"
            minWidth="100%"
            value={Fname}
            //{userObj.Email}

            onChangeText={val => setFname(val)}
          />

          <FormControl.Label color="dark.100" mt="4">
            Last Name
          </FormControl.Label>

          <Input
            type="text"
            size="md"
            variant="outline"
            value={Lname}
            placeholder="Enter Last Name"
            minWidth="100%"
            onChangeText={val => setLname(val)}
          />
        </Box>

        <Stack direction="row" space={0} ml="4">
          <Box>
            <FormControl.Label color="gray.100" mt="4">
              Gender
            </FormControl.Label>

            <Select
              minWidth="48%"
              accessibilityLabel="Choose Your Gender"
              placeholder="Choose Your Gender"
              //value={userObj.data.Account.FirstName}
              _selectedItem={{
                bg: '#F9F9FA',
                endIcon: <CheckIcon size={3} />,
              }}>
              <Select.Item label="Male" value="Male" />
              <Select.Item label="Female" value="Female" />
              <Select.Item label="Other" value="Others" />
            </Select>
          </Box>

          <Box mx="3">
            <FormControl.Label color="gray.100" mt="4">
              Date Of Birth
            </FormControl.Label>

            {showPicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={handleChange}
                maximumDate={new Date(2030, 10, 20)}
                minimumDate={new Date(1980, 0, 1)}
              />
            )}

            {!showPicker && (
              <Pressable onPress={toggleDatePicker}>
                <Input
                  type="text"
                  size="md"
                  variant="outline"
                  placeholder="Date Of Birth"
                  placeholderTextColor="#000000"
                  minWidth="48%"
                  //isDisabled={true}
                  value={dateOfBirth}
                  isReadOnly="true"
                  InputRightElement={
                    <Icon
                      style={{width: 35}}
                      as={<MaterialIcons name="event" />}
                      size={5}
                      ml="1"
                      color="dark.400"
                    />
                  }
                  // editable={false}
                  onChangeText={() => {
                    console.log('');
                  }}
                />
              </Pressable>
            )}
          </Box>
        </Stack>

        <Box mx="3">
          <FormControl.Label color="dark.100" mt="4">
            About me (Optional)
          </FormControl.Label>

          <TextArea
            h={40}
            placeholder="Text Area Placeholder"
            mx="1"
            minWidth="50%"
            //  value={userObj.data.Account.FirstName}
            //    onChangeText={(val)=>setPhone(val)}
            onChangeText={() => {
              console.log('');
            }}
          />
        </Box>
      </FormControl>
    </VStack>
  );
};

const styles = StyleSheet.create({});

export default Personal_info;
