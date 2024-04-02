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

const Medical_history = ({navigation}) => {
    
  return (
    <VStack space="5"     backgroundColor="#FFFFFF"  flex={1} >

        <Stack direction="row"  mb="0">

        <Box w="100" h="8" mt="30" ml="5">
             <Text w="205" fontSize="md" fontWeight="bold" color="#000" lineHeight="27" onPress={()=>navigation.navigate('Medical_info')}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
          </Box>

          <Text  fontFamily="HelveticaNeueBlack" fontSize="30" fontWeight="bold" mt="5" color="#1C70EE" >Do'Care</Text>

            <Box  w="100"  mt="35" position="absolute" right="-25"   onPress={() => console.log("Edit")}>
                    <Text w="205" fontSize="16" fontWeight="500" color="#1C70EE" lineHeight='20' fontFamily="GeneralSans-Bold"  >Save</Text>
            </Box>

        </Stack>

        <Text  w="251" fontSize="18" textAlign="center" fontWeight="bold" color="#000000" ml="10" fontFamily="GeneralSans-Bold"> Medical History </Text>

    </VStack>
  )
}

export default Medical_history