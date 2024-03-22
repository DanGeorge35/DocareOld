import * as React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,
    VStack,Select,Stack,Image,Text,
    useToast,FlatList,
     Button,Pressable,
    
   } from "native-base";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Create_account_name from './includes/Create_account_name'

import Create_account_password from './includes/Create_account_password'

import Create_account_contacts from './includes/Create_account_contacts'




  const renderTabBar = props => (
    <TabBar
    {...props}
      indicatorStyle={{ backgroundColor: '#1C70EE',height:4}}
      style={styles.tab_view}

     // labelStyle={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' }} F4F7FA

      indicatorContainerStyle={{fontSize: 34, color: 'blue',backgroundColor: '#F4F7FA' }}

     activeColor="#1C70EE" 
     inactiveColor="#000000"
      //getLabelText={({ route }) => route.title}
      tabStyle={{ paddingVertical: 10,  paddingHorizontal: 20,color:'#000' }}

  
    renderLabel={({ route, focused, color }) => (
        <Text style={{ color, margin: 8 }}>
          {route.title}
        </Text>
      )}


    />
  );

const moveNextTab=()=>{
    console.log("helloo")
}

const Create_account = ({navigation}) => {

  const layout = useWindowDimensions();
    
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'name', title: '' },
      { key: 'contact', title: '' },
      { key: 'password', title: '' },
    ]);

  const renderScene = ({ route }) => {
  
   // const [index, setIndex] = useState(0); 
      switch (route.key) {
        case 'name':
          return <Create_account_name onNext={() => setIndex(1)} />;
         case 'contact':
          return <Create_account_contacts onNext={() => setIndex(2)} />;
          case 'password':
          return <Create_account_password  onNext={() => navigation.navigate('Success_page')} />;
        default:
          return null;
      }
    };

    

  return (
    <VStack space="2"  px="3"  backgroundColor="#fff" flex={1} >

 

 <Box mt="10" ml="3"  w="300" h="12">

            <Text fontSize="xl" color="#000000" fontWeight="bold" lineHeight="25"  fontFamily="Inter-Black"  onPress={() => navigation.navigate('Account_type')}><FontAwesome5 name="arrow-left" size={20}  color="#000000" />   Create Account Type </Text>

         </Box>
   
 

  <TabView
    navigationState={{ index, routes }}
    renderTabBar={renderTabBar}
    renderScene={renderScene}
    onIndexChange={setIndex}
    activeTintColor="red" 
    swipeEnabled={false}
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

    tab_view:{
        //width:335,
        height:0,
        //backgroundColor:'#F4F7FA',
        marginTop:40,
       // marginLeft:20,
        color:'red'
       
    },

    form_view:{
        width:335,
        height:291,
        marginTop:45
    },



    lang_view:{
        width:331,
        height:27,
        marginTop:30,
        marginLeft:14,
        color:'#000000',
    },

    lang_text: {
        width:245,
        fontSize:20,
        fontWeight:'bold',
        color:'#000000',
       lineHeight: 27,
       fontFamily:'General Sans',
     
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

});

export default Create_account