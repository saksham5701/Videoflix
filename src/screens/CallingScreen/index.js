import { View, Text,StyleSheet ,Pressable} from 'react-native'
import React from 'react'
import CallActionBox from '../../components/CallActionBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation,useRoute} from '@react-navigation/core';

const CallingScreen = () => {

  const navigation=useNavigation();
 const route=useRoute();

  const user=route?.params?.user;
  const goBack=()=>{
  //  Navigation.goBack();
  navigation.pop();
  };
  const goForward=()=>{
  navigation.navigate('IncomingCall');

  };

  return (
    <View style={styles.page}>
    <Pressable onPress={goBack} style={styles.backButton}>
      <Ionicons name="chevron-back" color="white" size={25} />
    </Pressable>
    <Pressable onPress={goForward} style={styles.forwardButton}>
      <AntDesign name="right" color="white" size={25} />
    </Pressable>

     <View style={styles.cameraPreview}>
      <Text style={styles.name}> {user?.user_display_name}</Text>
      <Text style={styles.phoneNumber}> ringing +91 12456789579</Text>
      {/* <View style={{flex:1}}/> */}
      </View>

      <CallActionBox/>
    </View>
  );
};

const styles=StyleSheet.create({

page:{
    // backgroundColor:'red',
    height:'100%',
    backgroundColor:'#7b4e80',
},
cameraPreview:{
    backgroundColor:'#7b4e80',
    flex:1,
    alignItems:'center',
    paddingTop:10,
    paddingHorizontal:10,
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
backButton:{
  position:'absolute',
  top:50,
  left:10,
  zIndex:10,
},
forwardButton:{
  position:'absolute',
  top:50,
  right:10,
  zIndex:10,
}

});

export default CallingScreen