import {useEffect, useState} from 'react';
import {  useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,Icon,
    VStack,Select,Stack,Image,Text,View,
    useToast,FlatList,
     Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
   import DateTimePicker from '@react-native-community/datetimepicker';

const Success_page_kyc = () => {
  return (
    <VStack   px="1"  backgroundColor="#fff" flex={1} >
        

        <Box alignItems="center" mt="170">

            <Image source={require( "../../../../assets/success.png") } alt="Alternate Text" size="xl" />

            <Text fontWeight="bold" fontSize="xl" mt="5" color="#1C70EE" lineHeight="30.24" textAlign="center" fontFamily="GeneralSans-Bold"> Successful! </Text>

            <Box w="300" h="66" mt="1">
                <Text  fontSize="sm" color="#494949" textAlign="center"> Our professionals are taking a 
look at your KYC submission. 
We will get back to you in 24 hours.  
                </Text>
            </Box>


            <Box alignItems="center"  bottom="-50">
                        <Button bg="#1C70EE"  borderRadius="md" w="300"  onPress={() => navigation.navigate('National_ID_verify')}>Done</Button>
                </Box>

        </Box>


    </VStack>
  )
}

export default Success_page_kyc