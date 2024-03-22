import * as React from 'react';
import { View, useWindowDimensions, StyleSheet,Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,
    VStack,Select,Stack,Image,Icon,
    useToast,FlatList,
     Button,Pressable,
    
   } from "native-base";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const moveNextTab=()=>{
    console.log("helloo")
}

const Create_account_contacts = ({onNext}) => {
    return (
        <FormControl w="100%" maxW="500"  alignItems="left" mt="5" >
    
        <Box  mb="2" mt="2">
            <FormControl.Label  >Email</FormControl.Label>
    
              <Input type="text"  
              
               size="xl"  variant="outline" placeholder="Enter Email Address" minWidth="335" w="90%"
               
            //    onChangeText={(val)=>setPhone(val)}
               onChangeText={()=>{console.log("")}}
               />
    
    
            <FormControl.Label color="gray.100" mt="6" >Phone Number</FormControl.Label>
    
            <Input type="text"  
            size="xl"  variant="outline" placeholder="+234" minWidth="335" w="90%"
            
            //    onChangeText={(val)=>setPhone(val)}
            onChangeText={()=>{console.log("")}}
            />
    
            </Box>
    
            <Box alignItems="center" mt="200" >
                <Button  bg="#1C70EE" borderRadius="md" w="300" h="12" onPress={onNext}>Continue</Button>
            </Box>
        
            </FormControl>
    
    
      )
}



export default Create_account_contacts