import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import  Start  from './components/Start'
import  Sort  from './components/Sort'
import  Lazy  from './components/Lazy'
import  Step  from './components/Step'


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Start} options={
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
        <Stack.Screen name="Sortowanie i filtrowanie" component={Sort} options={{  title: 'Sortowanie i filtrowanie', headerTintColor: '#1791e8' }} />
        <Stack.Screen name="Lazy loading" component={Lazy} options={{ title: 'Lazy loading', headerTintColor: '#518226' }}/>
        <Stack.Screen name="Step progress" component={Step} options={{ title: 'Step progress', headerTintColor: '#e09d00'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


