import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const CallingScreen = () => {
  return (
    <View style={styles.page}>
     <View style={styles.cameraPreview}>
      <Text style={styles.name}> Mr.S Pandey</Text>
      <Text style={styles.phoneNumber}> ringing +91 12456789579</Text>
      {/* <View style={{flex:1}}/> */}
      </View>


      <View style={styles.buttonsContainer}>
      <View style={styles.iconButton}>
        <Ionicons name="camera-reverse" size={30} color={'white'}/>
        </View>
        <View style={styles.iconButton}>
        <MaterialIcons name="camera-off" size={30} color={'white'}/>
        </View>
        <View style={styles.iconButton}>
        <MaterialIcons name="microphone-off" size={30} color={'white'}/>
        </View>
        <View style={[styles.iconButton,{backgroundColor:'red'}]}>
        <MaterialIcons name="phone-hangup" size={30} color={'white'}/>
        </View>
      </View>
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
buttonsContainer:{
    backgroundColor:'#333333',
    padding:20,
    paddingBottom:40,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    flexDirection:'row',
    justifyContent:'space-between',
},
iconButton:{
backgroundColor:'#4a4a4a',
padding: 15,
borderRadius:50,
},
});

export default CallingScreen