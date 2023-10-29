import React from 'react'
import { SafeAreaView,StatusBar} from 'react-native';
import ContactsScreen from './src/screens/ContactsScreen';
import CallingScreen from './src/screens/CallingScreen';
import IncomingCallScreen from './src/screens/IncomingCallScreen';
const App = () => {
  return (
    <SafeAreaView >
    <StatusBar barStyle={'dark-content'}/>
    {/* <ContactsScreen/> */}
    {/* <CallingScreen/> */}
    <IncomingCallScreen/>
    </SafeAreaView>
  );
};

export default App; 