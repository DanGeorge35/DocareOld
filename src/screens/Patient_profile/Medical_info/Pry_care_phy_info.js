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

const Pry_care_phy_info = ({navigation}) => {
  return (
    <VStack space="5" backgroundColor="#FFFFFF"  flex={1} >

    <Stack direction="row"  space={5} mb="0">

        <Box w="100" h="5" mt="5" ml="5">
            <Text w="205" fontSize="md" fontWeight="bold" color="#000" lineHeight="27" onPress={()=>navigation.navigate('Medical_info')}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
        </Box>

        <Text  fontFamily="HelveticaNeueBlack" fontSize="38" fontWeight="bold" color="#1C70EE" >Do'Care</Text>

        <Box  w="100"  mt="6"  position="absolute" right="-20"    onPress={() => console.log("Save")}>
            <Text w="205" fontSize="16" fontWeight="500" color="#1C70EE" lineHeight='20' fontFamily="GeneralSans-Bold"  >Save</Text>
        </Box>

    </Stack>

    <Box alignItems="center">

        <Text  w="251" fontSize="20" textAlign="center" fontWeight="600" color="#000000"  fontFamily="GeneralSans-Bold"> Primary Care Physician 
            information </Text>

    </Box>



    <FormControl w="100%" maxW="500"   alignItems="center" mt="2">

<Box  mb="1" mt="1" mx="3">


  <Input type="text"  
  
   size="md" my="2" variant="outline" placeholder="Physician Name" minWidth="100%" 
   placeholderTextColor="#1C1B1F"
   onChangeText={()=>{console.log("")}}
   />

<Input type="text"  

size="md" my="2"  variant="outline" placeholder="Clinic Name" minWidth="100%" 
placeholderTextColor="#1C1B1F"
//    onChangeText={(val)=>setPhone(val)}
onChangeText={()=>{console.log("")}}
/>

<Input type="text"  

size="md" my="2"  variant="outline" placeholder="Phone Number" minWidth="100%" 
placeholderTextColor="#1C1B1F"
//    onChangeText={(val)=>setPhone(val)}
onChangeText={()=>{console.log("")}}
/>



<Input type="text"  

size="md" my="2" borderRadius="md"  variant="outline" placeholder="Email Address" minWidth="100%" 
placeholderTextColor="#000000"
//    onChangeText={(val)=>setPhone(val)}
onChangeText={()=>{console.log("")}}
/>


<Input type="text"  

size="md" my="2" borderRadius="md"  variant="outline" placeholder="Residential Address" minWidth="100%" 
placeholderTextColor="#000000"
//    onChangeText={(val)=>setPhone(val)}
onChangeText={()=>{console.log("")}}
/>

</Box> 
</FormControl>


    </VStack>
  )
}

export default Pry_care_phy_info