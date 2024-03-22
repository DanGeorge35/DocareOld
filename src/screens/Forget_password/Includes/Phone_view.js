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
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons ';



const Phone_view = ({onGetTop,onSignUp}) => {
    const [show, setShow] = React.useState(false);
    return (
    
      <FormControl w="100%" maxW="500"  alignItems="left" mt="5">
  
      <Box  mb="2" mt="3">
         
            <Input type="text"  
            
             size="xl"  variant="outline" placeholder=" Enter Phone Number" minWidth="335" w="100%"
             
          //    onChangeText={(val)=>setPhone(val)}
             onChangeText={()=>{console.log("")}}
             />
  
  
        </Box>
  
        <Pressable mt="8"  >
              <Text style={{ textAlign: 'center',color:'#000' }}  >You will receive an SMS or call for verification</Text>
          </Pressable>
  
          <Box alignItems="center">
              <Button bg="#1C70EE"  borderRadius="md" w="300" mt="90" onPress={onGetTop}>Get Code</Button>
       </Box>
  
       <Pressable mt="8" onPress={onSignUp} >
                <Text style={{ textAlign: 'center',color:'#000' }}  >Don’t have an Account? <Text style={{ fontWeight:'bold'}}> Create now</Text></Text>
            </Pressable>
    
  
      
  
  
      </FormControl>
  
    )
  }
  
  
  
export default Phone_view