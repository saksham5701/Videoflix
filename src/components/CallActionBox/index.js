import { View, Text,StyleSheet, Pressable } from 'react-native'
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/core'
import {Voximplant} from 'react-native-voximplant';

const CallActionBox = ({onHangupPress,onmicoff,onToggleCamera}) => {
    const [isCameraOn,setIsCameraOn]=useState(true);
    const [isMicOn,setIsMicOn]=useState(true);

    const navigation=useNavigation();

    const CameraManager = Voximplant.Hardware.CameraManager.getInstance();
    const cameraType = Voximplant.Hardware.CameraType;
    
    const [cameraState, setCameraState] = useState(cameraType.FRONT);




  const onReverseCamera=()=>{
    if (cameraState === cameraType.FRONT) {
      CameraManager.switchCamera(cameraType.BACK);
      setCameraState(cameraType.BACK);
    } else {
      CameraManager.switchCamera(cameraType.FRONT);
      setCameraState(cameraType.FRONT);
    }
  }
  const onToggleCamerafunc=()=>{
    setIsCameraOn(currentValue => !currentValue);
    onToggleCamera();
   
  }
  const onToggleMicrophone=()=>{
    setIsMicOn(currentValue => !currentValue);
    onmicoff();
  }




  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={onReverseCamera} style={styles.iconButton}>
        <Ionicons name="camera-reverse" size={30} color={'white'}/>
        </Pressable>
        <Pressable onPress={onToggleCamerafunc} style={styles.iconButton}>
        <MaterialIcons name={isCameraOn?"camera-off":"camera"} size={30} color={'white'}/>
        </Pressable>
        <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
        <MaterialIcons name={isMicOn?"microphone-off":"microphone"} size={30} color={'white'}/>
        </Pressable>
        <Pressable onPress={onHangupPress} style={[styles.iconButton,{backgroundColor:'red'}]}>
        <MaterialIcons name="phone-hangup" size={30} color={'white'}/>
        </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
    buttonsContainer:{
        backgroundColor:'#333333',
        padding:20,
        paddingBottom:40,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'auto',
    },
    iconButton:{
    backgroundColor:'#4a4a4a',
    padding: 15,
    borderRadius:50,
    },
});

export default CallActionBox