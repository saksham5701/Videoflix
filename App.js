import React from 'react'
import { SafeAreaView,StatusBar} from 'react-native';
import ContactsScreen from './src/screens/ContactsScreen';
const App = () => {
  return (
    <SafeAreaView >
    <StatusBar barStyle={'dark-content'}/>
    <ContactsScreen/>
    </SafeAreaView>
  );
};

export default App;