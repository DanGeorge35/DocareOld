import {useEffect, useState} from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,TextArea,Text,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,DatePicker,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
   import DateTimePicker from '@react-native-community/datetimepicker';



const Communication_pref = ({navigation}) => {
    const { width } = Dimensions.get('window');

    return (
      <VStack space="5"     backgroundColor="#FFFFFF" flex={1} >
  
            <Stack direction="row"  mb="0">

                    <Box w="100" h="5" mt="30" ml="5">
                        <Text w="205" fontSize="md" fontWeight="bold" color="#000" lineHeight="27" onPress={()=>navigation.navigate('Profile')}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
                    </Box>

                    

            </Stack>

          <Text  w="251" fontSize="18" fontWeight="bold" color="#000000" ml="10" fontFamily="GeneralSans-Bold"> Communication preference </Text>


          <Stack px="5" mt="5">

             <Pressable onPress={() => navigation.navigate('Prefered_lang')} mt="-15"  borderWidth="0.5" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16" borderRadius="md">

                    <Stack direction="row" space={10}>

                        <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Preferred Language</Text>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

                    </Stack>

            </Pressable>

            <Pressable onPress={() => navigation.navigate('Com_method')} mt="-15"  borderWidth="0.5" bg="#FFFFFF" pl="5" mt="2.5" pt="5" pb="0" h="16" borderRadius="md">

                    <Stack direction="row" space={10}>

                        <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Communication Method</Text>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

                    </Stack>

                </Pressable>

                <Pressable onPress={() => navigation.navigate('Privacy_settings')} mt="-15"  borderWidth="0.5" bg="#FFFFFF" pl="5" mt="2.5" pt="5" pb="0" h="16" borderRadius="md">

                    <Stack direction="row" space={10}>

                        <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Privacy Settings</Text>

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
        width:320,
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
export default Communication_pref