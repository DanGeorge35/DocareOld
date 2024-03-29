import {useEffect, useState} from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,TextArea,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,DatePicker,Text,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
   import DateTimePicker from '@react-native-community/datetimepicker';

const Medical_info = ({navigation}) => {
    const { width } = Dimensions.get('window');

    return (
      <VStack space="5"     backgroundColor="#FFFFFF"  flex={1} >
  
            <Stack direction="row"  mb="0">

                <Box w="100" h="5" mt="5" ml="5">
                    <Text w="205" fontSize="md" fontWeight="bold" color="#000" lineHeight="27" onPress={()=>navigation.navigate('Profile')}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
                </Box>

                

            </Stack>

          <Text  w="251" fontSize="22" fontWeight="bold" color="#000000" ml="10" fontFamily="GeneralSans-Bold"> Medical Information </Text>
  
  
        <Stack px="5" mt="5">

             <Pressable onPress={() => navigation.navigate('Personal_info')} mt="-15"  borderWidth="0.5" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16" borderRadius="md">

                    <Stack direction="row" space={10}>

                        <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Medical History</Text>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

                    </Stack>

            </Pressable>

            <Pressable onPress={() => navigation.navigate('Current_medication')} mt="-15"  borderWidth="0.5" bg="#FFFFFF" pl="5" mt="2.5" pt="5" pb="0" h="16" borderRadius="md">

                    <Stack direction="row" space={10}>

                        <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Current Medications</Text>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

                    </Stack>

                </Pressable>

                <Pressable onPress={() => navigation.navigate('Personal_info')} mt="-15"  borderWidth="0.5" bg="#FFFFFF" pl="5" mt="2.5" pt="5" pb="0" h="16" borderRadius="md">

                    <Stack direction="row" space={10}>

                        <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Allergies</Text>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

                    </Stack>

                </Pressable>

                <Pressable onPress={() => navigation.navigate('Personal_info')} mt="-15"  borderWidth="0.5" bg="#FFFFFF" pl="5" mt="2.5" pt="5" pb="0" h="16" borderRadius="md">

                    <Stack direction="row" space={10}>

                        <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Hospitalisations and Emergency</Text>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

                    </Stack>

                </Pressable>

                <Pressable onPress={() => navigation.navigate('Personal_info')} mt="-15"  borderWidth="0.5" bg="#FFFFFF" pl="5" mt="2.5" pt="5" pb="0" h="16" borderRadius="md">

                    <Stack direction="row" space={10}>

                        <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Chronic Conditions Management</Text>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

                    </Stack>

                </Pressable>

                <Pressable onPress={() => navigation.navigate('Personal_info')} mt="-15"  borderWidth="0.5" bg="#FFFFFF" pl="5" mt="2.5" pt="5" pb="0" h="16" borderRadius="md">

                    <Stack direction="row" space={10}>

                        <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Diagnostic Test Results</Text>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

                    </Stack>

                </Pressable>

                <Pressable onPress={() => navigation.navigate('Personal_info')} mt="-15"  borderWidth="0.5" bg="#FFFFFF" pl="5" mt="2.5" pt="5" pb="0" h="16" borderRadius="md">

                    <Stack direction="row" space={10}>

                        <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Primary Care Physician Information</Text>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

                    </Stack>

                </Pressable>

        </Stack>
  
  
  
      </VStack>
    )
}

const styles = StyleSheet.create({

    header_container: {
     // flex: 1,
      backgroundColor:'#FFFFFF',
       // width:409,
        //height:215
      //color:'#fff',
      //justifyContent:"center",
      //alignItems:"center",
      //width: 375, 
     // height: 812, 
    },
    title:{
        fontFamily:'GeneralSans-Bold',
        fontWeight:'bold',
        fontSize:25,
        //lineHeight:30,
       // color:'#1B1D28',
        color:'#000000',
        width:251,
       // height:20,
        marginTop:0,
        marginLeft:20,

    },
    lang_view:{
        width:101,
        //height:49,
        marginTop:30,
        marginLeft:14,
        color:'#000000',
        
    },
    lang_text: {
        width:205,
        fontSize:20,
        fontWeight:'500',
        color:'#1C70EE',
       lineHeight: 21.6,
       fontFamily:'GeneralSans-Bold',
     
    },

});

export default Medical_info