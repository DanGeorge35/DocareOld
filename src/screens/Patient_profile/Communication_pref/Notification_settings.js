import {useEffect, useState} from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,TextArea,Switch,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,DatePicker,Text,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
   import DateTimePicker from '@react-native-community/datetimepicker';

const Notification_settings = ({navigation}) => {

    const [switchValue, setSwitchValue] = useState(false);

    const handleSwitchChange = () => {
      setSwitchValue(!switchValue);
      console.log(switchValue);
    };

  return (
    <VStack space="5"  backgroundColor="#FFFFFF" flex={1} >
  
        <Stack direction="row"  mb="0">

                <Box w="100" h="5" mt="30" ml="5">
                    <Text w="205" fontSize="md" fontWeight="bold" color="#000" lineHeight="27" onPress={()=>navigation.navigate('Privacy_settings')}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
                </Box>

        </Stack>
        <Text  w="251" fontSize="18" fontWeight="bold" color="#000000" ml="10" fontFamily="GeneralSans-Bold"> Notification Settings </Text>


        <Stack px="5" mt="5">

        
        <Pressable onPress={() => navigation.navigate('Personal_info')} mt="-15"   bg="#FFFFFF" pl="5" pt="5" pb="0" h="16" borderBottomWidth="0.5" >

            <Stack direction="row" space={10}>

                <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >General Notification</Text>

                <Text ml="20%"> <Switch  colorScheme="info" 
                         value={switchValue}
                         onValueChange={handleSwitchChange} /></Text>

            </Stack>

    </Pressable>

    <Pressable onPress={() => navigation.navigate('Personal_info')} mt="2"   bg="#FFFFFF" pl="5" pt="5" pb="0" h="16" borderBottomWidth="0.5" >

        <Stack direction="row" space={10}>

            <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Sound</Text>

            
            <Text ml="49%"> <Switch  colorScheme="info"/></Text>

        </Stack>

    </Pressable>

    <Pressable onPress={() => navigation.navigate('Personal_info')} mt="2"   bg="#FFFFFF" pl="5" pt="5" pb="0" h="16" borderBottomWidth="0.5" >

        <Stack direction="row" space={10}>

            <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >special offer</Text>

            <Text ml="37%"> <Switch  colorScheme="info"/></Text>

        </Stack>

    </Pressable>

    <Pressable onPress={() => navigation.navigate('Personal_info')} mt="2"   bg="#FFFFFF" pl="5" pt="5" pb="0" h="16" borderBottomWidth="0.5" >

        <Stack direction="row" space={10}>

            <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Payments</Text>

            <Text ml="42%"> <Switch  colorScheme="info"/></Text>

        </Stack>

    </Pressable>

    <Pressable onPress={() => navigation.navigate('Personal_info')} mt="2"   bg="#FFFFFF" pl="5" pt="5" pb="0" h="16" borderBottomWidth="0.5" >

        <Stack direction="row" space={10}>

            <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Promo and discount</Text>

            <Text ml="22%"> <Switch  colorScheme="info"/></Text>

        </Stack>

    </Pressable>

        </Stack>

    </VStack>
  )
}

export default Notification_settings