import React , {useState,useEffect, useRef}from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,TextArea,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,DatePicker,Text,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,Modal,
    
   } from "native-base";

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFocusEffect,useIsFocused } from '@react-navigation/native';
import { SwipeablePanel } from 'rn-swipeable-panel';

import MapView, { Marker,Callout,Circle,Polyline,PROVIDER_GOOGLE } from 'react-native-maps'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const { height } = Dimensions.get('window');



const Emergency_order_map = ({navigation}) => {

  const mapRef = useRef(null);

  const { width } = Dimensions.get('window');
  const isFocused = useIsFocused();

    const [panelProps, setPanelProps] = useState({
      fullWidth: true,
      openLarge: false,
      showCloseButton: true,
      noBackgroundOpacity:true,
      showCloseButton:false,
      allowTouchOutside:true,
      //onlySmall: true,
    
      onClose: () => closePanel(),
      onPressCloseButton: () => closePanel(),
      // ...or any prop you want
    });
    const [isPanelActive, setIsPanelActive] = useState(false);

    const openPanel = () => {
      setIsPanelActive(true);
    };
  
    const closePanel = () => {
      setIsPanelActive(false);
    };


  // useEffect(() => {
  //   openPanel()
  //   console.log("Opeen11")
  //   }, []);

  useEffect(() => {
   // console.log("called");

    if(isFocused){ 
      openPanel()
    }
}, [isFocused]);

    // useFocusEffect(() => {
    //   openPanel()
    //   console.log("Opeen")
    
    // });
  

    const [markerList, setMarkerList] = useState([
        {
          id:1,
          latitude: 7.360796,
          longitude: 3.970467,
          title:"hey am here",
          description:"My Location is here"
        },
        {
          id:2,
          latitude: 7.361200, 
          longitude: 3.965435,
          title:"hey am here22",
          description:"My Location is here22"
        },
  
        // {
        //   id:3,
        //   latitude: 7.363030, 
        //   longitude: 3.971744,
        //   title:"hey am here33",
        //   description:"My }Location is here33"
        // }
  
      ])


      const MyCustomMarkerView  =()=>{
        return(
            <Image 
              style={{ height:30,width:30}} alt="custome Image"
              source={require("../../../../assets/icons/car31.png")} />
        )
      }
      
      async function moveTolocation (latitude,longitude) {
        mapRef.current.animateToRegion({
      
              latitude,
              longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
      
        },2000,)
        
      }
          
      const MyCustomCalloutView =()=>{
        return(
            <View>
              <Text>Hellooo </Text>
           </View>
        )
          
        
      }
  
  return (

<View style={styles.container}>



{/*
    <View style={styles.searchContainer}>

 <GooglePlacesAutocomplete
  placeholder='Search..'
  minLength={4}

//   returnKeyType={'default'}
  fetchDetails={true}
  

  onPress={(data, details = null) => {
    // 'details' is provided when fetchDetails = true
   // console.log(JSON.stringify(data.description));
    //console.log(JSON.stringify(data));
    console.log(JSON.stringify(details?.geometry?.location));

    moveTolocation(details?.geometry?.location.lat, details?.geometry?.location.lng)
   // console.log(data, details);
  }}
  query={{
    key: 'AIzaSyBkW4yk9lje3U8izdbAFUOSYQGLIpJpIcY',
   // key: 'AIzaSyBz6yOG7W-EEb9khaDWNbMdBIU9i6doD_o',
   // key: 'AIzaSyCQMUFCynTeCW-4Zu0O98pRIP1W8pEtCxI',
    language: 'en',
  }}

  // listView={{
  //   style: {
  //     backgroundColor:'white',
  //     color: '#000000'
  //   }
  // }}

  // textInputProps={{
    
  //   style: {
  //     backenddatashow:'#ffffff',
  //     color: '#000000',
      
  //   }
  // }}

  listItemText={{
    color: 'black', 
  }}

  onFail = {err=>console.log(err)}

  // styles={{
  //   container: styles.autocompleteContainer,

  //   textInputContainer: {
    
  //     color:'#000000'
  //   },
  // }}

  

  listViewDisplayed='auto' 
  enablePoweredByContainer={false} 

  renderRow={(rowData) => (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItemText}>{rowData.description}</Text>
    </View>
  )}

  styles={ styles1 }
/> 

</View>*/}



        <View  style={styles.container} >

        
            <MapView
              ref={mapRef}
              provider={PROVIDER_GOOGLE} 
              style={styles.map}
              region={{
                  latitude:  7.360796,
                  longitude: 3.970467,
                  latitudeDelta: 0.009,
                  longitudeDelta: 0.009,
              }}
            >

                <Marker
                    key={5}
                    coordinate={{latitude:7.360796, longitude:3.971744}}
                    description={"hellooo555"}
                  >
                    <MyCustomMarkerView />

                    <Callout style={{color:"#000000",fontSize:18}}>
                        <MyCustomCalloutView  />
                        {/* <Text> Helloo </Text>  */}
                    </Callout>

                </Marker>

                {/* for Multiple Marker */}

{/*  
      {
        markerList.map((marker)=>{
          return(
            <Marker

                 draggable
                // key={index}
                // coordinate={marker.latlng}
                //title={marker.title}
                //description={marker.description}
                //image={{uri: 'custom_pin'}}
                key={marker.id}
                coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
                title={marker.title}
                description={marker.description}
                onDragEnd={(e) => console.log({ x: e.nativeEvent.coordinate })}

          /> 
          )
        })
      } */}

    

      <Circle 
        radius={20}
        fillColor='#e6ffff'
        strokeColor='blue'
        strokeWidth={2}
        center={{latitude:7.362099, longitude:3.971559}}
       /> 

      <Polyline 
       strokeColor='green'
       strokeWidth={2}
       coordinates ={
              [
                {
                  latitude:7.360486, 
                  longitude:3.973237
                } ,
                {
                  latitude:7.360967, 
                  longitude:3.970073
                }
              ]
        }
      /> 
            
                 

            </MapView>

              

                    <Pressable   position="absolute" top="2" left="3"  onPress ={ ( ) => navigation.openDrawer()}> 
                            <Box shadow="7" backgroundColor="#007bff"  borderWidth="3" borderColor="#FFF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                             <Text ><MaterialIcons name="menu"  size={22} color="#FFF" /></Text>
                            </Box>
                     </Pressable>

                    

                    

                    <Box  w="100%" >

                      <SwipeablePanel {...panelProps} isActive={isPanelActive}>

                        <Box mx="5" mt="12">

                          
                                 <Input
                                  w={{
                                  base: "100%",
                                  md: "25%"
                                  }} 
                                  size="lg"
                                  InputLeftElement={<Icon as={<MaterialIcons name="search" />} 
                                  size="lg"
                                  variant="outline"
                                  ml="2"
                                  color="muted.400" />} 
                                  placeholderTextColor="#000000"
                                  placeholder="Where To?" 
                                  backgroundColor="#eee"
                                  onChangeText={()=>{console.log("")}}
                              />

                              <Stack direction="row" mt="2" space={3}>

                                <Box bg="#eee" borderWidth="1" p="2" borderRadius="sm" borderColor="#007bff">
                                <Stack direction="row">

                                  <Image 
                                    style={{ height:40,width:30}} alt="custome Image"
                                    source={require("../../../../assets/doctor.png")} />
                                    <Box alignItems="center">
                                        <Text fontWeight="700" fontSize="16"> Emergency </Text>
                                        <Text fontWeight="700" fontSize="12"> Send Emergency </Text>
                                    </Box>
                                  
                                  </Stack>
                                </Box>

                                <Box bg="#eee" borderWidth="1" p="2" borderRadius="sm" borderColor="#007bff">
                                <Stack direction="row">

                                  <Image 
                                    style={{ height:40,width:30}} alt="custome Image"
                                    source={require("../../../../assets/doctor.png")} />
                                    <Box alignItems="center">
                                        <Text fontWeight="700" fontSize="16"> Emergency </Text>
                                        <Text fontWeight="700" fontSize="12"> Send Emergency </Text>
                                    </Box>
                                  
                                  </Stack>
                                </Box>

                              </Stack>
                             </Box>
                      </SwipeablePanel>

                    </Box>


  
                
             

                

                {/* <View style={styles.searchContainer}>

                <GooglePlacesAutocomplete
                      placeholder='Search..'
                      minLength={4}

                   
                      fetchDetails={true}
                      

                      onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                      // console.log(JSON.stringify(data.description));
                        console.log(JSON.stringify(data));
                       // console.log(JSON.stringify(details?.geometry?.location));

                       // moveTolocation(details?.geometry?.location.lat, details?.geometry?.location.lng)
                      // console.log(data, details);
                      }}
                      query={{
                        key: 'AIzaSyCQMUFCynTeCW-4Zu0O98pRIP1W8pEtCxI',
                      // key: 'AIzaSyBz6yOG7W-EEb9khaDWNbMdBIU9i6doD_o',
                        language: 'en',
                      }}

              />

            </View> */}

               

        </View>
    </View>
  )
}




