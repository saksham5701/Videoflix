import { View, Text,StyleSheet,ImageBackground } from 'react-native';
import React from 'react';
import bg from '../../../assets/images/ios_bg.png';

const IncomingCallScreen = () => {
  return (
    <View style={styles.root}>
      <ImageBackground source={bg} style={styles.bg} resizeMode='cover'  >
      <Text style={styles.name}>Shiva</Text>
      <Text style={styles.phoneNumber}> ringing +91 12456789579</Text>
      </ImageBackground>
      
    </View>
  );
};

const styles=StyleSheet.create({
root:{
    height:'100%',
    backgroundColor:'red',
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
    width:'100%',
    height:'100%',
}

})

export default IncomingCallScreen