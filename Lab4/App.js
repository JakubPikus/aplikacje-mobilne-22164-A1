import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import  Start  from './components/Start'
import  TextInput  from './components/TextInput'
import  SelectPicker  from './components/SelectPicker'
import  Switch  from './components/Switch'
import  DatePicker  from './components/DatePicker'
import  ToastAndroid  from './components/ToastAndroid'


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
        <Stack.Screen name="TextInput" component={TextInput} options={{  title: 'TextInput', headerTintColor: '#1791e8' }} />
        <Stack.Screen name="Select i Picker" component={SelectPicker} options={{ title: 'Select i Picker', headerTintColor: '#518226' }}/>
        <Stack.Screen name="Switch" component={Switch} options={{ title: 'Switch', headerTintColor: '#e09d00'}}/>
        <Stack.Screen name="DatePicker" component={DatePicker} options={{ title: 'DatePicker', headerTintColor: '#e09d00'}}/>
        <Stack.Screen name="ToastAndroid" component={ToastAndroid} options={{ title: 'ToastAndroid', headerTintColor: '#e09d00'}}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