const styles = StyleSheet.create({

    menuBotton:{
      position: 'absolute',
      top:0,
    },

  panel: {
    position: 'absolute',
    bottom: -2,
    left: -2,
    right: -2,
    height: height * 0.25, 
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    borderColor:'#007bff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  panelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

    container: {
      ...StyleSheet.absoluteFillObject,
        //flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 0
    },
  
    searchContainer: {
      position: 'absolute',
      top: 20,
      color:"#000000",
      left: 0,
      right: 0,
      padding: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 1, // Ensure Autocomplete is above the MapView
    },
    autocompleteContainer: {
      flex: 1,
      paddingTop: 20,
    },
  
    listItemContainer: {
      //padding: 10,
      //borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    listItemText: {
      fontSize: 14,
      color: 'black',
    },
   });


   const styles1 = StyleSheet.create({

    container: {
      flex: 1,
    },
    textInputContainer: {
      flexDirection: 'row',
    },
    textInput: {
      backgroundColor: '#FFFFFF',
      height: 44,
      borderRadius: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: 15,
      flex: 1,
      color:'#000000',
    },
    poweredContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderColor: '#c8c7cc',
      borderTopWidth: 0.5,
    },
    powered: {},
    listView: {
      color:'#000000',
      backgroundColor: 'white',
    },
    row: {
      backgroundColor: '#FFFFFF',
      padding: 13,
      height: 44,
      flexDirection: 'row',
    },
    separator: {
      height: 0.5,
      backgroundColor: '#c8c7cc',
    },
    description: {},
    loader: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 20,
    },
  
   
      
    });
  

export default Emergency_order_map