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

const Create_password = ({navigation}) => {

    const [show, setShow] = useState(false);

  return (
    <VStack   px="1"  backgroundColor="#fff" flex={1} >

 
            {/* <Box mt="10" ml="3" mb="0"  w="300" h="7">

                 <Text fontSize="lg" color="#000000" fontWeight="bold" lineHeight="25"  fontFamily="Inter-Black"  onPress={() => navigation.navigate('Account_type')}><FontAwesome5 name="arrow-left" size={20}  color="#000000" />   Create account </Text>

            </Box>


        <Stack  space={2} px="4" mt="2" direction="row" > 
                <View   borderColor="#1C70EE"  borderWidth="1" w="24"/> 
                <View   borderColor="#1C70EE"  borderWidth="1" w="24"/> 
                <View   borderColor="#1C70EE"  borderWidth="1" w="24"/> 
                
        </Stack> */}

        <Text fontWeight="bold" px="3" mt="5" fontFamily="GeneralSans-Bold" fontSize="16"  > Create Password </Text>

        <FormControl w="100%" maxW="500"  alignItems="left" mt="1">
  
            <Box  mb="2" mt="1" px="3">
            
                    <Input w={{
                        base: "100%",
                        md: "25%"
                    }} type={show ? "text" : "password"}
                    size="md"
                    placeholderTextColor="#000000"
                    mt="5"
                    variant="outline"
                        InputRightElement={<Pressable onPress={() => setShow(!show)}>
                        <Icon as={<FontAwesome5 name={show ? "eye" : "eye-slash"} />} size={5} mr="5" color="muted.400" />
                     </Pressable>} placeholder="Enter Password" />

                     <Input w={{
                        base: "100%",
                        md: "25%"
                    }} type={show ? "text" : "password"}
                    size="md"
                    placeholderTextColor="#000000"
                    mt="5"
                    variant="outline"
                        InputRightElement={<Pressable onPress={() => setShow(!show)}>
                        <Icon as={<FontAwesome5 name={show ? "eye" : "eye-slash"} />} size={5} mr="5" color="muted.400" />
                     </Pressable>} placeholder="Confirm Password" />



                <Box alignItems="center"  bottom="-400">
                        <Button bg="#1C70EE"  borderRadius="md" w="300"  onPress={() => navigation.navigate('Successful_page')}>Create Account</Button>
                </Box>

            </Box>
        </FormControl>

    </VStack>
  )
}

export default Create_password