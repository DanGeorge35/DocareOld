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

const Personal_info_kyc = ({navigation}) => {

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
      //return `${year}-${month}-${day}`;
      return `${day}/${month}/${year}`;
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
    <VStack   px="1"  backgroundColor="#fff" flex={1} >

            {/* <Box mt="10" ml="3" mb="0"  w="300" h="7">
                    <Text fontSize="lg" color="#000000" fontWeight="bold" lineHeight="25"  fontFamily="Inter-Black"  onPress={() => navigation.navigate('Successful_page')}><FontAwesome5 name="arrow-left" size={20}  color="#000000" />   KYC Verification </Text>
            </Box>

            <Stack  space={2} px="4" mt="2" direction="row" > 
                    <View   borderColor="#1C70EE"  borderWidth="1" w="24"/> 
                    <View  borderColor="#1C70EE"  borderWidth="1" w="24"/> 
                    <View   borderColor="#F5F5FF"  borderWidth="1" w="24"/> 
            </Stack> */}

            <Box px="3">

                <Text fontWeight="bold" mt="5" fontFamily="GeneralSans-Bold" fontSize="16"  > Professional Information </Text>
                <Text fontSize="13" color="#A4A5A9">
                To complete your registration as a doctor, we need to
                verify your professional certifications. Please upload
                clear scans or photos of your relevant medical licenses
                and certifications
                </Text>
            </Box>


            <FormControl w="100%" maxW="500"  alignItems="left" mt="2">
  
                <Box  mb="2" mt="1" mx="3">
                    
                    <Input type="text"  
                        placeholderTextColor="#000000"
                        size="md"  variant="outline" placeholder="Name of Institution" minWidth="300" w="100%"
                        
                        onChangeText={()=>{console.log("")}}
                    />

                    <Input type="text"  
                        placeholderTextColor="#000000"
                        size="md" mt="2"  variant="outline" placeholder="Institute Address" minWidth="300" w="100%"
                        
                        onChangeText={()=>{console.log("")}}
                    />

                        <Input type="text"  
                        placeholderTextColor="#000000"
                        size="md" mt="2"  variant="outline" placeholder="Degree" minWidth="300" w="100%"
                        
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
                        placeholder="Batch Year"
                        placeholderTextColor="#000000"
                        minWidth="48%" 
                        mt="2"
                        //isDisabled={true}
                        value={dateOfBirth}
                        isReadOnly="true"
                        InputRightElement={<Icon as={<MaterialIcons name="event" />} size={7} ml="1" color="dark.400" />} 
                        // editable={false}
                        onChangeText={()=>{console.log("")}}
                        />
                    </Pressable >

                    )}


                    <Box mt="2" >
                        
                        <Text fontWeight="bold"> Upload degree documents</Text>
                        <Text  fontSize="11" color="#838A93"> JPEG, PNG, PDF (min 4MB - max 8MB) </Text>
                        <Box  alignItems="center"> 
                            <Button colorScheme="primary" size="md" mt="4" variant="outline" borderRadius="sm" w="300" h="10" borderColor="cyan.500"  onPress={() => console.log("upload") }>Upload Document</Button>
                        </Box>
                    </Box>

                    <Box alignItems="center"  bottom="-140">
                        <Button bg="#1C70EE"  borderRadius="md" w="300"  onPress={() => navigation.navigate('Work_experience')}>Continue</Button>
                    </Box>


                </Box>
          </FormControl>


    </VStack>
  )
}

export default Personal_info_kyc