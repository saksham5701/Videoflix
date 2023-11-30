import { View, Text,StyleSheet,ImageBackground, Pressable } from 'react-native';
import React,{useEffect, useState} from 'react';
import bg from '../../../assets/images/ios_bg.png';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import {useNavigation,useRoute} from '@react-navigation/core';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Voximplant} from 'react-native-voximplant';

const IncomingCallScreen = () => {
const [caller,setCaller]=useState('')
 const navigation=useNavigation();
 const route=useRoute();
const {call}=route.params;


useEffect(()=>{
    setCaller(call.getEndpoints()[0].displayName);
    call.on(Voximplant.CallEvents.Disconnected,callEvent=>{
        navigation.navigate('Contacts');
     });
     return () => {
        call.off(Voximplant.CallEvents.Disconnected);
      };
},[]);


const onDecline=()=>{
    call.decline();
} ;

const onAccept=()=>{
   navigation.navigate('Calling',{call,
isIncomingCall:true,});
} ;

// const goBack=()=>{
//     //  Navigation.goBack();
//     navigation.pop();
//     };
    // const goForward=()=>{
    // navigation.navigate("Call");
  
    // };




  return (
    <View style={styles.root}>

    {/* <Pressable onPress={goBack} style={styles.backButton}>
      <Ionicons name="chevron-back" color="white" size={25} />
    </Pressable> */}
    {/* <Pressable onPress={goForward} style={styles.forwardButton}>
      <AntDesign name="right" color="white" size={25} />
    </Pressable> */}



      <ImageBackground source={bg} style={styles.bg} resizeMode='cover'>
      <Text style={styles.name}>{caller}</Text>
      <Text style={styles.phoneNumber}> WhatsApp video...</Text>


      <View style={[styles.row,{marginTop:'auto'}]}>
       <View   style={styles.iconContainer}>
        <Ionicons name="alarm" color="white"  size={40}/>
            <Text style={styles.iconText}>Remind me</Text>
        </View>
        <View style={styles.iconContainer}>
        <Entypo name="message" color="white"  size={40}/>
            <Text style={styles.iconText}>Message</Text>
        </View>
        </View>

        <View style={styles.row}>
        {/* Decline Button */}
        <Pressable onPress={onDecline} style={styles.iconContainer}>
        <View style={styles.iconButtonContainer}>
        <Feather name="x" color="white"  size={40}/>
        </View>
            <Text style={styles.iconText} >Decline</Text>
        </Pressable>
        {/* Accept Button */}
        <Pressable onPress={onAccept} style={styles.iconContainer}>
        <View style={[styles.iconButtonContainer,{backgroundColor:'#2e7bff'}]}>
        <Feather name="check" color="white"  size={40} />
        </View>
            <Text style={styles.iconText}>Accept</Text>
        </Pressable>
        </View>
        </ImageBackground>
        </View>
    
  );
};

const styles=StyleSheet.create({
root:{
    height:'100%',
   },
name:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    marginTop:50,
    marginBottom:15,
},
phoneNumber:{
    fontSize:20,
    color:'white',
},
bg:{
    backgroundColor:'red',
    flex:1,
    alignItems:'center',
    padding:10,
    paddingBottom:50,
},
row:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
},
iconContainer:{
    alignItems:'center',
    marginVertical:20,
},
iconText:{
    color:'white',
    marginTop:10,
},
iconButtonContainer:{
    backgroundColor:'red',
    padding:15,
    borderRadius:50,
    margin:10,
},
// backButton:{
//     position:'absolute',
//     top:50,
//     left:10,
//     zIndex:10,
//   },
//   forwardButton:{
//     position:'absolute',
//     top:50,
//     right:10,
//     zIndex:10,
//   }

});

export default IncomingCallScreen