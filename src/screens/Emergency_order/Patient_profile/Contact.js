/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
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

const Contact = ({navigation}) => {
  const {width} = Dimensions.get('window');

  return (
    <VStack space="5" backgroundColor="#FFFFFF" flex={1}>
      <Box
        w="100"
        mt="30"
        position="absolute"
        right="1"
        onPress={() => console.log('save Contacts')}>
        <Text
          w="205"
          fontSize="18"
          fontWeight="700"
          color="#1C70EE"
          lineHeight="30"
          fontFamily="GeneralSans-Bold">
          {' '}
          <FontAwesome5 name="save" size={20} color="#000000" /> Save
        </Text>
      </Box>

      <FormControl w="100%" maxW="500" alignItems="left" mt="16">
        <Box mb="1" mt="1" mx="3">
          {/* <FormControl.Label  >Email Address</FormControl.Label> */}

          <Input
            type="text"
            size="md"
            variant="outline"
            placeholder="Email Address"
            minWidth="100%"
            borderWidth="2"
            onChangeText={() => {
              console.log('');
            }}
          />

          {/* <FormControl.Label color="dark.100" mt="4" >Phone Number</FormControl.Label> */}

          <Input
            type="text"
            size="md"
            mt="3"
            variant="outline"
            placeholder="Phone Number"
            minWidth="100%"
            borderWidth="2"
            //    onChangeText={(val)=>setPhone(val)}
            onChangeText={() => {
              console.log('');
            }}
          />

          {/* <FormControl.Label color="dark.100" mt="4" >Address</FormControl.Label> */}

          <Input
            type="text"
            size="md"
            mt="3"
            variant="outline"
            placeholder="Residential Address"
            minWidth="100%"
            borderWidth="2"
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

const styles = StyleSheet.create({
  header_container: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
    // width:409,
    //height:215
    //color:'#fff',
    //justifyContent:"center",
    //alignItems:"center",
    //width: 375,
    // height: 812,
  },
  title: {
    fontFamily: 'GeneralSans-Bold',
    fontWeight: 'bold',
    fontSize: 25,
    //lineHeight:30,
    // color:'#1B1D28',
    color: '#000000',
    width: 251,
    // height:20,
    marginTop: 0,
    marginLeft: 20,
  },
  lang_view: {
    width: 101,
    //height:49,
    marginTop: 30,
    marginLeft: 14,
    color: '#000000',
  },
  lang_text: {
    width: 205,
    fontSize: 20,
    fontWeight: '500',
    color: '#1C70EE',
    lineHeight: 21.6,
    fontFamily: 'GeneralSans-Bold',
  },
});

export default Contact;
