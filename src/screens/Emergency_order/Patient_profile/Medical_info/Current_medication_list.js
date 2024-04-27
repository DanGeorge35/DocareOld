import {useEffect, useState } from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,TextArea,Checkbox,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,DatePicker,Text,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
   import DateTimePicker from '@react-native-community/datetimepicker';

const Current_medication_list = () => {
  return (
    <VStack space="3"     backgroundColor="#FFFFFF"  flex={1} >

      <Text position="absolute" right="5" top="5" h="40"  > <FontAwesome5 name="plus" size={22} /></Text>



        <Pressable  bg="#F8F8FF" pl="5" pt="5" pb="0" borderRadius="md" mx="3" mt="12" h="20">

            <Stack direction="row" space={2}>

                
                <Box >
                        <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="16" lineHeight="20" color="#000000"  >Atovaquone/Proguanil</Text>

                        <Text fontFamily="GeneralSans-Bold" mt="2" fontWeight="bold" fontSize="13" lineHeight="20" color="#606060"  >18th Sept - 20th Oct, 2023</Text>
                </Box>
                
                
                <Text position="absolute" right="12" onPress={()=>console.log("Edit")} ><FontAwesome5 name="edit"  size={18} color="#000000" /></Text>

                <Text position="absolute" right="5" onPress={()=>console.log("Delete")} ><FontAwesome5 name="trash-alt"  size={18} color="#000000" /></Text>

            </Stack>

        </Pressable>


        <Pressable  bg="#F8F8FF" pl="5" pt="5" pb="0" borderRadius="md" mx="3"  h="20">

            <Stack direction="row" space={2}>

                
                <Box >
                        <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="16" lineHeight="20" color="#000000"  >Atovaquone/Proguanil</Text>

                        <Text fontFamily="GeneralSans-Bold" mt="2" fontWeight="bold" fontSize="13" lineHeight="20" color="#606060"  >18th Sept - 20th Oct, 2023</Text>
                </Box>
                
                
                <Text position="absolute" right="12" onPress={()=>console.log("Edit")} ><FontAwesome5 name="edit"  size={18} color="#000000" /></Text>

                <Text position="absolute" right="5" onPress={()=>console.log("Delete")} ><FontAwesome5 name="trash-alt"  size={18} color="#000000" /></Text>

            </Stack>

        </Pressable>

        <Pressable  bg="#F8F8FF" pl="5" pt="5" pb="0" borderRadius="md" mx="3"  h="20">

            <Stack direction="row" space={2}>

                
                <Box >
                        <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="16" lineHeight="20" color="#000000"  >Atovaquone/Proguanil</Text>

                        <Text fontFamily="GeneralSans-Bold" mt="2" fontWeight="bold" fontSize="13" lineHeight="20" color="#606060"  >18th Sept - 20th Oct, 2023</Text>
                </Box>
                
                
                <Text position="absolute" right="12" onPress={()=>console.log("Edit")} ><FontAwesome5 name="edit"  size={18} color="#000000" /></Text>

                <Text position="absolute" right="5" onPress={()=>console.log("Delete")} ><FontAwesome5 name="trash-alt"  size={18} color="#000000" /></Text>

            </Stack>

        </Pressable>




    </VStack>
  )
}

export default Current_medication_list