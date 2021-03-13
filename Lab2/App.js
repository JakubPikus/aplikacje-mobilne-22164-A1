import React from 'react';
import {StyleSheet} from 'react-native';
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
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={start} options={
          {  
            title: 'Menu główne', 
            headerTintColor: '#ffffff', 
            headerStyle: {
              backgroundColor: '#884444',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center'
            },
            }}/>
        <Stack.Screen name="Spread" component={spread} options={{  title: 'Co to Spread?', headerTintColor: '#1791e8' }} />
        <Stack.Screen name="Rest" component={rest} options={{ title: 'Co to Rest?', headerTintColor: '#518226' }}/>
        <Stack.Screen name="Hook" component={hook} options={{ title: 'Co to Hook?', headerTintColor: '#e09d00'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


