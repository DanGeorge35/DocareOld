import * as React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,Text,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import EmailView from './Includes/Email_view'
import PhoneView from './Includes/Phone_view'




const renderTabBar = props => (
  <TabBar
  {...props}
    indicatorStyle={{ backgroundColor: '#1C70EE'}}
    style={styles.tab_view}

   // labelStyle={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' }} F4F7FA

    indicatorContainerStyle={{fontSize: 34, color: 'blue',backgroundColor: '#F4F7FA' }}

   activeColor="#1C70EE" 
   inactiveColor="#000000"
    //getLabelText={({ route }) => route.title}
    tabStyle={{ paddingVertical: 10,  paddingHorizontal: 20,color:'#000' }}

  //   renderIcon={({ route, focused, color }) => (
  //     <FontAwesome5
  //       name={focused ? 'albums' : 'albums-outlined'}
  //       color={color}
  //     />
  //     )}

  renderLabel={({ route, focused, color }) => (
      <Text style={{ color, margin: 8 }}>
        {route.title}
      </Text>
    )}


  />
);

const Forget_pass = ({navigation}) => {

  const layout = useWindowDimensions();
    
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'email', title: 'Email' },
    { key: 'phone_no', title: 'Phone Number' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'email':
        return (
          <EmailView 
              onGetTop={() => navigation.navigate('Retrieve_otp')}
              onSignUp={() => navigation.navigate('Create_account')}
            
           />
        )
       case 'phone_no':
        return (
          <PhoneView 
            onGetTop={() => navigation.navigate('Retrieve_otp')}
              onSignUp={() => navigation.navigate('Create_account')}
            
          />
          )
      default:
        return null;
    }
  };

  return (
    <VStack space="2.5"  px="3"   backgroundColor="#fff" flex={1} >
       
        <Stack direction="row">

        

           <Box w="100" h="10" mt="30">
             <Text w="205" fontSize="md" fontWeight="bold" color="#000" lineHeight="27" onPress={()=>navigation.navigate('Login_screen')}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
          </Box>

          <Box  w="330" h="49" mt="5" >
             <Text fontSize="40" fontWeight="bold" color="#1C70EE" lineHeight="48.8">Do'Care </Text> 
          </Box>

        </Stack>

        <Box    mt="5">
          <Text textAlign="left" color="#000" fontWeight="bold" fontSize="18"  >Enter your Email Address to reset your password </Text>
          <Text fontWeight="normal" color="#000" > A 4-digit code will be sent to your designated email</Text>
        </Box>

        <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        activeTintColor="red" 
        initialLayout={{ width: 335 }}
      />

        
    </VStack>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
    color:'#fff',
    justifyContent:"center",
    alignItems:"center",
    //width: 375, 
   // height: 812, 
  },

  DocareText: {
    fontSize:40,
    color:'#1C70EE',
    lineHeight: 48.84,
    fontFamily:'HelveticaNeueBold',
    marginTop:0,
 
},

tab_view:{
    //width:335,
    height:50,
    //backgroundColor:'#F4F7FA',
    marginTop:30,
   // marginLeft:20,
    color:'red'
   
},

form_view:{
    width:335,
    height:291,
    marginTop:45
},




get_start_btn:{
width:327,
height:52,
 marginTop:0,
 //color:"red",
// backgroundColor:"1C70EE",

borderRadius:12,
padding: 16,
},

})

export default Forget_pass