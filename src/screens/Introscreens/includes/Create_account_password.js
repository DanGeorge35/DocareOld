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


const Create_account_password = ({onNext}) => {
    const [show, setShow] = React.useState(false);
    return (
        <FormControl w="100%" maxW="500"  alignItems="left" mt="5" ml="5">
    
        <Box  mb="2" mt="2">
            <FormControl.Label color="dark.500"  >Password</FormControl.Label>
    
    <Input w={{
        base: "90%",
        md: "25%"
      }} type={show ? "text" : "password"}
      size="xl"
      variant="outline"
      InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<FontAwesome5 name={show ? "eye" : "eye-slash"} />} size={5} mr="5" color="dark.400" />
            </Pressable>} placeholder="Password" />
    
    
            <FormControl.Label color="dark.500" mt="6" >Confirm Password</FormControl.Label>
    
    <Input w={{
        base: "90%",
        md: "25%"
      }} type={show ? "text" : "password"}
      size="xl"
      variant="outline"
      InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<FontAwesome5 name={show ? "eye" : "eye-slash"} />} size={5} mr="5" color="dark.400" />
            </Pressable>} placeholder="Password" />
    
    
            </Box>
    
            <Box alignItems="center" mt="200" >
                <Button bg="#1C70EE" borderRadius="md" w="300" h="12" onPress={onNext}>Submit</Button>
            </Box>
        
            </FormControl>
    
      )
}



export default Create_account_password