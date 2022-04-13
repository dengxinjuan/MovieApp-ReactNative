/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
import Home from './screens/Home';
import Detail from './screens/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './components/Navbar';
const Stack = createNativeStackNavigator();

const App = () => {
  
 

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar main={false} navigation={navigation} />
            ),
          }}
        />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
};

export default App;