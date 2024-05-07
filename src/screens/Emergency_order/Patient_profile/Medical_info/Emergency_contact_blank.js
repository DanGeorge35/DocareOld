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

const Emergency_contact_blank = ({navigation}) => {
  return (
    <VStack space="5"  backgroundColor="#FFFFFF"   flex={1} >
        <Stack px="5"  mt="0" >
            <Box  w="100%" mt="50%" justifyContent="center" alignItems="center">
                <Image source={require( "../../../../../assets/img/blank_f1.png") } alt="Alternate Text" size="xl"   />
                <Text w="300" textAlign="center"  fontWeight="600" fontSize="16"> You have not added any contact to the emergency list </Text>
            </Box>

            <Box alignItems="center" mt="30%">
                <Button bg="#1C70EE" borderRadius="md" w="100%" p="4" onPress={()=>navigation.navigate("Emergency_contact")}>
                    <Text color="#fff"> <FontAwesome5 name="plus" size={16} />   Add Contact  </Text>
                </Button>
            </Box>
            
        </Stack>
</VStack>
  )
}

export default Emergency_contact_blank