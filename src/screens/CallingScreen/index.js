import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CallActionBox from '../../components/CallActionBox';
const CallingScreen = () => {
  return (
    <View style={styles.page}>
     <View style={styles.cameraPreview}>
      <Text style={styles.name}> Mr.S Pandey</Text>
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

});

export default CallingScreen