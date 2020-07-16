import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLogin  from './src/login/AppLogin'
import VideoDemo from './src/VideoDemo'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={AppLogin} />
        <Stack.Screen name="Video Demo" component={VideoDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;