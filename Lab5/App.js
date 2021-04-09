import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import  Start  from './components/Start'
import  ScrollViewv1Comp  from './components/ScrollViewv1'
import  ScrollViewv2Comp  from './components/ScrollViewv2'
import  TouchableComp  from './components/Touchable'
import  SwipeableComp  from './components/Swipeable'


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
        <Stack.Screen name="ScrollView v1" component={ScrollViewv1Comp} options={{  title: 'ScrollView v1', headerTintColor: '#1791e8' }} />
        <Stack.Screen name="ScrollView v2" component={ScrollViewv2Comp} options={{ title: 'ScrollView v2', headerTintColor: '#518226' }}/>
        <Stack.Screen name="Touchable" component={TouchableComp} options={{ title: 'Touchable', headerTintColor: '#e09d00'}}/>
        <Stack.Screen name="Swipeable" component={SwipeableComp} options={{title: 'Swipeable', headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#1a1a1a'}, headerTitleStyle: {alignSelf: 'center', right:30}}}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


