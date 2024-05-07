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
  
       
        <Stack px="5" mt="10">

        
        <Pressable  mt="-15"   bg="#FFFFFF" pl="1" pt="5" pb="0" h="20" borderBottomWidth="0.5" >

            <Stack direction="row" space={1}>


            <Box > 
                <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                <Image source={require( "../../../../../assets/icon_nav/bell1.png") } alt="Alternate Text" size="26"   />
                </Box>
            </Box>

            <Box> 
                <Text fontFamily="GeneralSans-Bold" fontWeight="bold" color="#000" fontSize="16" lineHeight="20" color="#000000"  >  General Notification </Text>

                <Text fontFamily="GeneralSans-Bold" fontWeight="600" color="#545D69" fontSize="15" lineHeight="20" color="#000000"  >  Toggle Your Push Notification</Text>
            </Box>

                

            <Text position="absolute" right="-2"> 
                <Switch  colorScheme="info" 
                        value={switchValue}
                        onValueChange={handleSwitchChange} />
            </Text>

            </Stack>

    </Pressable>

    <Pressable  mt="2"   bg="#FFFFFF" pl="1" pt="5" pb="0" h="20" borderBottomWidth="0.5" >

        <Stack direction="row" space={1}>

            <Box > 
                <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                <Image source={require( "../../../../../assets/icon_nav/bell1.png") } alt="Alternate Text" size="26"   />
                </Box>
            </Box>

            <Box> 
                <Text fontFamily="GeneralSans-Bold" fontWeight="bold" color="#000" fontSize="16" lineHeight="20" color="#000000"  >  Sound </Text>

                <Text fontFamily="GeneralSans-Bold" fontWeight="600" color="#545D69" fontSize="15" lineHeight="20" color="#000000"  >  Toggle Your Push Sound</Text>
            </Box>

           
            <Text position="absolute" right="-2"> <Switch  colorScheme="info"/></Text>

        </Stack>

    </Pressable>

    <Pressable mt="2"   bg="#FFFFFF" pl="1" pt="5" pb="0" h="20" borderBottomWidth="0.5" >

        <Stack direction="row" space={1}>

             <Box > 
                <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                <Image source={require( "../../../../../assets/icon_nav/sms1.png") } alt="Alternate Text" size="26"   />
                </Box>
            </Box>

            <Box> 
                <Text fontFamily="GeneralSans-Bold" fontWeight="bold" color="#000" fontSize="16" lineHeight="20" color="#000000"  >  Email Notification </Text>

                <Text fontFamily="GeneralSans-Bold" fontWeight="600" color="#545D69" fontSize="15" lineHeight="20" color="#000000"  >  Toggle Your Push Email </Text>
            </Box>

            

            <Text position="absolute" right="-2"> <Switch  colorScheme="info"/></Text>

        </Stack>

    </Pressable>

    <Pressable mt="2"   bg="#FFFFFF" pl="1" pt="5" pb="0" h="20" borderBottomWidth="0.5" >

        <Stack direction="row" space={1}>

            <Box > 
                <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                <Image source={require( "../../../../../assets/icon_nav/offer1.png") } alt="Alternate Text" size="26"   />
                </Box>
            </Box>

            <Box> 
                <Text fontFamily="GeneralSans-Bold" fontWeight="bold" color="#000" fontSize="16" lineHeight="20" color="#000000"  >  Special offer </Text>

                <Text fontFamily="GeneralSans-Bold" fontWeight="600" color="#545D69" fontSize="15" lineHeight="20" color="#000000"  >  Toggle Your Push Special Offer</Text>
            </Box>

            

            <Text position="absolute" right="-2"> <Switch  colorScheme="info"/></Text>

        </Stack>

    </Pressable>


<Pressable  mt="2"   bg="#FFFFFF" pl="1" pt="5" pb="0" h="20" borderBottomWidth="0.5" >

    <Stack direction="row" space={1}>

        <Box > 
            <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
            <Image source={require( "../../../../../assets/icon_nav/payment1.png") } alt="Alternate Text" size="26"   />
            </Box>
        </Box>

        <Box> 
            <Text fontFamily="GeneralSans-Bold" fontWeight="bold" color="#000" fontSize="16" lineHeight="20" color="#000000"  >  Payments</Text>

            <Text fontFamily="GeneralSans-Bold" fontWeight="600" color="#545D69" fontSize="15" lineHeight="20" color="#000000"  >  Toggle Your Push Payments</Text>
        </Box>

        

        <Text position="absolute" right="-2"> <Switch  colorScheme="info"/></Text>

    </Stack>

</Pressable>


<Pressable  mt="2"   bg="#FFFFFF" pl="1" pt="5" pb="0" h="20" borderBottomWidth="0.5" >

<Stack direction="row" space={1}>

    <Box > 
        <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
        <Image source={require( "../../../../../assets/icon_nav/offer1.png") } alt="Alternate Text" size="26"   />
        </Box>
    </Box>

    <Box> 
        <Text fontFamily="GeneralSans-Bold" fontWeight="bold" color="#000" fontSize="16" lineHeight="20" color="#000000"  >  Promo and Discount </Text>

        <Text fontFamily="GeneralSans-Bold" fontWeight="600" color="#545D69" fontSize="15" lineHeight="20" color="#000000"  >  Toggle Your Push Promo</Text>
    </Box>

    

    <Text position="absolute" right="-2"> <Switch  colorScheme="info"/></Text>

</Stack>

</Pressable>



        </Stack>

    </VStack>
  )
}

export default Notification_settings