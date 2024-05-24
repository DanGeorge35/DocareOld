import {useEffect, useState} from 'react';
import {useWindowDimensions, StyleSheet, TextInput} from 'react-native';
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

const Verify_account = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  const btnVerify =()=>{

    // {"data": {"Address": "No 6, kongggg", "Email": "D3an@gmail.com", "FirstName": "Sss", "LastName": "Dddf", "PracticingTenure": "Deji", "Specialization": "Funni", "UserID": "DOC2024516125149", "account": {"Email": "D3an@gmail.com", "FirstName": "Sss", "LastName": "Dddf", "PasswordHash": "$2a$10$KQVrC6ZThCFX3zRxqJ/0COGPEYfE1CnVrojgF78nDFNQ/Qi0y3.aS", "RefreshToken": "$2a$10$KQVrC6ZThCFX3zRxqJ/0COGPEYfE1CnVrojgF78nDFNQ/Qi0y3.aS", "Role": "doctor", "Status": "Pending", "Token": "DOC2024516125149", "UserID": "DOC2024516125149", "UserType": "doctor", "Verified": "0", "createdAt": "2024-05-16T12:05:14.527Z", "id": 18, "updatedAt": "2024-05-16T12:05:14.527Z"}, "createdAt": "2024-05-16T12:05:14.534Z", "id": 6, "updatedAt": "2024-05-16T12:05:14.534Z"}, "success": true}
    navigation.navigate('Login_screen');
  }

  return (
    <VStack space="2.5" p="4" backgroundColor="#fff" flex={1}>
      <Box mt="5">
        <Text textAlign="center" color="#000" fontWeight="bold" fontSize="16">
          Enter 4-digit code sent to you via Email{' '}
        </Text>
      </Box>

      <FormControl w="100%" maxW="500" alignItems="left" mt="5">
        <Box mb="2" mt="3">
          <FormControl.Label>OTP CODE</FormControl.Label>
          <Input
            keyboardType="numeric"
            //style={styles.input}
            placeholder="Enter OTP (000 - 000)"
            placeholderTextColor="#999"
            value={otpCode}
            onChangeText={val => setOtpCode(val)}
          />
        </Box>

        <Pressable mt="8">
          <Text
            textAlign="center"
            color="#000000"
            fontFamily="GeneralSans-Regular"
            fontSize="14">
            Didn’t get OTP?
          </Text>
        </Pressable>

        <Pressable mt="0" onPress={() => console.log('am Pressed')}>
          <Text
            style={{
              fontWeight: 'normal',
              textAlign: 'center',
              color: '#1C70EE',
            }}>
            Resend OTP in 00:58s{' '}
          </Text>
        </Pressable>

        <Box alignItems="center">
          <Button
            bg="#1C70EE"
            borderRadius="md"
            w="300"
            mt="90"
            onPress={btnVerify}>
            Verify
          </Button>
        </Box>
      </FormControl>
    </VStack>
  );


};

export default Verify_account;
