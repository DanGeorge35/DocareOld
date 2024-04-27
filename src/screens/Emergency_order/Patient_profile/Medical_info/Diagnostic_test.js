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

const Diagnostic_test = ({navigation}) => {

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [dateOfBirth, setDateOfBirth] = useState();
  
    const toggleDatePicker = () => {
      setShowPicker(!showPicker);
    };
  
    const formatDate = (rawDate)=>{
      let date = new Date(rawDate);
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let day = date.getDate();
      return `${year}-${month}-${day}`;
    }
  
    const handleChange =({type},selectedDate) => {
          if(type =="set"){
              const currentDate = selectedDate;
              //setDate(currentDate)
              if(Platform.OS === "android"){
                  toggleDatePicker();
                  //setDateOfBirth(currentDate.toDateString());
                  setDateOfBirth(formatDate(currentDate));
                 // console.log(currentDate)
              }
          }else{
              toggleDatePicker()
          }
    }

return (

<VStack space="5" backgroundColor="#FFFFFF"  flex={1} >

    <FormControl w="100%" maxW="500"   alignItems="center" mt="5">
    
        <Box  mb="1" mt="1" mx="3">
      
    
          <Input type="text"  
          
           size="md" my="2" variant="outline" placeholder="Health Care Center" minWidth="100%" 
           placeholderTextColor="#1C1B1F"
           onChangeText={()=>{console.log("")}}
           />
    
    
        <Input type="text"  
    
            size="md" my="2"  variant="outline" placeholder="Test" minWidth="100%" 
            placeholderTextColor="#1C1B1F"
            //onChangeText={(val)=>setPhone(val)}
            onChangeText={()=>{console.log("")}}
        />
    
        
    
    {showPicker && (

            <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={handleChange}
            maximumDate={new Date(2030, 10, 20)}
            minimumDate={new Date(1980, 0, 1)}
            />
            )}

            {!showPicker && (
            <Pressable
            onPress={toggleDatePicker}
            >
                <Input type="text"  
                
                size="md"  variant="outline" 
                placeholder="Date Of Birth"
                placeholderTextColor="#000000"
                minWidth="48%" 
                mt="3"
                //isDisabled={true}
                value={dateOfBirth}
                isReadOnly="true"
                InputRightElement={<Icon as={<MaterialIcons name="event" />} size={7} ml="2" color="dark.400" />} 
                // editable={false}
                onChangeText={()=>{console.log("")}}
                />
            </Pressable >

        )}

        <Box mt="5">
            <Text fontWeight="bold" fontSize="14" > Medication Image <Text color="red">* </Text> </Text>
        </Box>


        <Pressable  mt="5"  alignItems="center"  bg="#F8F8FF" pl="1" mt="2.5" pt="5" pb="0" h="20" borderRadius="md">

               <Box bg="#DADEE3" w="30%" p="1" alignItems="center"  >
                    <Text color="#1C70EE" fontSize="14" fontWeight="bold"> Choose File </Text>
                </Box>
                <Text color="#858C94" fontSize="14" fontWeight="bold">    Png, JPEG, PDF </Text>
             


        </Pressable>
    
        <Box alignItems="center" mt="30%">
            <Button bg="#1C70EE" borderRadius="md" w="100%" p="4" onPress={()=>navigation.navigate("Diagnostic_test_list")}>
                <Text color="#fff" fontWeight="bold">   Save  </Text>
            </Button>
        </Box>

    </Box> 
        </FormControl>
    
        </VStack>
  )
}

export default Diagnostic_test