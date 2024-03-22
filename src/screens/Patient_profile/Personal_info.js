//import * as React from 'react';
import {useEffect, useState} from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,TextArea,Text,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,DatePicker,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
   import DateTimePicker from '@react-native-community/datetimepicker';

const Personal_info = ({navigation}) => {

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

const { width } = Dimensions.get('window');

  return (
    <VStack space="5"     backgroundColor="#FFFFFF"  flex={1} >

        <Stack direction="row"  mb="0">

        <Box w="100" h="10" mt="30" ml="5">
             <Text w="205" fontSize="md" fontWeight="bold" color="#000" lineHeight="27" onPress={()=>navigation.navigate('Profile')}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
          </Box>

            <Box  w="100"  mt="30" position="absolute" right="2"   onPress={() => console.log("Edit")}>
                    <Text w="205" fontSize="20" fontWeight="500" color="#1C70EE" lineHeight='20' fontFamily="GeneralSans-Bold"  >Save</Text>
            </Box>

        </Stack>

        
        <Text  w="251" fontSize="18" fontWeight="bold" color="#000000" ml="10" fontFamily="GeneralSans-Bold"> Personal Information </Text>



<FormControl w="100%" maxW="500"   alignItems="left" mt="2">

    <Box  mb="1" mt="1" mx="3">
        <FormControl.Label  >First Name</FormControl.Label>

          <Input type="text"  
          
           size="xl"  variant="outline" placeholder="Enter First Name" minWidth="100%" 
           
           onChangeText={()=>{console.log("")}}
           />


        <FormControl.Label color="dark.100" mt="4" >Last  Name</FormControl.Label>

        <Input type="text"  

        size="xl"  variant="outline" placeholder="Enter Last Name" minWidth="100%" 
        
        //    onChangeText={(val)=>setPhone(val)}
        onChangeText={()=>{console.log("")}}
        />

        </Box>

        <Stack direction="row" space={0} ml="4" >

            <Box>

            <FormControl.Label color="gray.100" mt="4" >Gender</FormControl.Label>

            <Select minWidth="48%" accessibilityLabel="Choose Service" placeholder="Choose Your Gender" _selectedItem={{
        bg: "#F9F9FA",
        endIcon: <CheckIcon size={5} />
      }}  >

          <Select.Item label="Male" value="Male" />
          <Select.Item label="Female" value="Female" />
          <Select.Item label="Other" value="Others" />
        
        
        </Select>

    </Box>

    <Box mx="3">

        <FormControl.Label color="gray.100" mt="4" >Date Of Birth</FormControl.Label>

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
                    
                    size="xl"  variant="outline" 
                    placeholder="Date Of Birth"
                    placeholderTextColor="#000000"
                    minWidth="48%" 
                    //isDisabled={true}
                    value={dateOfBirth}
                    isReadOnly="true"
                    InputRightElement={<Icon as={<MaterialIcons name="event" />} size={7} ml="1" color="dark.400" />} 
                    // editable={false}
                    onChangeText={()=>{console.log("")}}
                    />
            </Pressable >

    )}

           
        </Box>

        </Stack>

        <Box mx="3">

            <FormControl.Label color="dark.100" mt="4" >About me (Optional)</FormControl.Label>

            <TextArea h={40} placeholder="Text Area Placeholder"  mx="1" minWidth="50%" 
             //    onChangeText={(val)=>setPhone(val)}
             onChangeText={()=>{console.log("")}}

            />

           
           

    </Box>


       
    
     </FormControl>


    </VStack>


  )
}

const styles = StyleSheet.create({

   
  
    
    

})

export default Personal_info