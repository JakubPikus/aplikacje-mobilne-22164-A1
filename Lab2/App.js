
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import  start  from './components/start'
import  spread  from './components/spread'
import  rest  from './components/rest'
import  hook  from './components/hook'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="start">
        <Stack.Screen name="start" component={start} />
        <Stack.Screen name="spread" component={spread} />
        <Stack.Screen name="rest" component={rest} />
        <Stack.Screen name="hook" component={hook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
;
