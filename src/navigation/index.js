import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View ,StyleSheet} from 'react-native';

import CallScreen from '../screens/CallScreen'
import ContactsScreen from '../screens/ContactsScreen';
import CallingScreen from '../screens/CallingScreen';
import IncomingCallScreen from '../screens/IncomingCallScreen';
import Cameraoffscreen from '../screens/Cameraoffscreen';
import LoginScreen from '../screens/LoginScreen';

const Stack=createNativeStackNavigator();

const Navigation = () => {
  return (
    <View style={styles.root}>
    <NavigationContainer >
     <Stack.Navigator>
       <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="Contacts" component={ContactsScreen} />
       <Stack.Group screenOptions={{headerShown:false}}>
       <Stack.Screen name="IncomingCall" screenOptions={{headerShown:false}} component={IncomingCallScreen} />  
       <Stack.Screen name="Call" component={CallScreen} />
       <Stack.Screen name="Calling" component={CallingScreen} />
       <Stack.Screen name="cameraoff" component={Cameraoffscreen} />
       
       </Stack.Group>     
     </Stack.Navigator>
     </NavigationContainer>
     </View>
  );
};

const styles = StyleSheet.create({
    root:{
    height:'100%',
   },
});

export default Navigation