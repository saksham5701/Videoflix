import React from 'react'
import { SafeAreaView,StatusBar} from 'react-native';
import Navigation from './src/navigation';
const App = () => {
  return (
    <SafeAreaView>
    <StatusBar barStyle={'dark-content'}/>
    <Navigation/>
    </SafeAreaView>
  );
};

export default App; 