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

const Personal_info_doc = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState();
  const [isLoading, setisLoading] = useState(false);

  //=======================================================

  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [special, setSpecial] = useState('');
  const [tenure, setTenure] = useState('');
  const [dob, setDob] = useState('');
  const [pass, setPass] = useState('');

  //=======================================================

  const handleCreate = () => {
    //console.log('hello');

    const ObjDoc = {
          FirstName: fName,
          LastName: lName,
          Email: email,
          Dob: dateOfBirth,
          Address:  address,
          PracticingTenure: tenure,
          Specialization: special,
      }

   
      console.log(ObjDoc)
    navigation.navigate('Create_password', { data: ObjDoc })
  //  navigation.navigate('Create_password')
    

  };

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
        //setDob(currentDate)
        // console.log(currentDate)
      }
    } else {
      toggleDatePicker();
    }
  };

  return (
    <VStack px="1" backgroundColor="#fff" flex={1}>
      {/* <Box mt="10" ml="3" mb="0" w="300" h="7">
        <Text
          fontSize="lg"
          color="#000000"
          fontWeight="bold"
          lineHeight="25"
          fontFamily="Inter-Black"
          onPress={() => navigation.navigate('Login_screen')}>
          <FontAwesome5 name="arrow-left" size={20} color="#000000" /> Create
          account{' '}
        </Text>
      </Box>

      <Stack space={2} px="4" mt="2" direction="row">
        <View borderColor="#1C70EE" borderWidth="1" w="24" />
        <View borderColor="#b8d2fa" borderWidth="1" w="24" />
        <View borderColor="#F5F5FF" borderWidth="1" w="24" />
      </Stack> */}

      <Text
        fontWeight="bold"
        px="3"
        mt="5"
        fontFamily="GeneralSans-Bold"
        fontSize="16">
        {' '}
        Personal Information{' '}
      </Text>

      <FormControl w="100%" maxW="500" alignItems="left" mt="5">
        <Box mb="2" mt="2" mx="3">
          <Input
            type="text"
            placeholderTextColor="#000000"
            size="md"
            variant="outline"
            placeholder="Enter First Name"
            minWidth="300"
            w="100%"
            onChangeText={(val) => setFname(val)}
          />

          <Input
            type="text"
            placeholderTextColor="#000000"
            size="md"
            mt="3"
            variant="outline"
            placeholder="Enter Last Name"
            minWidth="300"
            w="100%"
            onChangeText={(val) => setLname(val)}
          />

          <Input
            type="text"
            placeholderTextColor="#000000"
            size="md"
            mt="3"
            variant="outline"
            placeholder="Enter Email Address"
            minWidth="300"
            w="100%"
            onChangeText={(val) => setEmail(val)}
          />

          {/* <Input
            type="text"
            placeholderTextColor="#000000"
            size="md"
            mt="3"
            variant="outline"
            placeholder=" Enter Phone Number"
            minWidth="300"
            w="100%"
            onChangeText={(val) => setPhone(val)}
          /> */}

          <Input
            type="text"
            placeholderTextColor="#000000"
            size="md"
            mt="3"
            variant="outline"
            placeholder=" Enter Residential Address"
            minWidth="300"
            w="100%"
            onChangeText={(val) => setAddress(val)}
          />

          <Input
            type="text"
            placeholderTextColor="#000000"
            size="md"
            mt="3"
            variant="outline"
            placeholder=" Enter Specialisation"
            minWidth="300"
            w="100%"
            onChangeText={(val) => setSpecial(val)}
          />

          <Input
            type="text"
            placeholderTextColor="#000000"
            size="md"
            mt="3"
            variant="outline"
            placeholder="Practising Tenure"
            minWidth="300"
            w="100%"
            onChangeText={(val) => setTenure(val)}
          />

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
                mt="3"
                //isDisabled={true}
                value={dateOfBirth}
                isReadOnly="true"
                InputRightElement={
                  <Icon
                    as={<MaterialIcons name="event" />}
                    size={7}
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
            <Box alignItems="center" mt="10">
              <Button
                bg="#1C70EE"
                borderRadius="md"
                w="300"
                onPress={handleCreate}>
                Create Account
              </Button>
            </Box>
          )}

        </Box>
      </FormControl>
    </VStack>
  );
};

export default Personal_info_doc;
