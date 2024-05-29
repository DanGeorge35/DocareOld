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
    <VStack space="2.5" bg="#ffffff" flex={1}>
      <Box mt="75" w="100%" h="12">
        <Text
          fontSize="xl"
          color="#999"
          fontWeight="bold"
          lineHeight="25"
          fontFamily="Inter-Black"
          style={{textAlign: 'center'}}
          onPress={() => navigation.navigate('Lang_select')}>
          ACCOUNT TYPE
        </Text>
        <Text
          fontFamily="GeneralSans-Bold"
          color="#999"
          fontSize="lg"
          lineHeight="20"
          mt="4"
          style={{textAlign: 'center'}}>
          Kindly select your account type to start registration
        </Text>
      </Box>

      <Flex w="100%" justifyContent="center" alignItems="center" h="50%">
        <Pressable>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <Stack
                direction="row"
                mb="1"
                mt="1"
                space={5}
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
                rounded="8"
                shadow={3}
                borderWidth="1"
                borderColor="coolGray.300">
                <Box>
                  <Image
                    w="56"
                    h="56"
                    source={require('../../../assets/doc.jpg')}
                    alt="Alternate Text"
                    size="sm"
                  />
                </Box>

                <Box>
                  <Text
                    fontFamily="GeneralSans-Bold"
                    color="#344054"
                    fontSize="lg"
                    lineHeight="20"
                    fontWeight="bold">
                    Doctor
                  </Text>
                  <Text
                    fontFamily="GeneralSans-Bold"
                    color="#344054"
                    fontSize="xs"
                    w="195"
                    lineHeight="20"
                    fontWeight="normal">
                    Offer expertise and services to patients
                  </Text>
                </Box>
              </Stack>
            );
          }}
        </Pressable>

        <Pressable mt="2">
          {({isHovered, isFocused, isPressed}) => {
            return (
              <Stack
                direction="row"
                mb="1"
                mt="1"
                space={5}
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
                rounded="8"
                shadow={3}
                borderWidth="1"
                borderColor="coolGray.300">
                <Box>
                  <Image
                    w="56"
                    h="56"
                    source={require('../../../assets/pat.jpg')}
                    alt="Alternate Text"
                    size="sm"
                  />
                </Box>

                <Box>
                  <Text
                    fontFamily="GeneralSans-Bold"
                    color="#344054"
                    fontSize="lg"
                    lineHeight="20"
                    fontWeight="bold">
                    Patient
                  </Text>
                  <Text
                    fontFamily="GeneralSans-Bold"
                    color="#344054"
                    fontSize="xs"
                    w="200"
                    lineHeight="20"
                    fontWeight="normal">
                    Access personalised healthcare services.
                  </Text>
                </Box>
              </Stack>
            );
          }}
        </Pressable>
      </Flex>

      <Box alignItems="center" mt="10%">
        <Text
          fontFamily="GeneralSans-Bold"
          color="#7b7b7b"
          fontSize="lg"
          lineHeight="20"
          onPress={() => navigation.navigate('Login_screen')}>
          Already have an account? Click to Login
        </Text>
      </Box>
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
