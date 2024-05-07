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

const Chronic_conditions_mgt = ({navigation}) => {
  return (
    <VStack space="5" backgroundColor="#FFFFFF"  flex={1} >

        
    <FormControl w="100%" maxW="500"   alignItems="center" mt="5">

    <Box  mb="1" mt="1" mx="3">
  

      <Input type="text"  
      
       size="md" my="2" variant="outline" placeholder="Hypertension" minWidth="100%" 
       placeholderTextColor="#1C1B1F"
       onChangeText={()=>{console.log("")}}
       />


    <Input type="text"  

    size="md" my="2"  variant="outline" placeholder="Regular blood pressure monitoring" minWidth="100%" 
    placeholderTextColor="#1C1B1F"
    //    onChangeText={(val)=>setPhone(val)}
    onChangeText={()=>{console.log("")}}
    />

    

    <Input type="text"  

    size="md" my="2" borderRadius="md"  variant="outline" placeholder="Regular blood pressure monitoring" minWidth="100%" 
    placeholderTextColor="#000000"
    //    onChangeText={(val)=>setPhone(val)}
    onChangeText={()=>{console.log("")}}
    />


  <Input type="text"  

        size="md" my="2" borderRadius="md"  variant="outline" placeholder="Reduced sodium intake, regular exercise" minWidth="100%" 
        placeholderTextColor="#000000"
        //    onChangeText={(val)=>setPhone(val)}
        onChangeText={()=>{console.log("")}}
    />


        <Box alignItems="center" mt="30%">
                        <Button bg="#1C70EE" borderRadius="md" w="100%" p="4" onPress={()=>navigation.navigate("Chronic_conditions_mgt_list")}>
                        Add a Chronic Conditions
                        </Button>
        </Box>


</Box> 
    </FormControl>

    
   
    </VStack>
  )
}

export default Chronic_conditions_mgt