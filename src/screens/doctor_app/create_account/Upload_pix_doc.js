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

const Upload_pix_doc = ({navigation}) => {
  return (
    <VStack   px="1"  backgroundColor="#fff" flex={1} >

 
            <Box mt="10" ml="3" mb="0"  w="300" h="7">

            <Text fontSize="lg" color="#000000" fontWeight="bold" lineHeight="25"  fontFamily="Inter-Black"  onPress={() => navigation.navigate('Account_type')}><FontAwesome5 name="arrow-left" size={20}  color="#000000" />   Create account </Text>

        </Box>


        <Stack  space={2} px="4" mt="2" direction="row" > 
                <View   borderColor="#1C70EE"  borderWidth="1" w="24"/> 
                <View   borderColor="#1C70EE"  borderWidth="1" w="24"/> 
                {/* <View  borderColor="#b8d2fa"  borderWidth="1" w="24"/>  */}
                <View   borderColor="#F5F5FF"  borderWidth="1" w="24"/> 
        </Stack>

        <Text fontWeight="bold" px="3" mt="5" fontFamily="GeneralSans-Bold" fontSize="16"  > Upload your picture</Text>


        <Box alignItems="center" justifyContent="center"  mt="10" >
                <Image  borderRadius="full"   w="35.38" h="35.38" source={require( "../../../../assets/img/upld1.jpg") } alt="Alternate Text" size="2xl" />
                <Text mt="3" fontWeight="bold" fontFamily="GeneralSans-Bold" color="#000000"> Change Profile Picture </Text>
                <Text mt="0"  fontFamily="GeneralSans-Bold" fontSize="12" color="#AAAFB6"> 13MB min  - 20MB max </Text>
        </Box>

        <Box alignItems="center" position="relative" bottom="-200">
                    <Button bg="#1C70EE"  borderRadius="md" w="300"  onPress={() => navigation.navigate('Create_password')}>Create Account</Button>
            </Box>



    </VStack>
  )
}

export default Upload_pix_doc