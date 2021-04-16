import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import  Start  from './components/Start'
import  ImageComp  from './components/Image'
import  NetInfoComp  from './components/NetInfo'
import  SliderComp  from './components/Slider'
import  LazyIconsComp  from './components/LazyIcons'
import  AsyncStorageComp  from './components/AsyncStorage'
import  SynchDaneComp  from './components/SynchDane'


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
        <Stack.Screen name="Image" component={ImageComp} options={{  title: 'Image', headerTintColor: '#1791e8' }} />
        <Stack.Screen name="NetInfo" component={NetInfoComp} options={{ title: 'NetInfo', headerTintColor: '#518226' }}/>
        <Stack.Screen name="Slider" component={SliderComp} options={{ title: 'Slider', headerTintColor: '#e09d00'}}/>
        <Stack.Screen name="LazyIcons" component={LazyIconsComp} options={{title: 'Lazy Icons', headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#1a1a1a'}, headerTitleStyle: {alignSelf: 'center', right:30}}}/>
        <Stack.Screen name="SynchronizacjaDanych" component={SynchDaneComp} options={{ title: 'Synchronizacja Danych', headerTintColor: '#518226' }}/>
        <Stack.Screen name="AsyncStorage" component={AsyncStorageComp} options={{ title: 'Async Storage', headerTintColor: '#e09d00'}}/>
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


