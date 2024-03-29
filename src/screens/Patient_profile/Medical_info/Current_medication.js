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

const Current_medication = () => {
  return (
    <VStack space="5"     backgroundColor="#FFFFFF"  flex={1} >

       <Stack direction="row"  space={5} mb="0">

        <Box w="100" h="5" mt="5" ml="5">
            <Text w="205" fontSize="md" fontWeight="bold" color="#000" lineHeight="27" onPress={()=>navigation.navigate('Profile')}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
        </Box>
        <Text  fontFamily="HelveticaNeueBlack" fontSize="38" fontWeight="bold" color="#1C70EE" >Do'Care</Text>

        <Box  w="100"  mt="6"  position="absolute" right="-20"    onPress={() => console.log("Edit")}>
                        <Text w="205" fontSize="16" fontWeight="500" color="#1C70EE" lineHeight='20' fontFamily="GeneralSans-Bold"  >Save</Text>
        </Box>

    </Stack>

    <Box alignItems="center">

    <Text  w="251" fontSize="22" textAlign="center" fontWeight="600" color="#000000"  fontFamily="GeneralSans-Bold"> Current Medications </Text>

    </Box>



    <FormControl w="100%" maxW="500"   alignItems="center" mt="2">

<Box  mb="1" mt="1" mx="3">
  

      <Input type="text"  
      
       size="xl" my="2" variant="outline" placeholder="Medication Name e.g.  Metformin" minWidth="100%" 
       placeholderTextColor="#000000"
       onChangeText={()=>{console.log("")}}
       />



    <Input type="text"  

    size="xl" my="2"  variant="outline" placeholder="Dosage e.g. 500 mg" minWidth="100%" 
    placeholderTextColor="#000000"
    //    onChangeText={(val)=>setPhone(val)}
    onChangeText={()=>{console.log("")}}
    />

    

    <Input type="text"  

    size="xl" my="2" borderRadius="md"  variant="outline" placeholder="Frequency e.g. Twice daily" minWidth="100%" 
    placeholderTextColor="#000000"
    //    onChangeText={(val)=>setPhone(val)}
    onChangeText={()=>{console.log("")}}
    />

    <Box>

    <Select bg="#F9F9FA"  my="2" minWidth="327" accessibilityLabel="Choose Service" placeholder="Type"
            isFocused
            color="#000000"
            placeholderTextColor="#000000"
            //   onValueChange={itemValue => setService(itemValue)}  

            _selectedItem={{
                            bg: "#F9F9FA",
                            endIcon: <CheckIcon size={5} />
                        }} 
                        
                        >

                  <Select.Item label="Prescription" value="Prescription" />
                  <Select.Item label="Over-the-counter" value="Over-the-counter" />
                  <Select.Item label="Supplement" value="Supplement" />
                 
                </Select>
        </Box>




        <Box alignItems="center" mt="40">
        
                <Button  variant="outline" borderRadius="md" w="300" h="12"  onPress={() => console.log("hello")}>
                    <Text> Add Current Medications     <FontAwesome5 name="plus" size={10} color="#000000" /></Text></Button>
        </Box>
       

    </Box>
</FormControl>

  


    </VStack>
  )
}

export default Current_medication