/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from './components/MainNavigation';

const App = () => {
  
 

  return (
    <NavigationContainer>
         <MainNavigation />
  </NavigationContainer>
  
  );
};

export default App;