/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './src/screens/LoginScreen'
import AppNavigator from './src/navigation'
import Onboarding from './src/screens/Onboarding'
import { navigationRef } from './src/screens/RootNavigation';


const App=()=>{
return(
  <AppNavigator />
)
}

export default App;
