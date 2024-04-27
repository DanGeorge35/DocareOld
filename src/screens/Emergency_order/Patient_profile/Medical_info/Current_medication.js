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

const Current_medication = ({navigation}) => {
  return (
  <VStack space="5"     backgroundColor="#FFFFFF"  flex={1} >



    <FormControl w="100%" maxW="500"   alignItems="center" mt="5">

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




        <Box alignItems="center" mt="20">
        
                <Button  variant="outline" borderRadius="md" w="300" h="12"  onPress={() =>navigation.navigate('Current_medication_list')}>
                    <Text> Add Current Medications     <FontAwesome5 name="plus" size={10} color="#000000" /></Text></Button>
        </Box>
       

    </Box>
    </FormControl>

  


  </VStack>
  )
}

export default Current_medication