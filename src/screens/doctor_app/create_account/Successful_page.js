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

const Successful_page = ({navigation}) => {
  return (
    <VStack   px="1"  backgroundColor="#fff" flex={1} >
        

        <Box alignItems="center" mt="100">

            <Image source={require( "../../../../assets/success.png") } alt="Alternate Text" size="xl" />

            <Text fontWeight="bold" fontSize="xl" mt="5" color="#1C70EE" lineHeight="30.24" textAlign="center" fontFamily="GeneralSans-Bold"> Success </Text>

            <Box w="300" h="66" mt="1">
                <Text  fontSize="sm" color="#494949" textAlign="center"> You have successfully created your doctor 
                    account on Do’Care. Now, kindly Visit your mail, to Retrieve your token. 
                </Text>
            </Box>


                {/* <Box alignItems="center"  bottom="-250">
                        <Button bg="#1C70EE"  borderRadius="md" w="300"  onPress={() => navigation.navigate('National_ID_verify')}>Proceed to KYC</Button>
                </Box> */}

                <Box alignItems="center"  bottom="-250">
                        <Button bg="#1C70EE"  borderRadius="md" w="300"  onPress={() => navigation.navigate('National_ID_verify')}>Verify Account</Button>
                </Box>

        </Box>


    </VStack>
  )
}

export default Successful_page