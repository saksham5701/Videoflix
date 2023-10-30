import React from 'react'
import { SafeAreaView,StatusBar} from 'react-native';
import ContactsScreen from './src/screens/ContactsScreen';
import CallingScreen from './src/screens/CallingScreen';
import IncomingCallScreen from './src/screens/IncomingCallScreen';
import CallScreen from './src/screens/CallScreen';
const App = () => {
  return (
    <SafeAreaView >
    <StatusBar barStyle={'dark-content'}/>
    {/* <ContactsScreen/> */}
    {/* <CallingScreen/> */}
    {/* <IncomingCallScreen/> */}
    <CallScreen/>
    </SafeAreaView>
  );
};

export default App; 