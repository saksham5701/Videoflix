import { View, Text,StyleSheet ,Pressable, Alert,PermissionsAndroid,Platform} from 'react-native'
import React,{useEffect, useRef, useState} from 'react'
import CallActionBox from '../../components/CallActionBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation,useRoute} from '@react-navigation/core';
import { Voximplant } from 'react-native-voximplant';


const permissions=[
  PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  PermissionsAndroid.PERMISSIONS.CAMERA,
];
 


const CallingScreen = () => {

  const[permissionGranted,setPermissionGranted]=useState(false);
  const[callStatus,setCallStatus]=useState('Initializing...');
  const [localVideoStreamId,setLocalVideoStreamId]=useState('');
  const [remoteVideoStreamId,setRemoteVideoStreamId]=useState('');
  const[cameraon,setcameraon]=useState(true);

  const navigation=useNavigation();
 const route=useRoute();

  const {user,call:incomingCall,isIncomingCall}=route?.params;
  const voximplant=Voximplant.getInstance();
  const call=useRef(incomingCall);
  const endpoint=useRef(null);

  const goBack=()=>{
  navigation.pop();
  };
  useEffect(()=>{
   const getPermissions=async ()=>{
    const granted = await PermissionsAndroid.requestMultiple(permissions);
    const recordAudioGranted=granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO]==='granted';
    const cameraGranted=granted[PermissionsAndroid.PERMISSIONS.CAMERA]==='granted';
    if(!cameraGranted || !recordAudioGranted){
     Alert.alert('Permissions not granted');
    }else{
     setPermissionGranted(true);
    }
   };
   if(Platform.OS === 'android'){
    getPermissions();
   }else{
    setPermissionGranted(true);
   }
  },[])


  useEffect(()=>{
    if(!permissionGranted)
    {
      return;
    }
    const callSettings={
      video:{
        sendVideo:true,
        receiveVideo:true,
      },
      Audio:{
        sendAudio:true,
      }
    };
    
    const makeCall=async ()=>{
        call.current=await voximplant.call(user.user_name,callSettings);
        subscribeToCallEvents();
    };

   const answerCall=async ()=>{
    subscribeToCallEvents();
    endpoint.current=call.current.getEndpoints()[0];
    subscribeToEndpointEvent();
    call.current.answer(callSettings);
   };




    const subscribeToCallEvents= () =>{
       call.current.on(Voximplant.CallEvents.Failed,callEvent=>{
        showError(callEvent.reason);
       });
       call.current.on(Voximplant.CallEvents.ProgressToneStart,callEvent=>{
           setCallStatus('Calling...');
       });
       call.current.on(Voximplant.CallEvents.Connected,callEvent=>{
        setCallStatus('Connected');
       });
       call.current.on(Voximplant.CallEvents.Disconnected,callEvent=>{
          navigation.navigate('Contacts');
       });
       call.current.on(Voximplant.CallEvents.LocalVideoStreamAdded,callEvent=>{
          setLocalVideoStreamId(callEvent.videoStream.id);
       },);

       call.current.on(Voximplant.CallEvents.EndpointAdded,callEvent=>{
        endpoint.current = callEvent.endpoint;
        subscribeToEndpointEvent();
       });
    };
    
    const subscribeToEndpointEvent = async ()=>{
      endpoint.current.on(Voximplant.EndpointEvents.RemoteVideoStreamAdded,endpointEvent=>{
        setRemoteVideoStreamId(endpointEvent.videoStream.id);
      },
      );
    };




    const showError= reason =>{
      Alert.alert('Call failed',`Reason:${reason}`,[{text:'Ok',onPress:navigation.navigate('Contacts'),},]);
    };

  if(isIncomingCall){
    answerCall();
  }else{
    makeCall();
  }

   return ()=>{
    call.current.off(Voximplant.CallEvents.Failed);
    call.current.off(Voximplant.CallEvents.ProgressToneStart);
    call.current.off(Voximplant.CallEvents.Connected);
    call.current.off(Voximplant.CallEvents.Disconnected);
   };
  },[permissionGranted]);

  const onHangupPress=()=>{
    call.current.hangup();
  };
  const onmicoff=async ()=>{
      console.log("Mic function run successfully")
      call.current.sendAudio(false);
  }
  const onToggleCamera=async ()=>{
    setcameraon(!cameraon);
    call.current.sendVideo(cameraon);
  }


  return (
    
    <View style={styles.page}>
    <Pressable onPress={goBack} style={styles.backButton}>
      <Ionicons name="chevron-back" color="white" size={25} />
    </Pressable>
    <Voximplant.VideoView videoStreamId={localVideoStreamId} style={styles.localVideo}/>
    <Voximplant.VideoView videoStreamId={remoteVideoStreamId} style={styles.remoteVideo}/>
    

     <View style={styles.cameraPreview}>
      <Text style={styles.name}> {user?.user_display_name}</Text>
      <Text style={styles.phoneNumber}>{callStatus}</Text>
      {/* <View style={{flex:1}}/> */}
      </View>

      <CallActionBox onHangupPress={onHangupPress} onmicoff={onmicoff} onToggleCamera={onToggleCamera} />
    </View>
   
  );
};

const styles=StyleSheet.create({
  root:{
    height:'100%',
   },
page:{
    // backgroundColor:'red',
    height:'100%',
    backgroundColor:'#7b4e80',
},
cameraPreview:{
    flex:1,
    alignItems:'center',
    paddingTop:10,
    paddingHorizontal:10,
},
localVideo:{
width:100,
height:150,
position:'absolute',
right:10,
top:10,
zIndex:100,
},
remoteVideo:{
  width :"100%",
  position:'absolute',
  left:0,
  right:0,
  top:0,
  bottom:44,
  zIndex:-1
},
name:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    marginTop:20,
    marginBottom:15,
},
phoneNumber:{
    fontSize:20,
    color:'white',
},
backButton:{
  position:'absolute',
  top:15,
  left:10,
  zIndex:1,
},

});

export default CallingScreen