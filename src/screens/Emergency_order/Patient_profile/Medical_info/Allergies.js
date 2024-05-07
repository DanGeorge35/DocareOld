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

const Allergies = ({navigation}) => {
  return (
    <VStack space="5"     backgroundColor="#FFFFFF"  flex={1} >



    <FormControl w="100%" maxW="500"   alignItems="center" mt="5">

    <Box  mb="1" mt="1" mx="3">
      

        <Box> 
          <Input type="text"  
          
            size="xl" my="2" variant="outline" placeholder="Supporting text" minWidth="100%" 
            placeholderTextColor="#000000"
            onChangeText={()=>{console.log("")}}
          />


            <Input type="text"  

                size="xl" my="2"  variant="outline" placeholder="Reaction 1" minWidth="100%" 
                placeholderTextColor="#000000"
                 //onChangeText={(val)=>setPhone(val)}
                onChangeText={()=>{console.log("")}}
            />

        
            <Input type="text"  

              size="xl" my="2" borderRadius="md"  variant="outline" placeholder="Reaction 2" minWidth="100%" 
              placeholderTextColor="#000000"
              //onChangeText={(val)=>setPhone(val)}
              onChangeText={()=>{console.log("")}}
            />

        </Box>

       <Text textAlign="right" color="#1C70EE" fontFamily="GeneralSans-Bold" fontWeight="bold"> Add another reaction </Text>

       <Stack direction="row" space={3} my="5">
        <Text fontSize="16" color="#494949" fontFamily="GeneralSans-Bold"color="#1C70EE" >New Allergies</Text>
        <Box borderBottomColor="#DADADA" borderBottomWidth="1" mb="5" h="3.5" width="60%"> </Box>
      </Stack>


      <Box> 
          <Input type="text"  
          
            size="xl" my="2" variant="outline" placeholder="Supporting text" minWidth="100%" 
            placeholderTextColor="#000000"
            onChangeText={()=>{console.log("")}}
          />


            <Input type="text"  

                size="xl" my="2"  variant="outline" placeholder="Reaction 1" minWidth="100%" 
                placeholderTextColor="#000000"
                 //onChangeText={(val)=>setPhone(val)}
                onChangeText={()=>{console.log("")}}
            />

        
            <Input type="text"  

              size="xl" my="2" borderRadius="md"  variant="outline" placeholder="Reaction 2" minWidth="100%" 
              placeholderTextColor="#000000"
              //onChangeText={(val)=>setPhone(val)}
              onChangeText={()=>{console.log("")}}
            />

        </Box>

       <Text textAlign="right" color="#1C70EE" fontFamily="GeneralSans-Bold" fontWeight="bold"> Add another reaction </Text>


        <Box  mt="5">
        
            <Button  variant="outline" borderColor="#1C70EE" size="xs" borderRadius="md" w="150" h="10"  onPress={() =>navigation.navigate('Current_medication_list')}>
                    <Text color="#1C70EE"> <FontAwesome5 name="plus" size={10} color="#1C70EE" />   Add Allergies   </Text>
            </Button>
       
        </Box>


        <Box alignItems="center" mt="20%">
          <Button bg="#1C70EE" borderRadius="md" w="100%" p="4" onPress={()=>navigation.navigate("Allergies_list")}>
               Save
          </Button>
        </Box>
       

    </Box>
    </FormControl>

  


  </VStack>
  )
}

export default Allergies