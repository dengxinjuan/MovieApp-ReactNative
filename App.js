/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  
 

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
};

export default App;