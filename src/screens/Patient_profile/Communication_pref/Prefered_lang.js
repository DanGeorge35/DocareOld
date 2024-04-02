import {useEffect, useState} from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,TextArea,Text,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,DatePicker,Radio,Group ,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
   import DateTimePicker from '@react-native-community/datetimepicker';


const Prefered_lang = ({navigation}) => {
  return (
    <VStack space="5"     backgroundColor="#FFFFFF" flex={1} >
  
        <Stack direction="row"  mb="0">

                <Box w="100" h="5" mt="30" ml="5">
                    <Text w="205" fontSize="md" fontWeight="bold" color="#000" lineHeight="27" onPress={()=>navigation.navigate('Communication_pref')}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
                </Box>

        </Stack>

        <Text  w="251" fontSize="18" fontWeight="bold" color="#000000" ml="10" fontFamily="GeneralSans-Bold"> Preferred Language </Text>


        <Stack px="5" mt="5">

        {/* <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
            <Radio value="1" >
                First
            </Radio>
            <Radio value="2">
                Second
            </Radio>
            <Radio value="3" >
                Third
            </Radio>
    </Radio.Group> */}

    <Radio.Group  name="myRadioGroup"  >

            
            <Stack direction="row" space={10} borderWidth="0.5" bg="#FFFFFF" pl="5" pr="5" pt="5" pb="0" h="16" borderRadius="md">

                        <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >English</Text>

                        {/* <Radio  ml="56%" value="English" ></Radio>  */}
                        <Text ml="56%"> <Radio value="English"  colorScheme="blue" ></Radio> </Text>

                    </Stack>

          

         
                    <Stack direction="row"  mt="3" space={10} space={10} borderWidth="0.5" bg="#FFFFFF" pl="5" pr="5" pt="5" pb="0" h="16" borderRadius="md">

                        <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Yoruba</Text>

                       <Text ml="56%"> <Radio value="Yoruba" colorScheme="blue"  ></Radio> </Text>

                    </Stack>

          

            
                <Stack direction="row" space={10} mt="3"  borderWidth="0.5" bg="#FFFFFF" pl="5" pr="5" pt="5" pb="0" h="16" borderRadius="md">

                    <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Hausa</Text>
                    {/* <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text> */}

                    <Text ml="57%"> <Radio value="Hausa" colorScheme="blue" ></Radio> </Text>

                </Stack>

            

           
                <Stack direction="row" space={10} mt="3" borderWidth="0.5" bg="#FFFFFF" pl="5" pr="5" pt="5" pb="0" h="16" borderRadius="md" >

                    <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Igbo</Text>

                    <Text  ml="60%"> <Radio value="Igbo" colorScheme="blue" ></Radio> </Text>

                </Stack>

           
            </Radio.Group>
        </Stack>


</VStack>
  )
}

export default Prefered_lang