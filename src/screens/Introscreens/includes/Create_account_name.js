import React, {useState} from 'react';
import {View, useWindowDimensions, StyleSheet, Text} from 'react-native';
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
  Icon,
  useToast,
  FlatList,
  Button,
  Pressable,
} from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const moveNextTab = () => {
  console.log('helloo');
};

const Create_account_name = ({onNext, formData, onInputChange}) => {
  const [isValid, setIsValid] = useState(true);
 
  const [errFname1, errSetFname1] = useState('');
  const [errLname, errSetLname] = useState('');

  const validateInput = () => {

    let x = 0
    if (formData.fname == '') {
      x=1;
      console.log('enter fname');
      errSetFname1('First name is Required');
    } else {
      errSetFname1('');
    }

    if (formData.lname == '') {
      x=1
      errSetLname('Last name is Required');
    } else {
      errSetLname('');
    }

    if(x==0){
      onNext()
    }

  };

  return (
    <VStack space="2.5" backgroundColor="#fff" flex={1}>
      <FormControl w="100%" maxW="500" isInvalid alignItems="center">
        <Box mb="2" mt="2">
          <FormControl.Label>First Name</FormControl.Label>

          <Input
            type="text"
            size="md"
            variant="outline"
            placeholder="Enter First Name"
            minWidth="335"
            w="90%"
            //borderColor="blue"
            value={formData.fname}
            onChangeText={value => onInputChange('fname', value)}

            // onChangeText={(val)=>setPhone(val)}
            // onChangeText={() => {
            //   console.log('ccc');
            // }}
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errFname1}
          </FormControl.ErrorMessage>

          {/* <FormControl.ErrorMessage _text={{
          fontSize: 'xs'
        }}>
            {errFname1}
          </FormControl.ErrorMessage> */}

         

          <Box>
            <FormControl.Label color="#000000" mt="6">
              Last Name
            </FormControl.Label>

            <Input
              type="text"
              size="md"
              variant="outline"
              placeholder="Enter Last Name"
              minWidth="335"
              w="90%"
              value={formData.lname}
              onChangeText={value => onInputChange('lname', value)}
              //    onChangeText={(val)=>setPhone(val)}
              // onChangeText={() => {
              //   console.log('');
              // }}
            />

            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              {errLname}
            </FormControl.ErrorMessage>
          </Box>
        </Box>

        {/* position="absolute" top="250%" */}

        <Box alignItems="center" mt="90%">
          <Button
            bg="#1C70EE"
            borderRadius="md"
            w="300"
            h="12"
            onPress={validateInput}>
            Continue
          </Button>
        </Box>
      </FormControl>
    </VStack>
  );
};

export default Create_account_name;
