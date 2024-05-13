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
import DateTimePicker from '@react-native-community/datetimepicker'; //tune

const Doctors_list_view = ({navigation}) => {
  return (
    <VStack px="1" backgroundColor="#fff" flex={1}>
      <Stack space={20} direction="row" mt="10" ml="3" mb="0" w="300" h="7">
        <Text
          fontSize="18"
          color="#000000"
          lineHeight="25"
          fontFamily="Inter-Black"
          onPress={() => navigation.navigate('Successful_page')}>
          <FontAwesome5 name="arrow-left" size={20} color="#000000" />{' '}
        </Text>

        <Box textAlign="center">
          <Text
            fontSize="24"
            color="#222B45"
            fontWeight="700"
            lineHeight="25"
            fontFamily="Inter-Black">
            {' '}
            Doctors{' '}
          </Text>
        </Box>

        <Text
          fontSize="lg"
          color="#000000"
          fontWeight="bold"
          lineHeight="25"
          fontFamily="Inter-Black"
          onPress={() => navigation.navigate('Successful_page')}>
          <MaterialIcons name="tune" size={20} color="#000000" />{' '}
        </Text>
      </Stack>

      <FormControl w="100%" maxW="500" alignItems="left" mt="2">
        <Box mb="1" mt="1" mx="3">
          <Input
            w={{
              base: '100%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="search" />}
                size="md"
                variant="outline"
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Search for doctors"
            onChangeText={() => {
              console.log('');
            }}
          />

          <Pressable>
            {({isHovered, isFocused, isPressed}) => {
              return (
                <Stack
                  direction="row"
                  mb="1"
                  space={2}
                  bg={
                    isPressed
                      ? 'coolGray.200'
                      : isHovered
                      ? 'coolGray.200'
                      : '#fff'
                  }
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                  pt="3"
                  pb="3"
                  pl="1"
                  pr="3"
                  mt="5"
                  rounded="8"
                  shadow={1}
                  borderWidth="1"
                  borderColor="coolGray.300">
                  <Box>
                    <Image
                      borderRadius="full"
                      w="56"
                      h="56"
                      source={require('../../../assets/img/doc1.png')}
                      alt="Alternate Text"
                      size="sm"
                    />
                  </Box>

                  <Box>
                    <Text
                      fontFamily="GeneralSans-Bold"
                      color="#000000"
                      fontSize="md"
                      lineHeight="20"
                      fontWeight="bold">
                      Dr. Ralph Edwards
                    </Text>

                    <Text
                      fontFamily="GeneralSans-Bold"
                      color="#898A8D"
                      fontSize="14"
                      w="195"
                      lineHeight="20"
                      fontWeight="normal">
                      <MaterialIcons name="star" size={16} color="#1C70EE" />{' '}
                      4.7 (4692 reviews)
                    </Text>
                    <Text
                      fontFamily="GeneralSans-Bold"
                      color="#898A8D"
                      fontSize="14"
                      w="195"
                      lineHeight="20"
                      fontWeight="normal">
                      Cardio Specialist - Ramsay College Hospital
                    </Text>
                  </Box>

                  <Box justifyContent="center">
                    <Text
                      fontSize="lg"
                      textAlign="center"
                      color="#000000"
                      fontWeight="bold"
                      lineHeight="65"
                      fontFamily="Inter-Black">
                      <MaterialIcons
                        name="favorite"
                        size={35}
                        color="#1C70EE"
                      />{' '}
                    </Text>
                  </Box>
                </Stack>
              );
            }}
          </Pressable>

          <Pressable>
            {({isHovered, isFocused, isPressed}) => {
              return (
                <Stack
                  direction="row"
                  mb="1"
                  space={1.5}
                  bg={
                    isPressed
                      ? 'coolGray.200'
                      : isHovered
                      ? 'coolGray.200'
                      : '#fff'
                  }
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                  pt="3"
                  pb="3"
                  pl="1"
                  pr="3"
                  mt="2"
                  rounded="8"
                  shadow={1}
                  borderWidth="1"
                  borderColor="coolGray.300">
                  <Box>
                    <Image
                      borderRadius="full"
                      w="56"
                      h="56"
                      source={require('../../../assets/img/doc2.png')}
                      alt="Alternate Text"
                      size="sm"
                    />
                  </Box>

                  <Box>
                    <Text
                      fontFamily="GeneralSans-Bold"
                      color="#000000"
                      fontSize="md"
                      lineHeight="20"
                      fontWeight="bold">
                      Dr. Jane Eddy
                    </Text>

                    <Text
                      fontFamily="GeneralSans-Bold"
                      color="#898A8D"
                      fontSize="14"
                      w="195"
                      lineHeight="20"
                      fontWeight="normal">
                      <MaterialIcons name="star" size={16} color="#898A8D" />{' '}
                      4.7 (4692 reviews)
                    </Text>
                    <Text
                      fontFamily="GeneralSans-Bold"
                      color="#898A8D"
                      fontSize="14"
                      w="165"
                      lineHeight="20"
                      fontWeight="normal">
                      Cardio Specialist - Ramsay College Hospital
                    </Text>
                  </Box>

                  <Box justifyContent="center">
                    <Text lineHeight="65">
                      <MaterialIcons
                        name="favorite"
                        size={35}
                        color="#898A8D"
                      />{' '}
                    </Text>
                  </Box>
                </Stack>
              );
            }}
          </Pressable>
        </Box>
      </FormControl>
    </VStack>
  );
};

export default Doctors_list_view;
