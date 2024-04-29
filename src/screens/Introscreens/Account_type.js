/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  NativeBaseProvider,
  HStack,
  Spacer,
  Box,
  Badge,
  CheckIcon,
  Center,
  Flex,
  VStack,
  Select,
  Stack,
  Image,
  Text,
  useToast,
  FlatList,
  Button,
  Pressable,
} from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Account_type = ({navigation}) => {
  return (
    <VStack bg="#ffffff" flex={1}>
      <Box mt="100" mb="50" w="100%" h="12">
        <Text
          fontSize="xl"
          color="#1C70EE"
          fontWeight="bold"
          lineHeight="25"
          fontFamily="Inter-Black"
          style={{textAlign: 'center'}}
          onPress={() => navigation.navigate('Lang_select')}>
          REGISTER AS
        </Text>
      </Box>

      <Flex w="100%" justifyContent="center" alignItems="center" h="50%" p="10">
        <Pressable
          style={{width: '100%'}}
          pt="3"
          onPress={() => navigation.navigate('Login_screen')}>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <Stack
                direction="row"
                mb="5"
                mt="10"
                space={8}
                bg={
                  isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.200'
                    : 'coolGray.100'
                }
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                p="5"
                rounded="8">
                <Box>
                  <Image
                    w="100"
                    h="100"
                    source={require('../../../assets/hospital1.png')}
                    alt="Alternate Text"
                    size="xl"
                  />
                </Box>

                <Box w="full">
                  <Text
                    fontFamily="GeneralSans-Bold"
                    color="#344054"
                    fontSize="lg"
                    lineHeight="20"
                    fontWeight="bold">
                    PATIENT
                  </Text>
                  <Text
                    fontFamily="GeneralSans-Bold"
                    color="#344054"
                    fontSize="xs"
                    w="60%"
                    lineHeight="20"
                    fontWeight="normal">
                    Access personalised healthcare services from the comfort of
                    your home. Connect with our medical professionals through
                    video call, audio call and chat message.
                  </Text>
                </Box>
              </Stack>
            );
          }}
        </Pressable>
        <Pressable style={{width: '100%'}}>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <Stack
                direction="row"
                mb="1"
                mt="5"
                space={8}
                bg={
                  isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.200'
                    : 'coolGray.100'
                }
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                p="5"
                rounded="8">
                <Box>
                  <Image
                    w="100"
                    h="100"
                    source={require('../../../assets/doctor.png')}
                    alt="Alternate Text"
                    size="xl"
                  />
                </Box>

                <Box w="full">
                  <Text
                    fontFamily="GeneralSans-Bold"
                    color="#344054"
                    fontSize="lg"
                    lineHeight="20"
                    fontWeight="bold">
                    DOCTOR
                  </Text>
                  <Text
                    fontFamily="GeneralSans-Bold"
                    color="#344054"
                    fontSize="xs"
                    w="60%"
                    style={{}}
                    lineHeight="20"
                    fontWeight="normal">
                    Respond to medical emergencies, and conduct virtual
                    appointments providing medical advice, diagnosing health
                    conditions, and prescribing treatments.
                  </Text>
                </Box>
              </Stack>
            );
          }}
        </Pressable>
      </Flex>
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
  doc_view: {
    width: 323,
    height: 104,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#FAFBFF',
  },

  lang_view: {
    width: 231,
    height: 27,
    marginTop: 30,
    marginLeft: 14,
    color: '#000000',
  },

  lang_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 27,
    fontFamily: 'General Sans',
  },

  get_start_btn: {
    width: 327,
    height: 52,
    marginTop: 0,
    //color:"red",
    // backgroundColor:"1C70EE",

    borderRadius: 12,
    padding: 16,
  },
});
export default Account_type;
