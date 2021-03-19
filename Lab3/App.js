import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import  start  from './components/start'
import  sort  from './components/sort'
import  lazy  from './components/lazy'
import  step  from './components/step'


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
        <Stack.Screen name="Sortowanie i filtrowanie" component={sort} options={{  title: 'Sortowanie i filtrowanie', headerTintColor: '#1791e8' }} />
        <Stack.Screen name="Lazy loading" component={lazy} options={{ title: 'Lazy loading', headerTintColor: '#518226' }}/>
        <Stack.Screen name="Step progress" component={step} options={{ title: 'Step progress', headerTintColor: '#e09d00'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


