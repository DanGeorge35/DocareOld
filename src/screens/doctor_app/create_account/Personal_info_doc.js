import {useEffect, useState} from 'react';
import {useWindowDimensions, StyleSheet, KeyboardAvoidingView,ImageBackground,ScrollView} from 'react-native';
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
  const [errFname, setErrFname] = useState('');
  const [lName, setLname] = useState('');
  const [errlName, setErrLname] = useState('');
  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [errPhone, setErrPhone] = useState('');
  const [address, setAddress] = useState('');
  const [errAddress, setErrAddress] = useState('');
  const [special, setSpecial] = useState('');
  const [errSpecial, setErrSpecial] = useState('');
  const [tenure, setTenure] = useState('');
  const [errTenure, setErrTenure] = useState('');
  const [dob, setDob] = useState('');
  const [errDob, setErrDob] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  //const [pass, setPass] = useState('');

  //=======================================================

  const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateInput = () => {
    let x = 0;

  

    if (fName === '') {
      x = 1;
      setErrFname('First name is Required');
    } else {
      setErrFname('');
    }

    if (lName === '') {
      x = 1;
      setErrLname('Last name is Required');
    } else {
      setErrLname('');
    }

    
    if (!validateEmail(email)) {
      x = 1;
      setErrEmail('Valid Email is Required');
    } else {
      setErrEmail('');
    }

    // if (
    //   phone < 11 ||
    //   phone == '' ||
    //   isNaN(phone) == true
    // ) {
    //   x = 1;
    //   setErrPhone('Valid Phone Number is Required');
    // } else {
    //   setErrPhone('');
    // }

   
    if (address === '') {
      x = 1;
      setErrAddress('Address is Required');
    } else {
      setErrAddress('');
    }

    if (special === '') {
      x = 1;
      setErrSpecial('Specialisation is Required');
    } else {
      setErrSpecial('');
    }

    if (tenure === '') {
      x = 1;
      setErrTenure('Practising Tenure is Required');
    } else {
      setErrTenure('');
    }

    if (dateOfBirth === '') {
      x = 1;
      setErrDob('Date Of birth is Required');
    } else {
      setErrDob('');
    }

    

    console.log(x);
    if(x=== 0){
      handleCreate()
    }

    setIsInvalid(x === 1);

  }

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
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

    <ScrollView
       keyboardShouldPersistTaps="handled">

        <VStack px="1" backgroundColor="#fff" flex={1}>

          
          
          <Text
            fontWeight="bold"
            px="3"
            mt="5"
            fontFamily="GeneralSans-Bold"
            fontSize="16">
            {' '}
            Personal Information{' '}
          </Text>

          

          <FormControl w="100%" maxW="500" alignItems="left" mt="5" isInvalid={isInvalid}>

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
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errFname}
              </FormControl.ErrorMessage>

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
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errlName}
              </FormControl.ErrorMessage>

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
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errEmail}
              </FormControl.ErrorMessage>

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
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errAddress}
              </FormControl.ErrorMessage>

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
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errSpecial}
              </FormControl.ErrorMessage>

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
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errTenure}
              </FormControl.ErrorMessage>

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
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errDob}
                  </FormControl.ErrorMessage>
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
                <Box alignItems="center" mt="4">
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
        
    </ScrollView>

           <Stack position="absolute"  alignItems="center" left="0" right="0" bottom="-145"> 
              <Image
                    source={require('../../../../assets/doctorsteam2.png')} // Specify the image source
                    style={{height: 200}} // Apply styles to the image
                    resizeMode="contain" // Set resizeMode to control how the image should be resized
                    alt="logo"
                    width="600"
                  />
            </Stack>
    </KeyboardAvoidingView>
  );
};

export default Personal_info_doc;
