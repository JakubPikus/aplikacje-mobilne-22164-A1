import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import  Start  from './components/Start'
import  TextInputComp  from './components/TextInput'
import  SelectPicker  from './components/SelectPicker'
import  ModalComp  from './components/Modal'
import  DatePickerComp  from './components/DatePicker'
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
        <Stack.Screen name="TextInput" component={TextInputComp} options={{  title: 'TextInput', headerTintColor: '#1791e8' }} />
        <Stack.Screen name="Select i Picker" component={SelectPicker} options={{ title: 'Select i Picker', headerTintColor: '#518226' }}/>
        <Stack.Screen name="Modal" component={ModalComp} options={{ title: 'Modal', headerTintColor: '#e09d00'}}/>
        <Stack.Screen name="DatePicker" component={DatePickerComp} options={{title: 'DatePicker', headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#1a1a1a'}, headerTitleStyle: {alignSelf: 'center', right:25}}}/>
        <Stack.Screen name="ToastAndroid" component={ToastAndroid} options={{ title: 'ToastAndroid', headerTintColor: '#e09d00'}}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


