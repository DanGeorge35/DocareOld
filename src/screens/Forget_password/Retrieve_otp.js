/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, TextInput, useWindowDimensions, StyleSheet} from 'react-native';
import {
  FormControl,
  Input,
  Box,
  Text,
  VStack,
  Stack,
  Button,
  Pressable,
  Center,
} from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Retrieve_otp = ({navigation}) => {

  
  return (
    <VStack space="2.5" p="4" backgroundColor="#fff" flex={1}>
      <Box mt="5">
        <Text textAlign="left" color="#000" fontWeight="bold" fontSize="18">
          Enter 4-digit code sent to you via SMS or Email{' '}
        </Text>
        <Text fontWeight="normal" color="#000">
          Please enter the code sent to the number ending in 23564
        </Text>
      </Box>

      <FormControl w="100%" maxW="500" alignItems="left" mt="5">
        <Box mb="2" mt="3">
          <FormControl.Label>OTP CODE</FormControl.Label>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Enter OTP (000 - 000)"
            placeholderTextColor="#999"
            onChangeText={text => {
              console.log(text);
            }}
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
            onPress={() => navigation.navigate('Reset_password')}>
            Verify
          </Button>
        </Box>
      </FormControl>
    </VStack>
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

  input: {
    height: 52,
    padding: 16,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#90caf9',
    minWidth: 335,
    width: '100%',
    color: '#000',
    borderRadius: 5,
  },

  form_view: {
    width: 335,
    height: 291,
    marginTop: 45,
  },

  doCare_view: {
    width: 156,
    height: 49,
    marginTop: 41,
    marginLeft: 110,
  },

  lang_view1: {
    width: 300,
    height: 49,
    marginTop: 30,
    marginLeft: 0,
    color: '#000000',
  },
  lang_view: {
    width: 101,
    height: 49,
    marginTop: 30,
    marginLeft: 14,
    color: '#000000',
  },

  lang_text: {
    width: 205,
    fontSize: 20,

    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 27,
    fontFamily: 'General Sans',
  },

  get_start_btn: {
    width: 327,
    height: 52,
    marginTop: 190,
    //color:"red",
    // backgroundColor:"1C70EE",

    borderRadius: 12,
    padding: 16,
  },
});

export default Retrieve_otp;
