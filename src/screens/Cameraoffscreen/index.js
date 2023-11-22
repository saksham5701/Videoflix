import React from 'react'
import { View,StyleSheet,Pressable } from 'react-native'
import CallActionBox from '../../components/CallActionBox'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useNavigation,useRoute} from '@react-navigation/core';

const CallScreen = () => {
  const navigation=useNavigation();
  const route=useRoute();

  const goBack=()=>{
    //  Navigation.goBack();
    navigation.pop();
    };

  return (
    <View style={styles.root}>
    <View style={styles.page}>
    <Pressable onPress={goBack} style={styles.backButton}>
      <Ionicons name="chevron-back" color="white" size={25} />
    </Pressable>

      {/* <View style={styles.cameraPreview}  /> */}

      <CallActionBox/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    root:{
        height:'100%',
       },
    page:{
        flex:1,
        backgroundColor:'#7b4e80',
    },
    cameraPreview:{
        width:100,
        height:150,
        backgroundColor:'#ffff6e',
        borderRadius:10,
        position:'absolute',
        right:10,
        top:100,
    },
    backButton:{
      position:'absolute',
      top:50,
      left:10,
      zIndex:10,
    },
});

export default CallScreen